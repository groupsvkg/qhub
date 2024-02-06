import { Sidebar } from "@/components/sidebar";
import { Activity } from "../_components/activity";

const ActivityIdPage = ({
    params,
    searchParams
}: {
    params: { problemId: string }; searchParams?: { [key: string]: string | string[] | undefined };
}) => {

    return (
        <div className="pt-16 h-full">
            <Sidebar />
            <div className="md:pl-60 h-full">
                <div className="h-full flex flex-col items-center justify-start p-4">
                    <Activity problemId={params.problemId} activityId={searchParams!.activityId as string} />
                </div>
            </div>
        </div>
    );
};

export default ActivityIdPage;