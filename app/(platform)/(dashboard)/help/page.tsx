import { Sidebar } from "@/components/sidebar";
import { YouTubeEmbed } from "@next/third-parties/google";

const HelpPage = () => {
    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full space-y-4 m-2">
                <YouTubeEmbed videoid="gvTm4dqCxqc" height={400} params="controls=1" />
                <YouTubeEmbed videoid="Cv9u-xDz7I4" height={400} params="controls=1" />
                <YouTubeEmbed videoid="m6P1PZSI8bo" height={400} params="controls=1" />
                <YouTubeEmbed videoid="wuoxDy-3SxQ" height={400} params="controls=1" />
                <YouTubeEmbed videoid="CP8CrZYOo0o" height={400} params="controls=1" />
                <YouTubeEmbed videoid="dtkoPT20jss" height={400} params="controls=1" />
            </div>
        </div>
    );
};

export default HelpPage;