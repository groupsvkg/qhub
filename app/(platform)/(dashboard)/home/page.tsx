"use client";

import { Sidebar } from "@/components/sidebar";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomePage = () => {
    const pathname = usePathname();
    
    return (
        <div className="pt-16 h-full">
            <Sidebar />
            <div className="md:pl-60 h-full">
                <div className="h-full m-6 flex flex-col items-center justify-start">
                    <div className="w-full mb-4">
                        <h1 className="text-2xl md:text-3xl font-bold">Home</h1>
                    </div>
                    <div className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {
                        routes.map(route => (
                            <Link key={route.href} href={route.href} className="hover:bg-gray-200 rounded-md">
                                <div className={cn(
                                    "flex flex-col items-center justify-center p-4 space-y-2 shadow-md border rounded-md",
                                    pathname === route.href && "border-l-2 border-purple-300"
                                    )}>
                                    <div>{route.icon}</div>
                                    <span className="text-gray-500 text-sm">{route.label}</span>
                                </div>
                            </Link>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;