import Image from "next/image";
import Link from "next/link";
import UndefinedImage from "@/../public/image.png"
import ItemCardData from "@/datatype";

const ItemCard = (props:ItemCardData) => {
    const description = props.description.split('.')[0]; // 길이 제한을 위한 String 변수 설정
    const stackLength = props.stacks.length;
    return (
        <div className="w-64 block rounded-lg shadow-lg m-auto my-4 lg:w-3/4 hover:translate-y-2 duration-300">
            <Link href={`/works/${props.id}`}>
            <Image src={
                (props.image === null)? UndefinedImage: require(`@/../public/${props.image}`).default
            }
            className="w-64 m-auto"
            alt={"Image Replacement"}/>
            <div className="m-auto p-auto">
                <p className="py-1 text-lg font-semibold text-center">{props.title} </p>
                <div className="text-right mb-0.5 text-sm mr-2">
                    <span className="">Tech Stacks: </span>
                    <span className="font-medium">
                    {props.stacks.map((stack, i) => {
                        if (i === stackLength-1) return `${stack}`
                        else return `${stack}, `
                    })}
                    </span>
                </div>
                <p className="text-right text-gray-300 mx-2 text-xs md:text-sm">기간: {props.date} | 제작자: {props.creator} </p>
                <p className="px-4 py-2 whitespace-pre-line">{ description }</p>
            </div>
            </Link>
        </div>
    )
}

export default ItemCard;