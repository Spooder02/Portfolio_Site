import ItemCard from "@/app/_components/ItemCard";
import items from "../testData";

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
                        id={item.id}
                        title={item.title}
                        date={item.date}
                        stack={item.stack}
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