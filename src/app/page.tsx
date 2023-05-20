import Modal from "./components/Modal";
import Timer from "./components/Timer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between md:flex-row h-screen">
      <Modal />
      <Timer />
    </main>
  )
}
