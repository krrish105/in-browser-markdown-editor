import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/utilities/authOptions";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect("/");
	} else {
		return <>{children}</>;
	}
};
export default DashboardLayout;
