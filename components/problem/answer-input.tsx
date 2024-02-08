"use client";

import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { Indicator } from "@/components/indicator";
import { isInvalidInputChar } from "@/lib/keyboard";
import { verifyAnswer } from "@/actions/verify-answer";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

interface AnswerInputProps {
    problemId: string;
}

export const AnswerInput = ({ problemId }: AnswerInputProps) => {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement | null>(null)

    const [answer, setAnswer] = useState<string[]>([])
    const [isTyping, setIsTyping] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    useEffect(() => {
        const handleKeyDown = async (event: KeyboardEvent) => {
            event.preventDefault();

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
    }, [answer, isTyping, isVerifying, isCorrect, problemId]);

    const handleTap = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <div
            className="text-gray-400 font-semibold text-4xl flex flex-wrap items-center justify-center focus:outline-none w-full"
            spellCheck={false}
            onClick={handleTap}
        >
            {
                isTyping && answer.map((char, index) => (
                    <span key={index} className="m-1 flex h-10 w-10 items-center justify-center border-2 border-dashed border-orange-300 focus:outline-none">{char}</span>
                ))
            }
            {isTyping && <Indicator isVerifying={isVerifying} isCorrect={isCorrect} />}
            {!isTyping && "Type to answer"}
            {!isTyping &&
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute -top-2 -right-1 inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                    <span className="relative -top-2 -right-1 inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
            }
            <Input ref={inputRef} className="opacity-0 w-0 h-0" />
        </div>
    );
};