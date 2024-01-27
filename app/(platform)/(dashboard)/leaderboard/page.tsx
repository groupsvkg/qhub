import { Sidebar } from "../_components/sidebar"

const LeaderboardPage = () => {
    return (
        <div className="pt-16 md:pl-60 h-full">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            Leaderboard Page
        </div>
    );
};

export default LeaderboardPage;