import { useState } from "react";
import IntervalsSlider from "./generic-components/intervals-slider/intervals-slider";

export default function Calender() {
    const [value, setValue] = useState([{ min: 1, max: 3 }, { min: 4, max: 6 }]);
    return (
        <div className="p-4 app-section">
            <div className="flex justify-between items-center  pb-4">
                <h2 className="text-2xl font-bold uppercase">MY AVAILABILITY FOR THE NEXT 7 DAYS</h2>
            </div>
            <IntervalsSlider min={1} max={7} step={1} value={value} onChange={setValue} />
        </div>
    )
}
