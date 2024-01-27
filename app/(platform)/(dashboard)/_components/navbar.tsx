import { Logo } from "@/components/logo"
import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
    return (
        <nav className="fixed top-0 bg-slate-300 border-b px-2 lg:px-4 h-16 w-full z-50 shadow-sm flex items-center justify-between">
            <Logo />
            <UserButton afterSignOutUrl="/"/>
        </nav>
    )
}