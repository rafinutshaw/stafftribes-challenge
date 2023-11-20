import { ToggleGridProps } from "./toggle-grid.types";

export default function ToggleGrid(props: ToggleGridProps) {

    const { values, selected } = props

    return (
        <ul className="flex">
            {values.map((item: string, index) => {
                return <li key={item}>
                    <input type="radio" id={item} name="hosting" value={item} className="hidden peer" required />
                    <label htmlFor={item} className={`${index == 0 ? "rounded-l-lg" : ''} ${index == values.length - 1 ? "rounded-r-lg" : ''} rounded-none p-2 text-gray-500 bg-white border border-gray-200 cursor-pointer peer-checked:border-blue-400 peer-checked:bg-blue-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 `}>
                        {item}
                    </label>
                </li>
            })}
        </ul>

    )
}
