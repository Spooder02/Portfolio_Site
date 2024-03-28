import Image, { StaticImageData } from "next/image";
import UndefinedImage from "@/../public/image.png"
import GithubLogo from "@/../public/github_logo.png"
import WebLogo from "@/../public/click.png"
import items from "@/app/testData";
import Link from "next/link";

let projectName: string;

export async function generateMetadata({ params }: {params: { workId: number };}) {
    return {
        title: `프로젝트 소개: ${items[params.workId-1].title}`,
        description: `${items[params.workId-1].title} 프로젝트에 대한 소개 페이지입니다.`,
    }
}

const WorkDetailPage = ({ params }: { params: { workId: number }; }) => {
    const index = params.workId-1;
    const stackLength = items[index].stacks.length;
    projectName = items[index].title;
    return (
        <>
            <div key={index} className="border-b md:flex">
                <Image src={
                    (items[index].image === null)? UndefinedImage: require(`@/../public/${items[index].image}`).default
                }
                className="w-48 h-48 my-4 m-auto md:mx-4"
                alt={"Image Replacement"}
                priority={true}
                />
                <div className="my-3 mx-2 block m-auto">
                    <p className="text-lg font-bold">프로젝트명: {items[index].title}</p>
                    <span className="text-sm font-medium text-green-500">Tech Stack: </span>
                    <span className="text-sm font-medium mr-2">
                    {items[index].stacks.map((stack, i) => {
                        if (i === stackLength-1) return `${stack}`
                        else return `${stack}, `
                    })}
                    </span>
                    <span className="block text-sm text-gray-400">작업날짜: {items[index].date} | 제작자: {items[index].creator}</span>
                    <p className="w-fit h-1/5 p-2 my-2 bg-gray-100 rounded-md whitespace-pre-line overflow-scroll shadow-inner md:h-14">
                        {items[index].description}
                    </p>
                    <div className="flex max-md:justify-center">
                        <Link href={(items[index].github_link != null)? `${items[index].github_link}`: ''} className="m-0 p-0">
                        <button className="flex my-2 items-center px-1 py-1.5 rounded bg-green-400 text-white hover:bg-green-500 hover:-translate-y-0.5 hover:scale-105 hover:duration-300">
                            <Image src={GithubLogo} className="w-4 h-4 mr-2" alt="GitHub Logo"/>
                            프로젝트 깃허브
                        </button>
                        </Link>
                        <Link href={(items[index].project_link != null)? `${items[index].project_link}`: ''} className="m-0 p-0">
                        <button className="flex m-2 items-center p-1 rounded bg-indigo-400 text-white hover:bg-indigo-500 hover:-translate-y-0.5 hover:scale-105 duration-300">
                            <Image src={WebLogo} className="w-4 h-4 mr-2" alt="GitHub Logo"/>
                            결과 사이트
                        </button>
                        </Link>
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