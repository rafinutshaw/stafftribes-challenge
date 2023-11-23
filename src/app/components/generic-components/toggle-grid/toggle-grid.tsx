import { ToggleGridProps, ValueType } from "./toggle-grid.types";

export default function ToggleGrid(props: ToggleGridProps) {

    const { values, selected, name, onChange } = props

    return (
        <ul className="flex flex-wrap">
            {values.map((item: ValueType, index) => {
                return <li key={`${item.value.toString()}${index}`} className="">
                    <input type="radio" id={`${item.value.toString()}${index}`} onChange={(e) => onChange(parseInt(e.target.value))} name={name} value={item.value} className="hidden peer" required checked={item.value == selected} />
                    <label htmlFor={`${item.value.toString()}${index}`} className={`${index == 0 ? "rounded-l-lg" : ''} ${index == values.length - 1 ? "rounded-r-lg" : ''} flex items-center whitespace-nowrap rounded-none px-2 h-9  text-gray-500 bg-white border border-gray-200 cursor-pointer peer-checked:border-blue-400 peer-checked:bg-blue-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 `}>
                        {item.label}
                    </label>
                </li>
            })}
        </ul>

    )
}
