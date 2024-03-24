import ItemCard from "@/components/ItemCard";
import items from "../testData";

const Works = () => {
    return (
        <div className="mx-4 mt-8">
            <p className="text-center text-xl font-semibold my-2">
                작업물들입니다.
            </p>
            <div className="grid gap-y-4 p-4 overflow-auto sm:grid-cols-2 lg:grid-cols-3">
            {
                items.map((item) => (
                    <ItemCard
                        id={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default Works;