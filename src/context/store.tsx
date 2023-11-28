"use client";
import axios from "axios";
import {
	createContext,
	useContext,
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
} from "react";
import { useSession } from "next-auth/react";

interface ContextProps {
	user: any;
	setUser: Dispatch<SetStateAction<any>>;
}

const GlobalContext = createContext<ContextProps>({
	user: {},
	setUser: () => {},
});

export const GlobalContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const { data: session, status } = useSession();
	const [user, setUser] = useState({});

	const getUser = async () => {
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

	useEffect(() => {
		if (status === "authenticated") {
			getUser();
		}
	}, [status]);

	return (
		<GlobalContext.Provider value={{ user, setUser }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
