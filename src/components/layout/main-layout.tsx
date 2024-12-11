import { Outlet } from "react-router"
import { Navbar } from "../navbar/navbar"
import DotPattern from "../ui/dot-pattern"
import { cn } from "@/lib/utils"

export const MainLayout = () => {
    return (
        <div className={`min-h-screen`}>
            <Navbar />
            <DotPattern
					className={
                        cn(
                            // "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                            "dark:opacity-25 -z-10")
                    }
				/>
            <Outlet />
        </div>
    )
}