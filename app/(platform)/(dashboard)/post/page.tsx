import { Sidebar } from "@/components/sidebar";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PostForm } from "./_components/post-form";
import Link from "next/link";

const PostPage = () => {
    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60">
                <div className="flex flex-col items-center justify-center p-2">
                    <Card className="w-full md:max-w-4xl">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-2xl">Post a Problem</CardTitle>
                            <CardDescription>
                                Post a problem related to any topic.<br />
                                <span className="text-gray-500 mt-2 text-xs">Usefull links:&nbsp;</span>
                                <span className="text-blue-400 text-xs">
                                    <Link href={"https://www.markdownguide.org/cheat-sheet/"} rel="noopener noreferrer" target="_blank" prefetch={false}>markdown</Link>,&nbsp;
                                    <Link href="https://www.w3schools.com/graphics/svg_intro.asp" rel="noopener noreferrer" target="_blank">svg</Link>,&nbsp;
                                    <Link href="https://www.w3schools.com/html/default.asp" rel="noopener noreferrer" target="_blank">html</Link>,&nbsp;
                                    <Link href="https://www.w3schools.com/css/default.asp" rel="noopener noreferrer" target="_blank">css</Link>,&nbsp;
                                    <Link href="https://www.w3schools.com/html/html_youtube.asp" rel="noopener noreferrer" target="_blank">youtube iframe</Link>,&nbsp;and&nbsp;
                                    <Link href="https://developers.google.com/youtube/player_parameters" rel="noopener noreferrer" target="_blank">youtube parameters</Link>
                                </span>
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