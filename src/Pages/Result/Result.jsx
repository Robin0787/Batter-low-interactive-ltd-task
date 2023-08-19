import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { useState } from 'react';
import pattern from '../../assets/pattern.svg';

const Result = () => {
    const [showFullDesc, setShowFullDesc] = useState(false);
    const allInfo = JSON.parse(localStorage.getItem("allInfo"));

    const downloadResult = async () => {
        const doc = new jsPDF({orientation: 'landscape'});
        doc.autoTable({
            html: '#result'
        })
        doc.save('Result.pdf');
    }
    
    return (
        <section className={`bg-black w-full h-screen`}>
            <section className='flex justify-center items-center h-full w-full'
                style={{ backgroundImage: `url(${pattern})` }}>
                <section className='w-[calc(100vw-40px)] md:w-[calc(100vw-200px)] mx-auto'>
                    <div className='mt-10 mb-5 flex justify-between items-center gap-3'>
                        <h1 className='text-center text-[#5acbfc] text-2xl sm:text-3xl leading-[40px] font-thin uppercase whitespace-nowrap'>Result</h1>
                        <button className='text-[13px] sm:text-[16px] px-3 py-[6px] sm:px-6 sm:py-2 text-center text-[#5acbfc] hover:text-gray-200 hover:bg-[#287da1] rounded-md uppercase  border border-[#057caf] bg-transparent duration-300'
                            onClick={downloadResult}
                            >Download</button>
                    </div>
                    <section>
                        <div className="w-full overflow-x-auto">
                            <table className="min-w-full rounded-md " id="result">
                                <thead className="bg-[#1b4a5e] text-white rounded-md text-center">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-sm font-medium  uppercase tracking-wider rounded-tl-md"
                                        >
                                            Project Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4  text-sm font-medium  uppercase tracking-wider"
                                        >
                                            Contractor
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4  text-sm font-medium  uppercase tracking-wider"
                                        >
                                            Client
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4  text-sm font-medium  uppercase tracking-wider"
                                        >
                                            Description
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4  font-medium  uppercase tracking-wider rounded-tr-md"
                                        >
                                            Max_Z
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-[#24709160] text-center text-gray-300 rounded-lg">
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
                                            {allInfo?.description.length > 20 ? (
                                                showFullDesc ? allInfo.description :
                                                    allInfo.description.slice(0, 20)
                                            ) : allInfo.description}
                                            {allInfo.description.length > 20 && <span className='cursor-pointer opacity-60'
                                                onClick={() => { setShowFullDesc(!showFullDesc) }}>{showFullDesc ? " ...see less" : ' ...see more'}</span>}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {allInfo?.maxZ}
                                        </td>
                                    </tr>
                                    <tr className="bg-[#20495c] text-white text-center text-sm ">
                                        <td
                                            scope="col"
                                            className="px-6 py-4  font-medium  uppercase tracking-wider "
                                        >
                                            Max_X
                                        </td>
                                        <td
                                            scope="col"
                                            className="px-6 py-4  font-medium  uppercase tracking-wider"
                                        >
                                            Min_X
                                        </td>
                                        <td
                                            scope="col"
                                            className="px-6 py-4  font-medium  uppercase tracking-wider"
                                        >
                                            Max_Y
                                        </td>
                                        <td
                                            scope="col"
                                            className="px-6 py-4  font-medium  uppercase tracking-wider"
                                        >
                                            Min_Y
                                        </td>
                                        
                                        <td
                                            scope="col"
                                            className="px-6 py-4  font-medium  uppercase tracking-wider"
                                        >
                                            Min_Z
                                        </td>
                                    </tr>
                                    <tr className="text-gray-300 text-center text-base">
                                        <td className="px-6 py-4 whitespace-nowrap  rounded-bl-md">
                                            {allInfo?.maxX}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap ">
                                            {allInfo?.minX}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {allInfo?.maxY}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {allInfo?.minY}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap rounded-br-md">
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