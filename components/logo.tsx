import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
    src: "../public/fonts/font.woff2"
})

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center space-x-1 md:flex ml-1">
                <Image 
                    src="/logo.svg"
                    alt="Logo"
                    height={30}
                    width={30}
                />
                <p className={cn(
                    "hidden md:block text-lg text-neutral-700 pt-1",
                    headingFont.className
                )}>
                    QHub
                </p>
            </div>
        </Link>
    );
}