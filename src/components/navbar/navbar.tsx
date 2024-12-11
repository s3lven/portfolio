// import { Moon } from "lucide-react";

import { ModeToggle } from "@/features/dark-mode/components/mode-toggle";
import { cn } from "@/lib/utils";

export const Navbar = () => {
	return (
		<nav
			className={cn(
                // "backdrop-blur-sm"
            )}>
			<div className="px-6 lg:px-0 container mx-auto py-4 flex justify-between items-center">
				{/* logo and name placement */}
				<h1 className="text-xl font-bold font-mono">
					ewiz.dev
				</h1>
				<div className="flex items-center gap-4">
                    <ModeToggle />
				</div>
			</div>
		</nav>
	);
};
