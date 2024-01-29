import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs";
import { Activity, Grip, PlusCircle, Trophy, User, Users } from "lucide-react";
import Link from "next/link";

const routes = [
    {
        href: "/problems",
        icon: <Grip className="h-4 w-4 mr-2"/>,
        label: "Problems"
    },
    {
        href: "/post",
        icon: <PlusCircle className="h-4 w-4 mr-2"/>,
        label: "Post"
    },
    {
        href: "/activity",
        icon:  <Activity className="h-4 w-4 mr-2"/>,
        label: "Activity"
    },
    {
        href: "/leaderboard",
        icon:  <Trophy className="h-4 w-4 mr-2"/>,
        label: "Leaderboard"
    },
    {
        href: "/users",
        icon: <Users className="h-4 w-4 mr-2"/>,
        label: "Users"
    },
    {
        href: "/profile",
        icon: <User className="h-4 w-4 mr-2"/>,
        label: "Profile"
    },
];

export const Sidebar = async () => {
    const user = await currentUser();

    return (
        <aside className="hidden md:block fixed left-0 h-full w-60 border-r z-50 shadow-sm p-6 space-y-4">
            <h1 className="text-xl font-bold">Hello {user?.firstName}</h1>
            <div className="flex flex-col justify-center space-y-3 pl-4">
                {
                    routes.map(route => (
                        <Link key={route.href} href={route.href}>
                            <div className="flex items-center justify-start">
                                <div>{route.icon}</div>
                                <span className="text-gray-500 text-sm">{route.label}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Separator className="my-4" />
        </aside>
    );
};