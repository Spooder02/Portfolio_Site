import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "This is Geonhui's contact page"
}

const Contact = () => {
    return (
        <div className="mx-4 mt-8">
            <p className="text-center text-xl font-semibold my-2">
                연락처 페이지입니다.
            </p>
        </div>
    )
}

export default Contact;