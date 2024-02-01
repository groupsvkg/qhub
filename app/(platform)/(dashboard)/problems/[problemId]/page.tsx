import { Problem } from "@/components/problem";
import { Sidebar } from "@/components/sidebar";

const ProblemPage = ({params}: { params: { problemId: string }}) => {

    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60">
            <div className="flex flex-col items-center justify-center p-4">
                    <Problem problemId={params.problemId}/>
                </div>
            </div>
        </div>
    );
};

export default ProblemPage;