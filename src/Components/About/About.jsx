import Banner from '../Home/Banner/Banner';
import Datiles from './Datiles/Datiles';
import { FaCircleCheck } from "react-icons/fa6";
import Form from './Form/Form';

const About = () => {
    return (
        <div>
            <Banner></Banner>
            <Datiles></Datiles>
            <div>
                <h1 className="text-4xl font-bold mt-20">Personlized Support to Help You Develop Your Skill Strategy</h1>
                <p className='mt-5'>Why do I position myself as a Mentor rather than a coach? Your personal copy of my Business Builder Report, designed to help you develop your business and enjoy entrepreneurial success.</p>
            </div>
            <div  className='md:flex'>
                <div className=' md:w-1/2'>
                    <ul className='mt-10'>
                        <li className='flex'>
                            <FaCircleCheck /> <span className='ml-3 '>Providing a first-class experience</span>
                        </li>
                        <li className='flex mt-3'>
                            <FaCircleCheck /> <span className='ml-3'>Open to challenge myself</span>
                        </li>
                        <li className='flex mt-3'>
                            <FaCircleCheck /> <span className='ml-3'>Honest and Truthful</span>
                        </li>
                    </ul>

                </div>
                <div className='md:w-1/2'>
                <ul className='mt-10'>
                        <li className='flex'>
                            <FaCircleCheck /> <span className='ml-3 '>Dedicated to my clients</span>
                        </li>
                        <li className='flex mt-3'>
                            <FaCircleCheck /> <span className='ml-3'>Enhance your leadership skills</span>
                        </li>
                        <li className='flex mt-3'>
                            <FaCircleCheck /> <span className='ml-3'>Drive sales and customer loyalty</span>
                        </li>
                    </ul>
                </div>
            </div>

            <Form></Form>
        </div>
    );
};

export default About;