import { AvailabilityType } from "../types/shared.types";
import { getAvailabilityData, getMyFriendsAvailabilityData, processAvailablity, setAvailabilityData } from "./service.helper";

export const getMyFriendsAvailability = () => {
    return processAvailablity(getMyFriendsAvailabilityData(), getAvailabilityData())
}

export const getMyAvailability = () => getAvailabilityData();

export const updateMyAvailability = (value: AvailabilityType[]) => {
    setAvailabilityData(value)
    return value
}

