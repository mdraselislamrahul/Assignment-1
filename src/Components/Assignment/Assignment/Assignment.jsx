
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Assignment = ({ assigment }) => {

    const { id, img, name, description, requirements, date, mark } = assigment;

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div
            // data-aos="zoom-in-down"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
        >

            <div className="card lg:card-side md:card-side bg-base-100 shadow-xl mt-10">
                <figure className="lg:w-1/2 md:w-1/2"
                    data-aos="fade-right"
                   data-aos-duration="2000"
                >
                    <img className="h-96 w-full"
                        src={img}
                        alt="Album" />
                </figure>
                <div className="card-body lg:w-1/2 md:w-1/2"
                data-aos="fade-left"
                data-aos-duration="2000"
                >
                    <h2 className="card-title text-3xl">{name}</h2>
                    <p className="font-bold">{description}</p>
                    <h3 className="text-2xl">Requirement:</h3>
                    <ul className="list-disc ml-10">
                        <li>{requirements.one}</li>
                        <li>{requirements.two}</li>
                        <li>{requirements.theree}</li>
                    </ul>
                    <h4 className="text-red-700 font-bold">Date: {date}</h4>
                    <div className="card-actions mb-0 justify-">
                        <button className="btn btn-primary w-full mt-5 text-xl">Mark: {mark}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assignment;