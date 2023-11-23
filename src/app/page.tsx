'use client'
import { useEffect, useState } from "react";
import Calender from "./components/calender";
import Friends from "./components/friends/friends";
import { getMyAvailability, getMyFriendsAvailability, updateMyAvailability } from "./service/app-service";
import { AvailabilityType } from "./types/shared.types";
import { CategoriedFriendsAvailability, FriendAvailability } from "./components/friends/friends.types";

export default function Home() {

  const [myAvailability, setMyAvailability] = useState<AvailabilityType[]>();
  const [friendsAvailability, setFriendsAvailability] = useState<FriendAvailability[]>();

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    setMyAvailability(getMyAvailability())
    setFriendsAvailability(getMyFriendsAvailability())

  }

  const onAvailabilityUpdate = (data: any) => {
    updateMyAvailability(data)
    fetchData()
  }

  return (
    <main className="flex min-h-screen flex-col p-5 min-w-screen">
      {friendsAvailability && <Friends friendsAvailability={friendsAvailability} />}
      {myAvailability && <Calender myAvailability={myAvailability} onUpdate={onAvailabilityUpdate} />}
    </main>
  )
}
