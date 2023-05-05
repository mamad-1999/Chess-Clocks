import NumberBox from "./components/NumberBox";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between bg-red-400">
      <NumberBox color={"bg-gray-500"} />
      <NumberBox color={"bg-green-500"} />
    </main>
  )
}
