"use server";

import { createProblem } from "@/lib/problem-service";
import { revalidatePath } from "next/cache";

export const onCreate = async (formData: FormData) => {
    const category = formData.get("category") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const answer = formData.get("answer") as string;

    if (!category || !title || !description || !answer) return;

    try {
        const problem = await createProblem(category, title, description, answer);

        revalidatePath("/");

        return problem;
    } catch (error) {
        throw new Error("Internal Error");
    }

}