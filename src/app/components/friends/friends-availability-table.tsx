
export default function FriendsAvailabilityTable({ availabilityData }: any) {
    return <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-light">
                        <thead
                            className="border-b bg-neutral-100 font-medium">
                            <tr>
                                <th scope="col" className="text-left px-6 w-1/3 py-2">Name</th>
                                <th scope="col" className="text-left px-6 w-1/3 py-2">Availability</th>
                                <th scope="col" className="text-left px-6  py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {availabilityData?.length > 0 && availabilityData?.map((data: any, index: number) => <tr key={index} className="border-b ">
                                <td className="whitespace-nowrap text-left px-6 py-2">{data.name}</td>
                                <td className="whitespace-nowrap text-left px-6 py-2">{data.week}</td>
                                <td className="whitespace-nowrap text-left px-6 py-2">
                                    <button type="button" className="btn-outline">View</button>
                                </td>
                            </tr>)}
                            {availabilityData?.length == 0 && <tr className="border-b ">
                                <td colSpan={3} className="whitespace-nowrap text-left px-6 text-center py-2">No matches found</td>
                            </tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}