import { Activity, Grip, HelpCircle, Home, PlusCircle, Trophy, User, Users } from "lucide-react";


export const routes = [
    {
        href: "/",
        icon: <Home className="h-4 w-4 mr-2" />,
        label: "Home"
    },
    {
        href: "/problems",
        icon: <Grip className="h-4 w-4 mr-2" />,
        label: "Problems"
    },
    {
        href: "/post",
        icon: <PlusCircle className="h-4 w-4 mr-2" />,
        label: "Post"
    },
    {
        href: "/activity",
        icon: <Activity className="h-4 w-4 mr-2" />,
        label: "Activity"
    },
    {
        href: "/leaderboard",
        icon: <Trophy className="h-4 w-4 mr-2" />,
        label: "Leaderboard"
    },
    {
        href: "/users",
        icon: <Users className="h-4 w-4 mr-2" />,
        label: "Users"
    },
    {
        href: "/profile",
        icon: <User className="h-4 w-4 mr-2" />,
        label: "Profile"
    },
    {
        href: "/help",
        icon: <HelpCircle className="h-4 w-4 mr-2" />,
        label: "Help"
    },
];
