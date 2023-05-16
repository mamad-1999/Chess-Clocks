import NavBar from "../components/NavBar"

const controlLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-zinc-800">
            <NavBar />
            {children}
        </div>
    )
}

export default controlLayout