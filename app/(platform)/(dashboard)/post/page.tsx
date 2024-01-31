import { Sidebar } from "@/components/sidebar";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PostForm } from "./_components/post-form";

const PostPage = () => {
    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full ">
                <div className="flex flex-col items-center justify-center p-4">
                    <Card className="w-full md:max-w-4xl">
                        <CardHeader>
                            <CardTitle className="text-2xl">Post a Problem</CardTitle>
                            <CardDescription>Post a problem related to any topic</CardDescription>
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