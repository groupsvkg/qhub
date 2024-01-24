import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
});

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ]
})

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn(
                "flex items-center justify-center flex-col",
                headingFont.className
            )}>
                <div className="mb-4 flex items-center border shadow-sm p-2 px-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Image 
                        src="/logo.svg"
                        alt="Logo"
                        height={40}
                        width={40}
                        className="mr-2"
                    />
                    QHub
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    Where Knowledge Meets Fun!
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-pink-600 to-green-300 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    Explore, Play, Learn
                </div>
            </div>
            <div className={cn(
                "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
                textFont.className
            )}>
                Dive into a world of endless knowledge and excitement with QHub, where every question is a stepping stone to brilliance. Whether you&apos;re a trivia enthusiast or a casual learner, our diverse range of quizzes caters to all levels of expertise. Challenge yourself, compete with friends, and embark on a journey of discovery. Ignite your intellect!
            </div>
            <Button className="mt-6" size="lg">
                <Link href="/sign-up">Get Started</Link>
            </Button>
        </div>
    );
};

export default MarketingPage;