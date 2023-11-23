import { useEffect, useState } from "react";
import { CategoriedFriendsAvailability, DaysAvailability } from "./friends.types";
import ToggleGrid from "../generic-components/toggle-grid/toggle-grid";
import { getMyFriendsAvailability } from "@/app/service/app-service";
import { ValueType } from "../generic-components/toggle-grid/toggle-grid.types";

export default function Friends(props: any) {

    const { friendsAvailability } = props
    const [state, setState] = useState<CategoriedFriendsAvailability>()
    const [categoryType, setCategoryType] = useState<number>(1)
    const categoryNames = [{ label: "Just for fun", value: 1 }, { label: "More serious", value: 2 }]
    const [selectedWeek, setSelectedWeek] = useState<number>(-1)
    useEffect(() => {
        if (friendsAvailability.length > 0)
            updatefriendsAvailability()
    }, [friendsAvailability])

    const updatefriendsAvailability = () => {
        let result: any = {};
        friendsAvailability.forEach(({ category, weeks, bestWeek }: any) => {
            if (category == 1) {
                result.justForFun = { weeks, bestWeek }
            } else {
                result.moreSerious = { weeks, bestWeek }
            }
        });
        console.log(friendsAvailability)
        setState(result)
    }

    const getAvailabilityData = () => {
        let availabilityData = categoryType == 1 ? state?.justForFun : state?.moreSerious;
        if (selectedWeek == -1) {
            let data = new Map()
            availabilityData?.weeks.forEach((week, weekIndex) => {
                week.forEach((item) => {
                    data.set(item.name, data.has(item.name) ? [...data.get(item.name), weekIndex + 1] : [weekIndex + 1])
                })
            })
            let result: any = []
            data.forEach((value, key) => {
                result.push({ name: key, week: 'Week ' + value.join(', ') })
            })
            return result
        }
        return availabilityData?.weeks[selectedWeek == 7 ? availabilityData?.bestWeek : selectedWeek].map((item) => {
            return { name: item.name, week: 'Week ' + (selectedWeek == 7 ? availabilityData?.bestWeek || 0 + 1 : selectedWeek + 1) }
        });

    }

    const getFriendsCount = (category: number, weekday: number = -1): number => {
        const availabilityData = category == 1 ? state?.justForFun : state?.moreSerious;
        const result = new Set()
        if (weekday == -1) {
            availabilityData?.weeks.forEach((item) => {
                item.forEach((e) => result.add(e.name))
            })
            return result.size || 0;
        } else {
            return availabilityData?.weeks[weekday].length || 0

        }
    }

    const getAvailableOnValues = () => {
        let result: ValueType[] = [
            { label: `All (${getFriendsCount(categoryType)})`, value: -1 },
            { label: `This Week (${getFriendsCount(categoryType, 0)})`, value: 0 },
            { label: `Next Week (${getFriendsCount(categoryType, 1)})`, value: 1 },
            { label: `Best Week (${getFriendsCount(categoryType, categoryType == 1 ? state?.justForFun.bestWeek : state?.moreSerious.bestWeek)})`, value: 7 }
        ]
        return result
    }

    return (
        <div className="p-4 app-section">
            <div className="flex justify-between items-center  pb-4">
                <h2 className="text-2xl font-bold uppercase">MY FRIends</h2>

            </div>
            <div>
                <div className="flex py-4"><span className="mr-2">Available for:</span>   <ToggleGrid name={'availablefor'} values={categoryNames} selected={categoryType} onChange={setCategoryType} /></div>
                <div className="flex py-4 items-center">
                    <span className="mr-2">Available on:</span>
                    <ToggleGrid name={'availableon'} values={getAvailableOnValues()} selected={selectedWeek} onChange={setSelectedWeek} />

                    <select id="countries" className="ml-2 bg-white border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
                        onChange={(e) => setSelectedWeek(parseInt(e.target.value))}
                    >
                        <option disabled >Choose Week</option>
                        {[...Array(7)].map((_, weekIndex) => <option key={weekIndex} value={weekIndex}>Week {weekIndex + 1}</option>)}

                    </select>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light">
                                <thead
                                    className="border-b bg-neutral-100 font-medium">
                                    <tr>
                                        <th scope="col" className="text-left px-6  py-2">Name</th>
                                        <th scope="col" className="text-left px-6  py-2">Availability</th>
                                        <th scope="col" className="text-left px-6  py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getAvailabilityData()?.map((data: any, index: number) => <tr key={index} className="border-b ">
                                        <td className="whitespace-nowrap text-left px-6  py-2">{data.name}</td>
                                        <td className="whitespace-nowrap text-left px-6  py-2">{data.week}</td>
                                        <td className="whitespace-nowrap text-left px-6  py-2">
                                            <button type="button" className="btn-outline">View</button>
                                        </td>
                                    </tr>)}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
