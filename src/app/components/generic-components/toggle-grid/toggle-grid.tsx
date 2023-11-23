import { ToggleGridProps, ValueType } from "./toggle-grid.types";

export default function ToggleGrid(props: ToggleGridProps) {

    const { values, selected, name, onChange } = props

    return (
        <ul className="flex ">
            {values.map((item: ValueType, index) => {
                return <li key={`${index}${item.value.toString()}`}>
                    { }
                    <input type="radio" id={`${index}${item.value.toString()}`} onChange={(e) => onChange(parseInt(e.target.value))} name={name} value={item.value} className="hidden peer" required checked={item.value == selected} />
                    <label htmlFor={`${index}${item.value.toString()}`} className={`${index == 0 ? "rounded-l-lg" : ''} ${index == values.length - 1 ? "rounded-r-lg" : ''} rounded-none p-2 text-gray-500 bg-white border border-gray-200 cursor-pointer peer-checked:border-blue-400 peer-checked:bg-blue-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 `}>
                        {item.label}
                    </label>
                </li>
            })}
        </ul>

    )
}
