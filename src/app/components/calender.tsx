import { useState } from "react";
import IntervalsSlider from "./generic-components/intervals-slider/intervals-slider";

export default function Calender() {
    const [value, setValue] = useState([{ min: 1, max: 3 }, { min: 4, max: 6 }]);
    return (
        <div className="p-4 app-section">
            <div className="flex justify-between items-center  pb-4">
                <h2 className="text-2xl font-bold uppercase">MY AVAILABILITY FOR THE NEXT 7 DAYS</h2>
            </div>

            <div>
                {[...Array(7)].map((_, week) => <div key={week} className="flex items-center">
                    <span className="whitespace-nowrap">Week {week + 1}</span>
                    <input type="checkbox" className="mx-4" />
                    <IntervalsSlider min={1} max={7} step={1} value={value} onChange={setValue} />
                    <button type="button" className="py-1 px-2 ml-2 cursor-pointer shadow-md no-underline rounded-full font-semibold text-lg border-grey btn-primary hover:text-white hover:bg-blue-400 focus:outline-none active:shadow-none">+</button>

                </div>)}
            </div>

        </div>
    )
}
