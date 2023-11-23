export type CategoriedFriendsAvailability = {
    justForFun: FriendsType, moreSerious: FriendsType
}

export type FriendsType = {
    bestWeek: number;
    weeks: DaysAvailability[][]
}

type DaysAvailability = {
    name: string,
    days: number
}