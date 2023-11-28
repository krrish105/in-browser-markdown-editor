import axios from "axios";

const deletePost = async (
	setError: any,
	setSuccess: any,
	slug: any,
	router: any
) => {
	setError("");
	setSuccess("");

	try {
		const res = await axios({
			method: "DELETE",
			url: `${process.env.NEXT_PUBLIC_URL}/api/post/${slug}`,
		});

		if (res.status === 200) {
			setSuccess(`Project ${name} Deleted`);
			setTimeout(function () {
				router.push(`/editor`);
			}, 3000);
		} else {
			setError("Error!!");
		}
	} catch (err: any) {
		setError("Error!!");
	}
};

export default deletePost;
