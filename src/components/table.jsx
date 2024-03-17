export default function Table({ data }) {
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <div className='bg-white text-gray-800 p-10 rounded-lg shadow-md md:min-w-[750px]'>
                <h2 className='text-2xl font-bold'>Your Answers</h2>
                <hr className="mt-4" />
                <div className='grid gap-6 mt-4'>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">No</th>
                                <th className="px-4 py-2">Question</th>
                                <th className="px-4 py-2">Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{item.id}</td>
                                    <td className="border px-4 py-2">{item.question}</td>
                                    <td className="border px-4 py-2">{item.answer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}