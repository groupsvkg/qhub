import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs"

const PlatformLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <ClerkProvider>
            <div className="h-full">
                {children}
                <Toaster />
            </div>
        </ClerkProvider>
    )
};

export default PlatformLayout;