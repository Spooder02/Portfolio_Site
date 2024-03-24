import Image from "next/image";
import Link from "next/link";
import UndefinedImage from "@/../public/image.png"
import ItemCardData from "@/datatype";

const ItemCard = (props:ItemCardData) => {

    return (
        <div className="w-64 block rounded-lg shadow-lg m-auto my-4 lg:w-3/4">
            <Link href={`/works/${props.id}`}>
            <Image src={UndefinedImage}
            className="w-max"
            alt={"Image Replacement"}/>
            <div className="m-auto p-auto">
                <p className="py-1 text-lg font-semibold text-center">{props.title} </p>
                <p className="text-right text-gray-300 mx-2">기간: 240320 ~ 240324</p>
                <p className="px-4 py-2">{props.description}</p>
            </div>
            </Link>
        </div>
    )
}

export default ItemCard;