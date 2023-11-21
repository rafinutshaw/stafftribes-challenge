import { useState } from "react";
import IntervalsSlider from "./generic-components/intervals-slider/intervals-slider";
import ToggleGrid from "./generic-components/toggle-grid/toggle-grid";

export default function Calender() {
    const [value, setValue] = useState([{ min: 1, max: 3 }, { min: 4, max: 6 }]);
    return (
        <div className="p-4 app-section">
            <div className="flex justify-between items-center  pb-4">
                <h2 className="text-2xl font-bold uppercase">MY FRIends</h2>
                <ToggleGrid values={["Just for fun", "More serious"]} selected="Just for fun" />
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light">
                                <thead
                                    className="border-b bg-neutral-100 font-medium">
                                    <tr>
                                        <th scope="col" className="text-left px-6  py-2">Name</th>
                                        <th scope="col" className="text-left px-6  py-2">Availability</th>
                                        <th scope="col" className="text-left px-6  py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b ">
                                        <td className="whitespace-nowrap text-left px-6  py-2">Mark</td>
                                        <td className="whitespace-nowrap text-left px-6  py-2">Monday</td>
                                        <td className="whitespace-nowrap text-left px-6  py-2">
                                            <button type="button" className="btn-outline">View</button>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="whitespace-nowrap text-left px-6  py-2 ">Jacob</td>
                                        <td className="whitespace-nowrap text-left px-6  py-2">Thornton</td>
                                        <td className="whitespace-nowrap text-left px-6  py-2">
                                            <button type="button" className="btn-outline">View</button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <IntervalsSlider min={1} max={7} step={1} value={value} onChange={setValue} />
        </div>
    )
}
