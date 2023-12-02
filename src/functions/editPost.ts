import axios from "axios";

const editPost = async (
	setError: any,
	setSuccess: any,
	data: any,
	router: any
) => {
	setError("");
	setSuccess("");

	try {
		const res = await axios({
			method: "PATCH",
			url: `${process.env.NEXT_PUBLIC_URL}/api/post/edit`,
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify(data),
		});
		if (res.status === 200) {
			let responseRecieved = res.data;
			if (responseRecieved) {
				setSuccess(`Post ${responseRecieved.name} Updated`);

				router.push(`/editor/${responseRecieved.slug}`);
				setError("");
				setSuccess("");
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

export default editPost;
