import { Sidebar } from "@/components/sidebar";
import { YouTubeEmbed } from "@next/third-parties/google";

const HelpPage = () => {
    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full m-2">
                <div className="hidden md:block space-y-4">
                    <YouTubeEmbed videoid="gvTm4dqCxqc" height={400} params="controls=0" />
                    <YouTubeEmbed videoid="Cv9u-xDz7I4" height={400} params="controls=0" />
                    <YouTubeEmbed videoid="m6P1PZSI8bo" height={400} params="controls=0" />
                    <YouTubeEmbed videoid="wuoxDy-3SxQ" height={400} params="controls=0" />
                    <YouTubeEmbed videoid="CP8CrZYOo0o" height={400} params="controls=0" />
                    <YouTubeEmbed videoid="dtkoPT20jss" height={400} params="controls=0" />
                </div>
                <div className="md:hidden space-y-4">
                    <YouTubeEmbed videoid="gvTm4dqCxqc" height={200} params="controls=0" />
                    <YouTubeEmbed videoid="Cv9u-xDz7I4" height={200} params="controls=0" />
                    <YouTubeEmbed videoid="m6P1PZSI8bo" height={200} params="controls=0" />
                    <YouTubeEmbed videoid="wuoxDy-3SxQ" height={200} params="controls=0" />
                    <YouTubeEmbed videoid="CP8CrZYOo0o" height={200} params="controls=0" />
                    <YouTubeEmbed videoid="dtkoPT20jss" height={200} params="controls=0" />
                </div>
            </div>
        </div>
    );
};

export default HelpPage;