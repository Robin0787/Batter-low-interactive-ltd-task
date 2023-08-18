import pattern from '../../assets/pattern.svg';

const Result = () => {
    const allInfo = JSON.parse(localStorage.getItem("allInfo"));
    console.log(allInfo);
    return (
        <section className={`bg-black w-full h-screen`}>
            <section className='flex justify-center items-center h-full w-full'
                style={{ backgroundImage: `url(${pattern})` }}>
                <section className='w-[calc(100vw-40px)] md:w-[calc(100vw-200px)] mx-auto'>
                    <div className='my-10'>
                        <h1 className='text-center text-[#5acbfc] text-2xl sm:text-3xl leading-[40px] font-thin uppercase whitespace-nowrap'>Result</h1>
                    </div>
                    <section className=''>
                        <div className="w-full overflow-x-auto">
                            <table className="min-w-full rounded-md">
                                <thead className="bg-[#247091] text-white rounded-md">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-sm font-medium  uppercase tracking-wider rounded-tl-md"
                                        >
                                            Project Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-sm font-medium  uppercase tracking-wider"
                                        >
                                            Contractor
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-sm font-medium  uppercase tracking-wider"
                                        >
                                            Client
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-sm font-medium  uppercase tracking-wider "
                                        >
                                            Description
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-sm font-medium  uppercase tracking-wider rounded-tr-md"
                                        >
                                            Max_X
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-[#24709160] text-gray-300 rounded-lg">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-base">
                                            {allInfo?.projectName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-base">
                                        {allInfo?.contractor}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-base">
                                        {allInfo?.client}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-base">
                                        {allInfo?.description}
                                        </td>
                                        
                                        <td className="px-6 py-4 whitespace-nowrap text-base">
                                            {allInfo?.maxX}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            <div className="w-full overflow-x-auto">
                            <table className="min-w-full rounded-md">
                                <thead className="bg-[#247091] text-white rounded-md">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-sm font-medium  uppercase tracking-wider"
                                        >
                                            Min_X
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-sm font-medium  uppercase tracking-wider"
                                        >
                                            Max_Y
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-sm font-medium  uppercase tracking-wider"
                                        >
                                            Min_Y
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-sm font-medium  uppercase tracking-wider"
                                        >
                                            Max_Z
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-sm font-medium  uppercase tracking-wider"
                                        >
                                            Min_Z
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-[#24709160] text-gray-300 rounded-lg">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-base rounded-bl-md">
                                        {allInfo?.minX}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-base">
                                        {allInfo?.maxY}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-base">
                                        {allInfo?.minY}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-base">
                                        {allInfo?.maxZ}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-base rounded-br-md">
                                        {allInfo?.minZ}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Result;