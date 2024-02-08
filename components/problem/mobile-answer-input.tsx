"use client";

import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { Indicator } from "@/components/indicator";
import { isInvalidInputChar } from "@/lib/keyboard";
import { verifyAnswer } from "@/actions/verify-answer";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";

interface MobileAnswerInputProps {
    problemId: string;
}

export const MobileAnswerInput = ({ problemId }: MobileAnswerInputProps) => {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const [answer, setAnswer] = useState<string[]>([])
    const [isTyping, setIsTyping] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    useEffect(() => {
        const handleKeyDown = async (event: KeyboardEvent) => {
            event.preventDefault();
            setAnswer([...answer, event.key]);

            if (isVerifying || isCorrect) return;
            if (isInvalidInputChar(event)) return;

            setIsTyping(true);


            if (event.key === "Enter" && event.code === "Enter") {
                if (answer.length === 0) {
                    setIsTyping(false);
                    return;
                }
                if (answer[answer.length - 1] === '\u23ce') return;

                setAnswer([...answer, '\u23ce']);
                setIsVerifying(true);

                const verify = async () => {
                    return await verifyAnswer(problemId, answer.join(''));
                }
                const result = await verify();

                if (result) {
                    setIsCorrect(true);
                    router.refresh();
                } else {
                    setIsCorrect(false);
                }

                setIsVerifying(false);

                return;
            }

            if (event.code === "Backspace") {
                if (answer.length === 1 || answer.length === 0) {
                    setIsTyping(false);
                }
                setIsCorrect(null);
                setAnswer(answer.slice(0, answer.length - 1));
            } else {
                if (answer[answer.length - 1] === '\u23ce') return;
                if (event.key.charCodeAt(0) >= 32 && event.key.charCodeAt(0) <= 126)
                    setAnswer([...answer, event.key]);
            }
        };

        // @ts-ignore
        document.addEventListener("keydown", handleKeyDown);

        // @ts-ignore
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [answer, isTyping, isVerifying, isCorrect, problemId, router]);

    const handleTap = () => {
        if (inputRef.current)
            inputRef.current.focus();
    }

    return (
        <div
            className="text-gray-400 font-semibold text-4xl flex flex-wrap items-center justify-center focus:outline-none w-full h-full"
            spellCheck={false}
            onClick={handleTap}
        >
            {
                isTyping && answer.map((char, index) => (
                    <span key={index} className="m-1 flex h-10 w-10 items-center justify-center border-2 border-dashed border-orange-300 focus:outline-none">{char}</span>
                ))
            }
            {isTyping && <Indicator isVerifying={isVerifying} isCorrect={isCorrect} />}
            {!isTyping && "Tap to answer"}
            {!isTyping && <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute -top-2 -right-1 inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                <span className="relative -top-2 -right-1 inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>}
            <Input ref={inputRef} className="opacity-0" tabIndex={-1} value={answer} />
        </div>
    );
};