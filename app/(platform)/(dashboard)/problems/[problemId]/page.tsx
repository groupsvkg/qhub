import { Problem } from "@/components/problem";
import { Sidebar } from "@/components/sidebar";

const ProblemPage = ({params}: { params: { problemId: string }}) => {

    return (
        <div className="pt-16 h-full">
            <Sidebar />
            <div className="md:pl-60 h-full">
                <div className="h-full flex flex-col items-center justify-start p-4">
                    <Problem problemId={params.problemId}/>
                </div>
            </div>
        </div>
    );
};

export default ProblemPage;