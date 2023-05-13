import { getClockData } from "../../../util/getClockData"
import NavBar from "../components/NavBar"

const page = () => {

    const clocks = getClockData()
    return (
        <div className="min-h-screen bg-zinc-800">
            <NavBar />
            <main className="pt-4 max-w-2xl mx-auto">
                {clocks.map((clock: any) => (
                    <div key={clock.id} className="flex justify-between px-8 py-2">
                        <label className="text-white" htmlFor={clock.title}>{clock.title}</label>
                        <input className="bg-zinc-800 border-2 border-zinc-500 text-lime-600 focus:ring-lime-600 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:bg-lime-600" type="radio" id={clock.title} name="clock" />
                    </div>
                ))}
            </main>
        </div>
    )
}

export default page