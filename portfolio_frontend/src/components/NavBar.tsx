import Link from "next/link";

const NavBar = () => {
    return (
        <div className="flex justify-around p-4 shadow-md opacity-75">
            <Link href="/" className="font-semibold text-lg">Portfolio</Link>
            <Link href="/introduction">Introduction</Link>
            <Link href="/works">Works</Link>
            <Link href="/contact">Contact</Link>
        </div>
    )
}

export default NavBar;