import ItemCard from "@/components/ItemCard";
import ItemCardData from "@/datatype";

const items:Array<ItemCardData> = [
    {
        title: "first item",
        description: "description"
    },
    {
        title: "second item",
        description: "description"
    },
    {
        title: "third item",
        description: "description"
    },
]

const Works = () => {
    return (
        <div className="mx-4 mt-8">
            <p className="text-center text-xl font-semibold my-2">
                작업물들입니다.
            </p>
            <div className="flex justify-around py-4">
            {
                items.map((item) => (
                    <ItemCard
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