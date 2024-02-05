"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { routes } from "@/config/routes";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const MobileSidebar = () => {
    const { user } = useUser();
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <aside className="fixed left-0 h-full w-60 z-50 shadow-sm p-6 pt-4 space-y-2">
                    <h1 className="text-lg font-bold">Hello, {user?.firstName}</h1>
                    <div className="flex flex-col justify-center space-y-1 pl-4">
                        {
                            routes.map(route => (
                                <SheetClose asChild key={route.href}>
                                    <Link key={route.href} href={route.href} className="hover:bg-gray-200">
                                        <div className={cn(
                                            "flex items-center justify-start p-1",
                                            pathname === route.href && "border-l-2 border-purple-300"
                                        )}>
                                            <div>{route.icon}</div>
                                            <span className="text-gray-500 text-sm">{route.label}</span>
                                        </div>
                                    </Link>
                                </SheetClose>
                            ))
                        }
                    </div>
                    <Separator className="my-4" />
                </aside>
            </SheetContent>
        </Sheet>
    );
};