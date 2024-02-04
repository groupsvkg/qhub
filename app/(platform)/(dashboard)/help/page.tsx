import { Sidebar } from "@/components/sidebar";
import { YouTubeEmbed } from "@next/third-parties/google";

const HelpPage = () => {
    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full m-2">
                <div className="space-y-2">
                    <YouTubeEmbed videoid="0lgv6bn7h2w" params="controls=1" />
                    <YouTubeEmbed videoid="gvTm4dqCxqc" params="controls=1" />
                    <YouTubeEmbed videoid="Cv9u-xDz7I4" params="controls=1" />
                    <YouTubeEmbed videoid="m6P1PZSI8bo" params="controls=1" />
                    <YouTubeEmbed videoid="wuoxDy-3SxQ" params="controls=1" />
                    <YouTubeEmbed videoid="CP8CrZYOo0o" params="controls=1" />
                    <YouTubeEmbed videoid="dtkoPT20jss" params="controls=1" />
                </div>
            </div>
        </div>
    );
};

export default HelpPage;