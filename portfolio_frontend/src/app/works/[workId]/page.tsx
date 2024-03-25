import Image from "next/image";
import UndefinedImage from "@/../public/image.png"
import GithubLogo from "@/../public/github_logo.png"
import WebLogo from "@/../public/click.png"
import items from "@/app/testData";

const WorkDetailPage = ({ params }: { params: { workId: number }; }) => {
    const index = params.workId-1;
    const stackLength = items[index].stack.length;
    return (
        <>
            <div key={index} className="p-auto border-b md:flex">
                <Image src={UndefinedImage}
                className="w-48 m-4 m-auto"
                alt={"Image Replacement"}/>
                <div className="my-6 mx-2 block m-auto">
                    <p className="text-lg font-bold">프로젝트명: {items[index].title}</p>
                    <span className="text-sm font-medium text-green-500">Tech Stack: </span>
                    <span className="text-sm font-medium mr-2">
                    {items[index].stack.map((stack, i) => {
                        if (i === stackLength-1) return `${stack}`
                        else return `${stack}, `
                    })}
                    </span>
                    <span className="block text-sm text-gray-400">작업날짜: {items[index].date} | 제작자: {items[index].creator}</span>
                    <p className="w-screen whitespace-pre-line">{items[index].description}</p>
                    <div className="flex max-md:justify-center">
                        <button className="flex my-2 items-center p-1 rounded bg-green-400 text-white hover:bg-green-500 hover:-translate-y-0.5 hover:scale-105 hover:duration-300">
                            <Image src={GithubLogo} className="w-4 h-4 mr-2" alt="GitHub Logo"/>
                            프로젝트 깃허브
                        </button>
                        <button className="flex m-2 items-center p-1 rounded bg-indigo-400 text-white hover:bg-indigo-500 hover:-translate-y-0.5 hover:scale-105 duration-300">
                            <Image src={WebLogo} className="w-4 h-4 mr-2" alt="GitHub Logo"/>
                            결과 사이트
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-4">
                Main content
            </div>
        </>
    )
}

export default WorkDetailPage;