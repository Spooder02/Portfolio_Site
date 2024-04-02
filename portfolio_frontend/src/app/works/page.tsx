import ItemCard from "@/app/_components/ItemCard";
import { Metadata } from "next";
import { ItemCardData } from "@/datatype";

export const metadata: Metadata = {
    title: "Developments",
    description: "This is a page which shows what I made"
}

async function getProjectData() {
    const res = await fetch(process.env.backend_api_address+"/projects");

    if (!res.ok) throw new Error("Failed to fetch data.")

    return res.json();
}

const Works = async () => {
    const data = await getProjectData();
    return (
        <div className="mx-4 mt-8">
            <p className="text-center text-xl font-semibold pb-4 border-b">
                My developments
            </p>
            <div className="grid gap-y-4 p-4 overflow-auto sm:grid-cols-2 lg:grid-cols-3">
            {
                data.toReversed().map((item: ItemCardData) => (
                    <ItemCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        date={item.date}
                        stacks={item.stacks}
                        teammates={item.teammates}
                        description={item.description}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default Works;