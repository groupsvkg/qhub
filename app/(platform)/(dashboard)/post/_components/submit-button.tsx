import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button className="w-full" type="submit">
            {
                pending ? "Post Problem..." : "Post Problem"
            }
        </Button>
    );
};