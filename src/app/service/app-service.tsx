import { time } from "console";
import { AvailabilityType } from "../types/shared.types";

let AVAILABILITY: AvailabilityType[] = [
    { minValue1: 1, maxValue1: 3, minValue2: 4, maxValue2: 6, enabled: true },
    { minValue1: 1, maxValue1: 3, minValue2: 4, maxValue2: 6, enabled: true },
    { minValue1: 1, maxValue1: 3, minValue2: 4, maxValue2: 6, enabled: true },
    { minValue1: 1, maxValue1: 3, minValue2: 4, maxValue2: 6, enabled: true },
    { minValue1: 1, maxValue1: 3, minValue2: 4, maxValue2: 6, enabled: true },
    { minValue1: 1, maxValue1: 3, minValue2: 4, maxValue2: 6, enabled: true },
    { minValue1: 1, maxValue1: 3, minValue2: 4, maxValue2: 6, enabled: true },
]

let friendsAvailability = [
    {
        name: 'Lucas', categories: [1], availability: [
            { minValue1: 1, maxValue1: 3, minValue2: 0, maxValue2: 0, enabled: true },
            { minValue1: 4, maxValue1: 5, minValue2: 6, maxValue2: 7, enabled: true },
            { minValue1: 1, maxValue1: 2, minValue2: 6, maxValue2: 7, enabled: true },
            { minValue1: 1, maxValue1: 3, minValue2: 0, maxValue2: 0, enabled: true },
            { minValue1: 1, maxValue1: 3, minValue2: 4, maxValue2: 6, enabled: true },
            { minValue1: 4, maxValue1: 5, minValue2: 6, maxValue2: 7, enabled: true },
            { minValue1: 1, maxValue1: 3, minValue2: 0, maxValue2: 0, enabled: true },
        ]
    },
    {
        name: 'Roberd', categories: [1], availability: [
            { minValue1: 2, maxValue1: 6, minValue2: 0, maxValue2: 0, enabled: true },
            { minValue1: 5, maxValue1: 6, minValue2: 4, maxValue2: 6, enabled: true },
            { minValue1: 1, maxValue1: 2, minValue2: 6, maxValue2: 7, enabled: true },
            { minValue1: 6, maxValue1: 7, minValue2: 0, maxValue2: 0, enabled: true },
            { minValue1: 1, maxValue1: 3, minValue2: 4, maxValue2: 6, enabled: true },
            { minValue1: 4, maxValue1: 5, minValue2: 6, maxValue2: 7, enabled: true },
            { minValue1: 1, maxValue1: 3, minValue2: 0, maxValue2: 0, enabled: true },
        ]
    },
    {
        name: 'Nico', categories: [2], availability: [
            { minValue1: 2, maxValue1: 6, minValue2: 0, maxValue2: 0, enabled: true },
            { minValue1: 5, maxValue1: 6, minValue2: 4, maxValue2: 6, enabled: true },
            { minValue1: 1, maxValue1: 2, minValue2: 6, maxValue2: 7, enabled: true },
            { minValue1: 1, maxValue1: 2, minValue2: 4, maxValue2: 8, enabled: true },
            { minValue1: 1, maxValue1: 3, minValue2: 4, maxValue2: 6, enabled: true },
            { minValue1: 2, maxValue1: 5, minValue2: 6, maxValue2: 7, enabled: true },
            { minValue1: 1, maxValue1: 3, minValue2: 0, maxValue2: 0, enabled: true },
        ]
    }
]

const calculateOverlap = (intervals: any) => {
    if (intervals[0][0] != intervals[0][1] &&
        intervals[1][0] != intervals[1][1]) {
        if (intervals[1][0] < intervals[0][0]) {
            intervals = [intervals[1], intervals[0]]
        }
    } else {
        return 0
    }

    if (!(intervals[0][1] <= intervals[1][0] || intervals[0][0] >= intervals[1][1])) {
        return Math.min(intervals[0][1], intervals[1][1]) - Math.max(intervals[0][0], intervals[1][0]) + 1
    } return 0
}

const processAvailablity = (friendsAvailability: any, myAvailability: any) => {

    let formattedResult: any[] = [];
    [...Array(2)].forEach((_, categoryIndex) => {
        const result = new Map();
        const bestWeek = { weekIndex: 0, days: 0 }
        for (let j = 0; j < 7; j++) {
            let totalTimeWindow = 0
            for (let i = 0; i < friendsAvailability.length; i++) {
                const favailability = friendsAvailability[i].availability;
                if (!favailability[j].enabled || !myAvailability[j].enabled || friendsAvailability[i].categories.indexOf(categoryIndex + 1) == -1) {
                    continue
                }
                let timeWindow = 0
                const combinations = [
                    [[myAvailability[j].minValue1, myAvailability[j].maxValue1], [favailability[j].minValue1, favailability[j].maxValue1]],
                    [[myAvailability[j].minValue1, myAvailability[j].maxValue1], [favailability[j].minValue2, favailability[j].maxValue2]],
                    [[myAvailability[j].minValue2, myAvailability[j].maxValue2], [favailability[j].minValue1, favailability[j].maxValue1]],
                    [[myAvailability[j].minValue2, myAvailability[j].maxValue2], [favailability[j].minValue2, favailability[j].maxValue2]]
                ]

                combinations.forEach((item) => {
                    timeWindow += calculateOverlap(item)
                })

                if (timeWindow) {
                    result.set(j.toString(), result.has(j.toString()) ? [...result.get(j.toString()), { name: friendsAvailability[i].name, days: timeWindow }] : [{ name: friendsAvailability[i].name, days: timeWindow }])
                }
                totalTimeWindow += timeWindow
            }
            if (totalTimeWindow > bestWeek.days) {
                bestWeek.weekIndex = j
                bestWeek.days = totalTimeWindow
            }
        }
        let temp = []
        for (let j = 0; j < 7; j++) {
            temp.push(result.has(j.toString()) ? result.get(j.toString()) : [])
        }
        formattedResult.push({ category: categoryIndex + 1, weeks: temp, bestWeek: bestWeek.weekIndex })
    })



    return formattedResult;
}

export const getMyFriendsAvailability = () => {
    return processAvailablity(friendsAvailability, getMyAvailability())
}

export const getMyAvailability = () => {
    return AVAILABILITY;
};

export const updateMyAvailability = (value: AvailabilityType[]) => {
    AVAILABILITY = value
    return value
}