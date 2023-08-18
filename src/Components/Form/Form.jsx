
import { useState } from 'react';
import pattern from '../../assets/pattern.svg';
import styles from "./Form.module.css";

const Form = ({ twoStep, setTwoStep }) => {
    const [uploadButtonText, setUploadButtonText] = useState('CSV (MAX. 800x400px)');

    // Changing the name of file input field based on file name;
    const handleImageChange = (file) => {
        setUploadButtonText(file.name);
    };


    return (
        <section className={`${twoStep ? "w-full" : "w-full md:w-2/3 lg:w-1/2"} h-full duration-500  rounded-xl`} style={{ backgroundImage: `url(${pattern})` }}>
            <section className={` overflow-hidden bg-black bg-opacity-50 h-full rounded-xl ring-2 ring-[#38bdf830] p-5 pt-5 sm:p-10 md:p-10 lg:p-10 lg:pt-7`}>
                <div className='mb-5'>
                    <h1 className='text-center text-[#5acbfc] text-3xl leading-[40px] font-thin uppercase whitespace-nowrap'>Project Information</h1>
                </div>
                <section className={`w-full flex ${twoStep ? "flex-col md:flex-row" : "flex-col"} gap-16 md:gap-10 items-center relative duration-700`}>
                    <article className={`space-y-7 w-full`}>
                        <div className={`relative`}>
                            <input type="text" required="required" className={styles.inputField} />
                            <span className={styles.inputTitle}>Project Name</span>
                        </div>
                        <div className={`relative`}>
                            <input type="text" required="required" className={styles.inputField} />
                            <span className={styles.inputTitle}>Client</span>
                        </div>
                        <div className={`relative`}>
                            <input type="text" required="required" className={styles.inputField} />
                            <span className={styles.inputTitle}>Contractor</span>
                        </div>
                        <div className={`relative`}>
                            <textarea name="" className={styles.inputField} cols="30" rows="10" required="required"></textarea>
                            <span className={styles.inputTitle}>Project Description</span>
                        </div>
                        <div>
                            <button className='text-[16px] w-full py-3 text-center text-gray-100 bg-[#287da1] rounded-[5px] uppercase  border border-transparent hover:bg-transparent duration-300 hover:text-[#5acbfc] hover:border-[#057caf]'
                                onClick={() => { setTwoStep(!twoStep) }}
                            >Next</button>
                        </div>
                    </article>
                    <article className={`space-y-7 w-full ${twoStep ? "block" : "hidden" }`}>
                        <div className='flex items-center justify-between gap-5'>
                            <div className={`relative w-1/2`}>
                                <input type="number" required="required" className={styles.inputField} />
                                <span className={styles.inputTitle}>Max_X</span>
                            </div>
                            <div className={`relative w-1/2`}>
                                <input type="number" required="required" className={styles.inputField} />
                                <span className={styles.inputTitle}>Min_X</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-5'>
                            <div className={`relative w-1/2`}>
                                <input type="number" required="required" className={styles.inputField} />
                                <span className={styles.inputTitle}>Max_Y</span>
                            </div>
                            <div className={`relative w-1/2`}>
                                <input type="number" required="required" className={styles.inputField} />
                                <span className={styles.inputTitle}>Min_Y</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-5'>
                            <div className={`relative w-1/2`}>
                                <input type="number" required="required" className={styles.inputField} />
                                <span className={styles.inputTitle}>Max_Z</span>
                            </div>
                            <div className={`relative w-1/2`}>
                                <input type="number" required="required" className={styles.inputField} />
                                <span className={styles.inputTitle}>Min_Z</span>
                            </div>
                        </div>
                        {/* Class Image input field */}
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-[270px] border-2 border-[#057caf] border-dashed rounded-lg cursor-pointer bg-transparent hover:bg-[#057caf] duration-700 group">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-[#057caf] group-hover:text-white duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-[#057caf] group-hover:text-white duration-300"><span className="font-semibold ">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-[#057caf] group-hover:text-white duration-300">{uploadButtonText}</p>
                            </div>
                            <input onChange={(e) => handleImageChange(e.target.files[0])} id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                        <div>
                            <button className='text-[16px] w-full py-3 text-center text-gray-100 bg-[#287da1] rounded-[5px] uppercase  border border-transparent hover:bg-transparent duration-300 hover:text-[#5acbfc] hover:border-[#057caf]'
                            >Result</button>
                        </div>
                    </article>
                </section>
            </section>
        </section>
    );
};

export default Form;