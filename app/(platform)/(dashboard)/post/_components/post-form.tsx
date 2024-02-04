"use client";

import { onCreate } from "@/actions/create-problem"
import { Editor } from "@/components/editor"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";
import { useRef } from "react";
import { SubmitButton } from "./submit-button";

export const PostForm = () => {
    const ref = useRef<HTMLFormElement>(null);

    return (
        <form
            ref={ref}
            action={async (formData: FormData) => {
                const problem = await onCreate(formData);

                if (!problem) {
                    toast({
                        title: "Failed to create problem",
                        variant: "destructive"
                    });
                    throw new Error("Somthing went wrong");
                }

                toast({
                    title: "Problem created successfully",
                })
                ref.current?.reset();
                redirect(`/problems/${problem.id}`);

            }} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                    id="category"
                    name="category"
                    placeholder="Enter problem category" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    name="title"
                    placeholder="Enter problem title" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Editor />
            </div>
            <div className="space-y-2">
                <Label htmlFor="answer">Answer</Label>
                <Input
                    id="answer"
                    name="answer"
                    placeholder="Enter your answer or answers, separated by commas." />
            </div>
            <SubmitButton />
        </form>
    )
}