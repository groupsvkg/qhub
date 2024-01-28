import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs";
import { Activity, Grip, Trophy, Users } from "lucide-react";
import Link from "next/link";

const routes = [
    {
        href: "/problems",
        icon: <Grip className="h-4 w-4 mr-2"/>,
        label: "Problems"
    },
    {
        href: "/users",
        icon: <Users className="h-4 w-4 mr-2"/>,
        label: "Users"
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
    }
];

export const Sidebar = async () => {
    const user = await currentUser();

    return (
        <aside className="fixed left-0 h-full w-52 flex flex-col border-r z-50 shadow-sm p-6 space-y-2 ">
            <h1 className="text-md font-bold leading-none mb-4 text-muted-foreground">Hello {user?.firstName}</h1>
            {
                routes.map(route => (
                    <Link key={route.href} href={route.href}>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex">{route.icon} {route.label}</div>
                        </div>
                    </Link>
                ))
            }
            <Separator className="my-4" />
        </aside>
    );
};