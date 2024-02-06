import { Indicator } from "@/components/indicator";
import { Action } from "@prisma/client";
import { CheckCheck, Eye, PlusCircle, Trash2, X } from "lucide-react";

interface AnswerPreviewProps {
    input: string | null;
    action: Action;
}

export const AnswerPreview = ({ input, action }: AnswerPreviewProps) => {
    return (
        <div
            className="text-gray-400 font-semibold text-4xl flex flex-wrap items-center justify-center focus:outline-none w-full"
            spellCheck={false}
        >
            {
                input && input.split('').map((char, index) => (
                    <span key={index} className="m-1 flex h-10 w-10 items-center justify-center border-2 border-dashed border-orange-300 focus:outline-none">{char}</span>
                ))
            }
            {
                !input &&
                <div className="flex items-center justify-center gap-2">
                    {action}
                    {action === Action.SOLVED && <CheckCheck className="w-8 h-8 text-green-600" />}
                    {action === Action.FAILED && <X className="w-8 h-8 text-red-600" />}
                    {action === Action.CREATED && <PlusCircle className="w-8 h-8 text-blue-600" />}
                    {action === Action.DELETED && <Trash2 className="w-8 h-8 text-brown-600" />}
                    {action === Action.VIEWED && <Eye className="w-8 h-8 text-purple-600" />}
                </div>}
            {input && <Indicator isVerifying={false} isCorrect={action === Action.SOLVED ? true : false} />}
        </div>
    );
};