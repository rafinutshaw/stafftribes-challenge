import Calender from "./components/calender";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-5 min-w-screen">
      <Calender />
      <div>MY AVAILABILITY FOR THE NEXT 7 WEEKS
      </div>
    </main>
  )
}
