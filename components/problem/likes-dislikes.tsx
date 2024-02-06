"use client";

import { dislikeProblem } from "@/actions/dislike-problem";
import { likeProblem } from "@/actions/like-problem";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react"
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface LikesDislikesProps {
    problemId: string;
    likes: number;
    dislikes: number;
}

export const LikesDislikes = ({ problemId, likes, dislikes }: LikesDislikesProps) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleLikesClick = () => {
        startTransition(async () => {
            await likeProblem(problemId);
            router.refresh();
        });
    }

    const handleDislikesClick = () => {
        startTransition(async () => {
            await dislikeProblem(problemId);
            router.refresh();
        });
    }

    return (
        <div className="absolute right-0 flex justify-end text-gray-500">
            <div
                className={cn(
                    "flex hover:bg-gray-100 rounded-full px-2 hover:cursor-pointer",
                )}
                onClick={handleLikesClick} aria-disabled={isPending}>
                {likes} <ArrowUp className="h-6 w-6 text-green-500" />
            </div>
            <div
                className={cn(
                    "flex hover:bg-gray-100 rounded-full px-2 hover:cursor-pointer",
                )}
                onClick={handleDislikesClick} aria-disabled={isPending}>
                {dislikes} <ArrowDown className="h-6 w-6 text-red-500 hover:bg-gray-100 rounded-full" />
            </div>
        </div>
    );
};