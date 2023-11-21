'use client'
import Calender from "./components/calender";
import Friends from "./components/friends";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-5 min-w-screen">
      <Friends />
      <Calender />
    </main>
  )
}
