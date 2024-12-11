import { Outlet } from "react-router"
import { Navbar } from "../navbar/navbar"

export const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}