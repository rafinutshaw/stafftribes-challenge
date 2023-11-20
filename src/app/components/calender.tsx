import ToggleGrid from "./generic-components/toggle-grid/toggle-grid";

export default function Calender() {
    return (
        <div className="p-4">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold leading-7 pb-2 uppercase">MY FRIends</h2>
                <ToggleGrid values={["Just for fun", "More serious"]} selected="Just for fun" />
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light">
                                <thead
                                    className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                                    <tr>
                                        <th scope="col" className="text-left px-6 py-4">Name</th>
                                        <th scope="col" className="text-left px-6 py-4">Availability</th>
                                        <th scope="col" className="text-left px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap text-left px-6 py-4">Mark</td>
                                        <td className="whitespace-nowrap text-left px-6 py-4">Monday</td>
                                        <td className="whitespace-nowrap text-left px-6 py-4">
                                            <button type="button" className="btn-outline">View</button>
                                        </td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap text-left px-6 py-4 ">Jacob</td>
                                        <td className="whitespace-nowrap text-left px-6 py-4">Thornton</td>
                                        <td className="whitespace-nowrap text-left px-6 py-4">
                                            <button type="button" className="btn-outline">View</button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
