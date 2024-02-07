import { Logo } from "@/components/logo"
import { UserButton } from "@clerk/nextjs"
import { PlusCircle, Trophy } from "lucide-react"
import { MobileSidebar } from "@/components/mobile-sidebar"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const Navbar = () => {
    return (
        <nav className="fixed top-0 border-b px-2 lg:px-4 h-16 w-full z-50 shadow-sm flex items-center justify-between bg-white">
            <div className="flex items-center justify-center">
                <MobileSidebar />
                <Logo />
            </div>
            <div className="flex items-center justify-between gap-3">
                <Link href="/leaderboard" className="hover:bg-gray-200 rounded-full">
                    <div className={cn(
                        "flex items-center justify-start",
                    )}>
                        <div><Trophy className="h-5 w-5 text-gray-400" /></div>
                    </div>
                </Link>
                <Link href="/post" className="hover:bg-gray-200 rounded-full">
                    <div className={cn(
                        "flex items-center justify-start",
                    )}>
                        <div><PlusCircle className="h-5 w-5 text-gray-400" /></div>
                    </div>
                </Link>
                <UserButton afterSignOutUrl="/" />
            </div>
        </nav>
    )
}