"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Indicator } from "@/components/indicator";
import { verifyAnswer } from "@/actions/verify-answer";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

interface AnswerInputProps {
    problemId: string;
}

export const AnswerInput = ({ problemId }: AnswerInputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const [answer, setAnswer] = useState<string>("");
    const [isVerifying, setIsVerifying] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }, [])

    const handleTap = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (isCorrect) return;
        setIsCorrect(null);
        setAnswer(event.target.value);
    }

    return (
        <div
            className="relative text-gray-300 text-4xl flex flex-wrap items-center justify-center focus:outline-none w-full h-full"
            spellCheck={false}
            onClick={handleTap}
        >
            {
                answer.split('').map((char, index) => (
                    <span key={index} className="text-gray-500 m-1 flex h-10 w-10 items-center justify-center border-2 border-dashed border-orange-300 focus:outline-none">{char}</span>
                ))
            }
            <Indicator isVerifying={isVerifying} isCorrect={isCorrect} />
            {!answer && "Type to answer"}
            {!answer &&
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute -top-2 -right-1 inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                    <span className="relative -top-2 -right-1 inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
            }
            <form
                className="absolute right-0 bottom-0"
                action={async (formData: FormData) => {
                    setIsVerifying(true);
                    const isCorrect = await verifyAnswer(problemId, answer);

                    if (isCorrect) {
                        setIsCorrect(true);
                    } else {
                        setIsCorrect(false);
                    }

                    setIsVerifying(false);

                }}>
                <Input
                    type="text"
                    autoFocus={true}
                    autoCorrect="off"
                    autoComplete="off"
                    inputMode="text"
                    name="input"
                    ref={inputRef}
                    onChange={handleChange}
                    className="opacity-0 -z-1 w-1 h-1 overflow-hidden" />
                <Button type="submit" variant="ghost" />
            </form>
        </div>
    );
};