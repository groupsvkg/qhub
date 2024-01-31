"use server";

import { createProblem } from "@/lib/problem-service";
import { revalidatePath } from "next/cache";

export const onCreate = async (formData: FormData) => {
    const description = formData.get("description") as string;
    const answer = formData.get("answer") as string;

    if(!description || !answer) return;
    
    try{
        const problem = await createProblem(description, answer);

        revalidatePath("/");

        return problem;
    } catch(error) {
        throw new Error("Internal Error");
    }
    
}