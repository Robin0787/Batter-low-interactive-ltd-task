import { useState } from 'react';
import Chart from '../../Components/Chart/Chart';
import Form from '../../Components/Form/Form';
import pattern from '../../assets/pattern.svg';

const Home = () => {
    const [twoStep, setTwoStep] = useState(false);
    const [showChart, setShowChart] = useState(false);
    
    return (
        <section className={`bg-black w-full ${twoStep ? "h-auto md:min-h-screen" : "h-screen"} md:overflow-hidden`}>
            <section className='flex justify-center items-center h-full w-full'
            style={{ backgroundImage: `url(${pattern})` }}>
               <Form twoStep={twoStep} setTwoStep={setTwoStep} showChart={showChart} setShowChart={setShowChart}/>
            </section>
            <section>
                {showChart && <Chart data={true}/>}
            </section>
        </section>
    );
};

export default Home;