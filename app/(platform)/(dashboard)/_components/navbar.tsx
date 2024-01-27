import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { Menu, User } from "lucide-react"
import Link from "next/link"

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
                <Button size="sm" variant="ghost">
                    <Link href="/profile">
                        <User className="h-6 w-6 mr-2"/>
                    </Link>
                </Button>
                <UserButton afterSignOutUrl="/"/>
            </div>
        </nav>
    )
}