"use client";

import { KeyboardEvent, useEffect, useState } from "react";
import { Indicator } from "@/components/indicator";
import { isInvalidInputChar } from "@/lib/keyboard";

export const AnswerInput = () => {
    const [answer, setAnswer] = useState<string[]>([])
    const [isTyping, setIsTyping] = useState(false);
    const [isEnterKey, setIsEnterKey] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            event.preventDefault();

            if (isVerifying || isCorrect) return;

            setIsTyping(true);

            if (isInvalidInputChar(event)) return;

            if (event.key === "Enter" && event.code === "Enter") {
                setAnswer([...answer, '\u23ce']);
                setIsCorrect(false);

                // TODO: verify answer and set isCorrect to true or false
                return;
            }

            if (event.code === "Backspace") {
                setAnswer(answer.slice(0, answer.length - 1));
            } else {
                if (event.key.charCodeAt(0) >= 32 && event.key.charCodeAt(0) <= 126)
                    setAnswer([...answer, event.key]);
            }
        };

        // @ts-ignore
        document.addEventListener("keydown", handleKeyDown);

        // @ts-ignore
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [answer, isVerifying, isCorrect])

    return (
        <div
            className="text-gray-400 font-semibold text-4xl flex flex-wrap items-center justify-center focus:outline-none w-full"
            spellCheck={false}

        >
            {
                isTyping && answer.map((char, index) => (
                    <span key={index} className="m-1 flex h-10 w-10 items-center justify-center border-2 border-dashed border-orange-300 focus:outline-none">{char}</span>
                ))
            }
            {isTyping && <Indicator isVerifying={isVerifying} isCorrect={isCorrect} />}
            {!isTyping && "Type to answer"}
            {!isTyping && <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute -top-2 -right-1 inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                <span className="relative -top-2 -right-1 inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>}
        </div>
    );
};