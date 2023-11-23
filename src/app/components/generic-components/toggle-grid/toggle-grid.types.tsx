export type ToggleGridProps = {
    values: ValueType[];
    selected: number;
    name: string;
    onChange: (v: number) => void
};

export type ValueType = {
    label: string,
    value: number
}
