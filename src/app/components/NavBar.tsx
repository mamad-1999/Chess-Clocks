import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="bg-zinc-700 p-4 shadow-xl">
            <div className="flex items-center justify-start gap-10">
                <Link href={"/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white cursor-pointer hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </Link>
                <h3 className="text-white text-lg">Time Control</h3>
            </div>
        </nav>
    )
}

export default NavBar