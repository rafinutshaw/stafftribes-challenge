export type IntervalProps = {
    minValue1: number,
    maxValue1: number,
    minValue2: number,
    maxValue2: number
}

export type IntervalsSliderProps = { min: number, max: number, value: IntervalProps, step: number, onChange: (arg0: IntervalProps) => void, disabled?: boolean }
