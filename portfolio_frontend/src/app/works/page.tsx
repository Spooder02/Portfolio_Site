import ItemCard from "@/app/_components/ItemCard";
import items from "../testData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Developments",
    description: "This is a page which shows what I made"
}

const Works = () => {
    return (
        <div className="mx-4 mt-8">
            <p className="text-center text-xl font-semibold pb-4 border-b">
                My developments
            </p>
            <div className="grid gap-y-4 p-4 overflow-auto sm:grid-cols-2 lg:grid-cols-3">
            {
                items.toReversed().map((item) => (
                    <ItemCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        date={item.date}
                        stacks={item.stacks}
                        github_link={item.github_link}
                        project_link={item.project_link}
                        creator={item.creator}
                        description={item.description}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default Works;