import { Sidebar } from "@/components/sidebar";
import { YouTubeEmbed } from "@next/third-parties/google";

const HelpPage = () => {
    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full m-2">
                <div className="w-full mb-4">
                    <h1 className="text-2xl md:text-3xl font-bold">Help</h1>
                </div>
                <div className="space-y-2">
                    <YouTubeEmbed videoid="VrDjr-_J5cg" params="controls=1" />
                </div>
            </div>
        </div>
    );
};

export default HelpPage;