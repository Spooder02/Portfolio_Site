import Image from "next/image";
import UndefinedImage from "@/../public/image.png"
import items from "@/app/testData";

const WorkDetailPage = ({ params }: { params: { workId: number }; }) => {
    const index = params.workId-1;
    return (
        <div className="flex border-b">
            <Image src={UndefinedImage}
            className="w-32 m-4"
            alt={"Image Replacement"}/>
            <div className="my-6 mx-2">
            <p className="text-lg font-bold">Title: {items[index].title}</p>
            <p className="text-sm text-gray-400">작업날짜: 240324</p>
            <p className="">Description: {items[index].description}</p>
            </div>
        </div>
    )
}

export default WorkDetailPage;