'use client'
import { useEffect, useState } from "react";
import Calender from "./components/calender";
import Friends from "./components/friends/friends";
import { getMyAvailability, getMyFriendsAvailability, updateMyAvailability } from "./service/app-service";
import { AvailabilityType } from "./types/shared.types";
import { CategoriedFriendsAvailability } from "./components/friends/friends.types";

export default function Home() {

  const [state, setState] = useState<any>({
    myAvailability: {},
    friendsAvailability: {}
  });

  useEffect(() => {
    setState({
      myAvailability: getMyAvailability(),
      friendsAvailability: getMyFriendsAvailability()
    })
  }, [])

  const onAvailabilityUpdate = (data: any) => {
    updateMyAvailability(data)
    setState({
      myAvailability: getMyAvailability(),
      friendsAvailability: getMyFriendsAvailability()
    })

  }

  return (
    <main className="flex min-h-screen flex-col p-5 min-w-screen">
      <Friends friendsAvailability={state.friendsAvailability} />
      <Calender myAvailability={state.myAvailability} onUpdate={onAvailabilityUpdate} />
    </main>
  )
}
