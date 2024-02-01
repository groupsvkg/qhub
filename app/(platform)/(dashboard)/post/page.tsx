import { Sidebar } from "@/components/sidebar";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PostForm } from "./_components/post-form";
import Link from "next/link";

const PostPage = () => {
    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full ">
                <div className="flex flex-col items-center justify-center p-4">
                    <Card className="w-full md:max-w-4xl">
                        <CardHeader>
                            <CardTitle className="text-2xl">Post a Problem</CardTitle>
                            <CardDescription>
                                Post a problem related to any topic (
                                <Link className="text-blue-400 underline p-1" href={"https://www.markdownguide.org/cheat-sheet/"} rel="noopener noreferrer" target="_blank" prefetch={false}>markdown help</Link>)
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <PostForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PostPage;