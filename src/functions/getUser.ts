import axios from "axios";

const getUser = async ({ setUser }: any) => {
	try {
		const res = await axios({
			method: "GET",
			url: `${process.env.NEXT_PUBLIC_URL}/api/user`,
		});

		if (res.status === 200) {
			let responseRecieved = res.data;
			if (responseRecieved) {
				setUser(responseRecieved.user ? responseRecieved.user : {});
			}
		} else {
			setUser({});
		}
	} catch (err: any) {
		if (err.response) {
			if (err.response.data) {
				let { message } = err.response.data;
				console.log(message);
			}
		}
	}
};

export default getUser;
