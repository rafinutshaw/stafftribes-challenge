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
        name: 'Lucas', availability: [
            { minValue1: 1, maxValue1: 3, minValue2: 0, maxValue2: 0, enabled: true },
            { minValue1: 5, maxValue1: 6, minValue2: 4, maxValue2: 6, enabled: true },
            { minValue1: 1, maxValue1: 2, minValue2: 6, maxValue2: 7, enabled: true },
            { minValue1: 1, maxValue1: 3, minValue2: 0, maxValue2: 0, enabled: true },
            { minValue1: 1, maxValue1: 3, minValue2: 4, maxValue2: 6, enabled: true },
            { minValue1: 4, maxValue1: 5, minValue2: 6, maxValue2: 7, enabled: true },
            { minValue1: 1, maxValue1: 3, minValue2: 0, maxValue2: 0, enabled: true },
        ]
    },
    {
        name: 'Roberd', availability: [
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
        name: 'Nico', availability: [
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

export const getMyAvailability = () => {
    return AVAILABILITY;
};

export const updateMyAvailability = (value: AvailabilityType[]) => {
    AVAILABILITY = value
}