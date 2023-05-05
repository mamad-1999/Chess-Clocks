import NumberBox from "./components/NumberBox";
import ToolBar from "./components/ToolBar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between bg-red-400 md:flex-row h-screen">
      <NumberBox color={"bg-stone-500"} />
      <ToolBar />
      <NumberBox color={"bg-lime-700"} />
    </main>
  )
}
