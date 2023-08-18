import { useState } from 'react';
import Form from '../../Components/Form/Form';
import pattern from '../../assets/pattern.svg';

const Home = () => {
    const [twoStep, setTwoStep] = useState(false);
    return (
        <section className={`bg-black w-full ${twoStep ? "h-auto md:h-screen" : "h-screen"} md:overflow-hidden`}>
            <section className='flex justify-center items-center h-full w-full'
            style={{ backgroundImage: `url(${pattern})` }}>
               <Form twoStep={twoStep} setTwoStep={setTwoStep}/>
            </section>
        </section>
    );
};

export default Home;