"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {routes} from "@/config/routes";

export const Sidebar = () => {
    const { user } = useUser();
    const pathname = usePathname();

    return (
        <aside className="hidden md:block fixed left-0 h-full w-60 border-r z-50 shadow-sm p-6 pt-4 space-y-2">
            <h1 className="text-lg font-bold">Hello, {user?.firstName}</h1>
            <div className="flex flex-col justify-center space-y-1 pl-4">
                {
                    routes.map(route => (
                        <Link key={route.href} href={route.href} className="hover:bg-gray-200">
                            <div className={cn(
                                "flex items-center justify-start p-1",
                                pathname === route.href && "border-l-2 border-purple-300"
                                )}>
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