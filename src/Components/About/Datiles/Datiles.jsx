import { BsGraphUpArrow } from "react-icons/bs";
import { LiaBullhornSolid } from "react-icons/lia";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
const Datiles = () => {
    return (
        <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"

            className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="card bg-neutral text-neutral-content w-">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-5xl text-red-700 font-bold"><BsGraphUpArrow /></h2>
                    <h2 className="text-xl font-bold mt-3">Business Progress</h2>
                    <p className="mt-3">Duis aute irure reprehenderit in voluptate velit esse cillum fugiat nulla pariatur sunt in culpa qui officia deserunt mollit .</p>
                </div>
            </div>
            <div className="card bg-neutral text-neutral-content w-">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-5xl text-red-700 font-bold"><LiaBullhornSolid /></h2>
                    <h2 className="text-xl font-bold mt-3">Marketing and Sales</h2>
                    <p className="mt-3">Duis aute irure reprehenderit in voluptate velit esse cillum fugiat nulla pariatur sunt in culpa qui officia deserunt mollit .</p>
                </div>
            </div>
            <div className="card bg-neutral text-neutral-content w-">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-5xl text-red-700 font-bold"><FaPersonArrowUpFromLine /></h2>
                    <h2 className="text-xl font-bold mt-3">Personal Growth</h2>
                    <p className="mt-3">Duis aute irure reprehenderit in voluptate velit esse cillum fugiat nulla pariatur sunt in culpa qui officia deserunt mollit .</p>
                </div>
            </div>
        </div>
    );
};

export default Datiles;