import { Outlet } from "react-router";
import { Navbar } from "./navbar";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Footer } from "./footer";

export const MainLayout = () => {
	return (
		<div className="relative min-h-screen h-full no-scrollbar ">
			<DotPattern className={cn("dark:opacity-25 -z-10")} />
			<div className={`relative z-10`}>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};
