import { Metadata } from "next";
import Image from "next/image";
import MailImage from "@/../public/gmail.png";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact",
    description: "This is Geonhui's contact page"
}

const Contact = () => {
    return (
        <div className="mx-4 mt-8">
            <div className="border-b-2 pb-4">
                <p className="text-center text-2xl font-bold my-2">
                    언제든지 연락주세요!
                </p>
                <p className="text-center">
                    같이 프로젝트를 함께하고 싶거나, 제작 의뢰를 하고 싶거나, 개발에 대한 이야기 등 여러 이야기 모두 환영합니다!
                </p>
            </div>
            <div className="grid items-center justify-items-center grid-cols-3 py-4 px-16">
                <Image
                src={MailImage}
                className="w-64"
                alt="Mail Image"
                />
                <div className="col-span-2">
                    <p className="text-lg font-semibold">연락처</p>
                    <p className="">이메일 : spooder02@kakao.com / yoshi7591@naver.com</p>
                    <p className="">카카오톡 : <Link className="underline text-blue-400 hover:text-blue-500" href="https://open.kakao.com/o/slTEt1jg" target="_blank">https://open.kakao.com/o/slTEt1jg</Link></p>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;