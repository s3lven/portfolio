import { useRoutes } from "react-router";
import { MainLayout } from "@/components/layout/main-layout";
import { HomePage } from "@/features/home/home-page";

export const AppRoutes = () => {
	const routes = [
		{
			element: <MainLayout />,
			children: [{ path: "/", element: <HomePage /> }],
		},
	];

	const element = useRoutes([...routes]);
	return <>{element}</>;
};