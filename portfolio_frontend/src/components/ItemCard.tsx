import Image from "next/image";
import UndefinedImage from "@/../public/image.png"
import ItemCardData from "@/datatype";

const ItemCard = (props:ItemCardData) => {

    return (
        <div className="block w-max rounded-lg shadow-lg">
            <Image src={UndefinedImage}
            className="w-64 sm:w-96"
            alt={"Image Replacement"}/>
            <p className="py-1 font-semibold text-center">{props.title} </p>
            <p className="text-left font-gray-400">2024-03-20</p>
            <p className="p-4">{props.description}</p>
            
        </div>
    )
}

export default ItemCard;