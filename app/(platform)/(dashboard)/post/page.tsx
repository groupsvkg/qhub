import { Sidebar } from "@/components/sidebar";

import { Editor } from "@/components/editor"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PostPage = () => {
    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full ">
                <div className="flex flex-col items-center justify-center p-4">
                    <Card className="w-full max-w-3xl">
                        <CardHeader>
                            <CardTitle className="text-2xl">Post a Problem</CardTitle>
                            <CardDescription>Post a problem related to any topic</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action="" className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="description">Question Description</Label>
                                    <Editor />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="answer">Answer</Label>
                                    <Input id="answer" placeholder="Enter your answer or answers, separated by commas."/>
                                </div>
                                <Button className="w-full" type="submit">
                                    Post Problem
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PostPage;