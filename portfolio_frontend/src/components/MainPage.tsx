import BannerImage from "@/../public/portfolio_mainbanner.png"
import Image from "next/image";

const MainPage = () => {
    return (
        <div className="flex justify-center mx-4 mt-8">
            <Image src={BannerImage} className="w-2/3" alt=""/>
        </div>
    )
}

export default MainPage;