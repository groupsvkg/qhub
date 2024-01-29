import { Logo } from "@/components/logo"
import { UserButton } from "@clerk/nextjs"
import { Menu } from "lucide-react"

export const Navbar = () => {
    return (
        <nav className="fixed top-0 border-b px-2 lg:px-4 h-16 w-full z-50 shadow-sm flex items-center justify-between">
            <div className="md:hidden">
                <Menu />
            </div>
            <div className="hidden md:block">
                <Logo />
            </div>
            <div className="flex items-center justify-center">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </nav>
    )
}