import axios from "axios";

const handleSubmit = async (
	e: any,
	setError: any,
	setSuccess: any,
	data: any,
	router: any
) => {
	e.preventDefault();
	setError("");
	setSuccess("");

	try {
		const res = await axios({
			method: "POST",
			url: `${process.env.NEXT_PUBLIC_URL}/api/post/create`,
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify(data),
		});
		if (res.status === 200) {
			let responseRecieved = res.data;
			if (responseRecieved) {
				setSuccess(`Post ${responseRecieved.name} Created`);

				setTimeout(function () {
					router.push(`/editor/${responseRecieved.slug}`);
					setError("");
					setSuccess("");
				}, 3000);
			}
		} else {
			setError("Error!!");
		}
	} catch (err: any) {
		if (err.response) {
			if (err.response.data) {
				let { message } = err.response.data;
				setError(message);
			}
		}
	}
};

export default handleSubmit;
