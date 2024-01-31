"use client";

import { Sidebar } from "@/components/sidebar";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const ProblemPage = () => {
    const params = useParams();
    

    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full ">
                Problem Page {params.problemId}
            </div>
        </div>
    );
};

export default ProblemPage;