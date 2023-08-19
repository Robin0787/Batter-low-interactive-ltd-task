
import Papa from "papaparse";
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { infoContext } from "../../Pages/Provider/Provider";
import pattern from '../../assets/pattern.svg';
import styles from "./Form.module.css";

const Form = ({ twoStep, setTwoStep, setShowChart }) => {
    const [uploadButtonText, setUploadButtonText] = useState('Only CSV file accepted.');
    const {allInfo, dispatch} = useContext(infoContext);
    const navigate = useNavigate();

    // Event Listener for the next button
    function handleNext () {
        if(!allInfo.projectName) {
            toast.error('Project Name is Required');
        }
        else if(!allInfo.client) {
            toast.error('Client is Required');
        }
        else if(!allInfo.contractor) {
            toast.error('Contractor is Required');
        }
        else if(!allInfo.description) {
            toast.error('Description is Required');
        }
        else {
            setTwoStep(true);
        }
    }

    // Changing the name of file input field based on file name;
    const handleFileChange = (file) => {
        setUploadButtonText(file.name);
        Papa.parse(file, {
            header: true,
            complete: (result) => {
                const x = [];
                const y = [];
                const z = [];
                const kp = [];
                // console.log(result.data);
                result?.data?.map((d) => {
                    x.push(+(d.X)); // Used the + operator to convert the string without changing.
                    y.push(+(d.Y));
                    z.push(+(d.Z));
                    kp.push(+(d.KP));
                });
                const max_x = x.sort((a,b) => parseInt(b) - parseInt(a))[0];
                const min_x = x.sort((a,b) => parseInt(a) - parseInt(b))[0];

                const max_y = y.sort((a,b) => parseInt(b) - parseInt(a))[0];
                const min_y = y.sort((a,b) => parseInt(a) - parseInt(b))[0];

                const max_z = z.sort((a,b) => parseInt(b) - parseInt(a))[0];
                const min_z = z.sort((a,b) => parseInt(a) - parseInt(b))[0];

                dispatch({type: 'max_x', data: max_x});
                dispatch({type: 'min_x', data: min_x});

                dispatch({type: 'max_y', data: max_y});
                dispatch({type: 'min_y', data: min_y});

                dispatch({type: 'max_z', data: max_z});
                dispatch({type: 'min_z', data: min_z});

                dispatch({type:'X', data: x});
                dispatch({type: 'KP', data: kp});
                setShowChart(true);
            }
        })
    };


    function handleSeeResult () {
        if(!allInfo.maxX) {
            toast.error('MAX_X is required');
        }
        else if(!allInfo.minX) {
            toast.error('MIN_X is required');
        }
        else if(!allInfo.maxY) {
            toast.error('MAX_Y is required');
        }
        else if(!allInfo.minY) {
            toast.error('MIN_Y is required');
        }
        else if(!allInfo.maxZ) {
            toast.error('MAX_Z is required');
        }
        else if(!allInfo.minZ) {
            toast.error('MIN_Z is required');
        }
        else {
            toast.success('Everything is ok');
            localStorage.setItem('allInfo', JSON.stringify(allInfo));
            navigate('/result');
        }
    }

    return (
        <section className={`${twoStep ? "w-full" : "w-full md:w-2/3 lg:w-1/2 md:py-5"} h-full duration-500 `} style={{ backgroundImage: `url(${pattern})` }}>
            <section className={`overflow-hidden bg-black bg-opacity-50 h-full rounded-xl ring-2 ring-[#38bdf830] py-10 px-6 sm:p-10 md:p-10 lg:p-10`}>
                <div className='mb-10 lg:mb-14 mt-5'>
                    <h1 className='text-center text-[#5acbfc] text-2xl sm:text-3xl leading-[40px] font-thin uppercase whitespace-nowrap'>Project Information</h1>
                </div>
                <section className={`w-full flex ${twoStep ? "flex-col md:flex-row gap-8" : "flex-col gap-16"}  md:gap-10 items-center relative duration-700`}>
                    <article className={`space-y-4 lg:space-y-7 w-full`}>
                        <div className={`relative`}>
                            <input type="text" required="required" className={styles.inputField} 
                            onChange={(e) => {dispatch({type:'updateName', data: e.target.value})}}
                            disabled={twoStep}/>
                            <span className={styles.inputTitle}>Project Name</span>
                        </div>
                        <div className={`relative`}>
                            <input type="text" required="required" className={styles.inputField} 
                            onChange={(e) => {dispatch({type:'updateClient', data: e.target.value})}}
                            disabled={twoStep}/>
                            <span className={styles.inputTitle}>Client</span>
                        </div>
                        <div className={`relative`}>
                            <input type="text" required="required" className={styles.inputField} 
                            onChange={(e) => {dispatch({type:'updateContractor', data: e.target.value})}}
                            disabled={twoStep}/>
                            <span className={styles.inputTitle}>Contractor</span>
                        </div>
                        <div className={`relative`}>
                            <textarea name="" className={styles.inputField} cols="30" rows="6" required="required" onChange={(e) => {dispatch({type:'description', data: e.target.value})}}
                            disabled={twoStep}></textarea>
                            <span className={styles.inputTitle}>Project Description</span>
                        </div>
                        <div>
                            <button className='text-[16px] w-full py-3 text-center text-gray-100 bg-[#287da1] rounded-[5px] uppercase  border border-transparent
                            hover:bg-transparent duration-300 hover:text-[#5acbfc] hover:border-[#057caf] disabled:cursor-not-allowed disabled:border-[#057caf] disabled:hover:bg-[#287da1] disabled:opacity-60 disabled:text-[#5acbfc]'
                                onClick={handleNext}
                                disabled={twoStep}
                            >Next</button>
                        </div>
                    </article>
                    <article className={`space-y-4 lg:space-y-7 w-full ${twoStep ? "block" : "hidden" }`}>
                        {/* Max X and Min X field */}
                        <div className='flex items-center justify-between gap-5'>
                            <div className={`relative w-1/2`}>
                                <input type="number" required="required" className={styles.inputField}
                                value={allInfo.maxX ? allInfo.maxX : ''} 
                                onChange={(e) => {dispatch({type: 'max_x', data: e.target.value})}}/>
                                <span className={styles.inputTitle}>Max_X</span>
                            </div>
                            <div className={`relative w-1/2`}>
                                <input type="number" required="required" className={styles.inputField}
                                value={allInfo.minX ? allInfo.minX : ''} 
                                onChange={(e) => {dispatch({type: 'min_x', data: e.target.value})}}/>
                                <span className={styles.inputTitle}>Min_X</span>
                            </div>
                        </div>
                        {/* Max Y and Min Y field */}
                        <div className='flex items-center justify-between gap-5'>
                            <div className={`relative w-1/2`}>
                                <input type="number" required="required" className={styles.inputField}
                                value={allInfo.maxY ? allInfo.maxY : ''} 
                                onChange={(e) => {dispatch({type: 'max_y', data: e.target.value})}}/>
                                <span className={styles.inputTitle}>Max_Y</span>
                            </div>
                            <div className={`relative w-1/2`}>
                                <input type="number" required="required" className={styles.inputField} 
                                value={allInfo.minY ? allInfo.minY : ''}
                                onChange={(e) => {dispatch({type: 'min_y', data: e.target.value})}}/>
                                <span className={styles.inputTitle}>Min_Y</span>
                            </div>
                        </div>
                        {/* Max Z and Min Z field */}
                        <div className='flex items-center justify-between gap-5'>
                            <div className={`relative w-1/2`}>
                                <input type="number" required="required" className={styles.inputField}
                                value={allInfo.maxZ ? allInfo.maxZ : ''} 
                                onChange={(e) => {dispatch({type: 'max_z', data: e.target.value})}}/>
                                <span className={styles.inputTitle}>Max_Z</span>
                            </div>
                            <div className={`relative w-1/2`}>
                                <input type="number" required="required" className={styles.inputField} 
                                value={allInfo.minZ ? allInfo.minZ : ''}
                                onChange={(e) => {dispatch({type: 'min_z', data: e.target.value})}}/>
                                <span className={styles.inputTitle}>Min_Z</span>
                            </div>
                        </div>
                        {/* Class Image input field */}
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-[170px] border-2 border-[#057caf] border-dashed rounded-lg cursor-pointer bg-transparent hover:bg-[#057caf] duration-700 group">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-[#057caf] group-hover:text-white duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-[#057caf] group-hover:text-white duration-300"><span className="font-semibold ">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-[#057caf] group-hover:text-white duration-300">{uploadButtonText}</p>
                            </div>
                            <input onChange={(e) => handleFileChange(e.target.files[0])} id="dropzone-file" type="file" accept=" .csv" className="hidden" />
                        </label>
                    </div>
                        <div>
                            <button className='text-[16px] w-full mt-1 py-3 text-center text-gray-100 bg-[#287da1] rounded-[5px] uppercase  border border-transparent hover:bg-transparent duration-300 hover:text-[#5acbfc] hover:border-[#057caf]'
                            onClick={handleSeeResult}
                            >See Result</button>
                        </div>
                    </article>
                </section>
            </section>
        </section>
    );
};

export default Form;