import Image from 'next/image';
import ProfileImage from "@/../public/square_profile.jpg"
import VerifiedImage from "@/../public/diploma.png"
import SoftwareDevelopment from "@/../public/software-development.png"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Introduction",
    description: "This is Geonhui's Introduction Page"
}

const Introduction = () => {
    return (
        <div className="box m-4">
            <p className="text-center text-2xl font-semibold my-2">
                소개
            </p>
            <div className="py-4 my-4 bg-slate-100 rounded shadow-lg text-center">
                <p className="text-2xl font-bold">개발 모토:</p>
                <p className="my-2 italic text-xl font-semibold">"개발자의 편협한 시선이 아닌, 사용자의 입장에서 더 나은 삶을 위한 서비스를 만들어갑니다."</p>
            </div>
            <div className="w-3/4 py-8 mx-auto border-b lg:grid grid-cols-3 content-center justify-center justify-items-center items-center py-8">
                <Image src={ProfileImage} className="w-3/4 rounded-full p-4" alt={"Profile Image"}/>
                <div className="block col-span-2">
                    <p className="text-lg font-bold ">About me</p>
                    <p className="text-lg my-2">조건희, 만 19세(2005. 02. 03) / 현 대학생</p>
                    <p className="block">
                        - Fullstack Developer ( 23" ~ )<br/>
                        - 단국대학교부속소프트웨어고등학교 2기 IoT과 졸업 ( 21" ~ 23" )<br/>
                        - 고등학교 창업동아리 "RD" 대표 ( 22" )<br/>
                        - 순천향대학교 IT금융경영학과 재학 / SOUP Frontend Engineer ( 24" ~ )<br/>
                    </p>
                </div>
            </div>
            <div className="my-4 w-3/4 mx-auto">
            <p className="px-4 text-xl font-bold">적은 경험, 신뢰할 수 있나요?</p>
                <div className="pb-8 mx-auto border-b lg:grid grid-cols-3 content-center justify-center justify-items-center items-center">
                    <div className="col-span-2">
                        <p className="text-lg font-bold py-2">활동의 결과들이 증명합니다!</p>
                        <p>
                            - 국가공인 자격증 PC정비사 2급, 네트워크관리사 2급, 리눅스마스터 2급 보유 (19"~20" 취득)<br/>
                            - 백준 알고리즘 골드 티어<br/>
                            - 21" 교내 알고리즘 경진대회 장려상 수상<br/>
                            - 22" 교내 창업동아리 선발<br/>
                            - 23" 하이챌린지스쿨 '주니어 소셜벤처상' 수상
                        </p>
                    </div>
                    <Image src={VerifiedImage} className="w-2/3 p-4" alt="Verified Image"/>
                </div>
            </div>
            <div className="my-4 w-3/4 mx-auto">
            <p className="px-4 text-xl text-right font-bold">개발 시에, 어떤 기술들을 활용하나요?</p>
                <div className="pb-8 mx-auto border-b lg:grid grid-cols-3 content-center justify-center justify-items-center items-center">
                    <Image src={SoftwareDevelopment} className="w-2/3 p-4" alt="Verified Image"/>
                    <div className="col-span-2">
                        <p className="text-lg font-bold py-2">다양한 언어 활용 경험이 있어, 상황에 적합한 언어 및 프레임워크를 선정합니다.</p>
                        <p className="py-2">
                            알고리즘 - C, C++, Python<br/>
                            프론트엔드 - Vue.js, Next.js, TailwindCSS, TypeScript 등<br/>
                            백엔드 - Django, Spring boot<br/>
                            AI / 빅데이터 - Python
                        </p>
                    </div>
                    
                </div>
            </div>
            <span className="text-sm text-gray-300">Icons by. flaticon</span>
        </div>
    )
}

export default Introduction;