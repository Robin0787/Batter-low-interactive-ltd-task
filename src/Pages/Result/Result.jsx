import { useContext } from "react";
import { infoContext } from "../Provider/Provider";


const Result = () => {
    const {allInfo} = useContext(infoContext);
    console.log(allInfo);
    return (
        <div className='flex items-center justify-center h-screen text-5xl'>
            <h1>Result</h1>
        </div>
    );
};

export default Result;