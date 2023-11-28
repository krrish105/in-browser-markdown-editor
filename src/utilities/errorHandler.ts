interface CustomError {
	statusCode: number;
	message: string;
	errorFields: Array<Object>;
}
const errorHandler = (err: any) => {
	let customError: CustomError = {
		statusCode: err.statusCode || 500,
		message: err.message || "Something went wrong, try again later",
		errorFields: [],
	};

	if (err.name === "ValidationError") {
		customError.message =
			"Project validation failed! Please solve the errors before submitting again";
		customError.errorFields = Object.keys(err.errors).map((item: any) => {
			return {
				name: item,
				message: err.errors[item].message,
			};
		});
		customError.statusCode = 400;
	}

	if (err.code && err.code === 11000) {
		customError.message = `Duplicate value entered for ${Object.keys(
			err.keyValue
		)} field, please choose another value`;
		customError.statusCode = 400;
		customError.errorFields = [
			{
				name: Object.keys(err.keyValue)[0],
				message: "Duplicate value entered",
			},
		];
	}

	if (err.name === "CastError") {
		customError.message = `No item found with id : ${err.value}`;
		customError.statusCode = 404;
		customError.errorFields = [];
	}
	return { ...customError };
};

export default errorHandler;
