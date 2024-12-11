// import { Moon } from "lucide-react";

import { ModeToggle } from "@/features/dark-mode/components/mode-toggle";
import { cn } from "@/lib/utils";

export const Navbar = () => {
	return (
		<nav
			className={cn(
                // "backdrop-blur-sm"
            )}>
			<div className="container mx-auto px-4 py-4 flex justify-between items-center ">
				{/* logo and name placement */}
				<h1 className="text-xl font-bold font-mono">
					ewiz.dev
				</h1>
				<div className="flex items-center gap-4">
					{/* <a href="#" className="hover:text-primary transition-colors">Career</a>
                    <a href="#" className="hover:text-primary transition-colors">Projects</a>
                    <a href="#" className="hover:text-primary transition-colors">Skills</a>
                    <a href="#" className="hover:text-primary transition-colors">Contact</a> */}
                    <ModeToggle />
				</div>
			</div>
		</nav>
	);
};
