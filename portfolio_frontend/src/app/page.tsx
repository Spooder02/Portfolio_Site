import '@/app/globals.css'
import MainPage from '@/app/_components/MainPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Portfolio Mainpage",
    description: "Geonhui's Portfolio Mainpage"
}

export default function mainPage() {

    return (
        <div className="m-0 p-0">
            <MainPage/>
        </div>
    )
}