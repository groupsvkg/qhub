import { Sidebar } from "@/components/sidebar";
import { db } from "@/lib/db";

const ProblemsPage = async () => {
    const problems = await db.problem.findMany({
        take: 10,
        include: {
            user: true
        }
    })

    console.log(problems);
    
    return (
        <div className="pt-16 h-full">
            <Sidebar />
            <div className="md:pl-60 h-full bg-red-100">
                <div className="mx-auto bg-green-200 max-w-4xl">
                    <h1 className="text-2xl font-bold mb-4">Problems</h1>
                    <div className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        <div>Problem 1</div>
                        <div>Problem 2</div>
                        <div>Problem 3</div>
                        <div>Problem 4</div>
                        <div>Problem 5</div>
                        <div>Problem 6</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemsPage