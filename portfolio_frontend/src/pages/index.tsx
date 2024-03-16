import '@/app/globals.css'
import MainPage from '@/components/MainPage';
import NavBar from '@/components/NavBar';

export default function mainPage() {
    return (
        <div className="m-0 p-0">
            <NavBar></NavBar>
            <MainPage></MainPage>
        </div>
    )
}