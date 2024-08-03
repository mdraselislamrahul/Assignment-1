import img1 from "./Image/assignment-cover-page-template.jpg"
import img2 from "./Image/educational-assignment-cover-page-template.jpg"
import img3 from "./Image/business-assignment-cover-page-template-in-ms-word-format.jpg"
import img4 from "./Image/critical-review-assignment-cover-page-template.jpg"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className="mt-5">
            <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={img1}
                        className="w-full" />
                    <div className="absolute right-20 bottom-5 flex -translate-y-1/2 transform justify-">
                        <a href="#slide4" className="text-red-700 text-5xl font-bold mr-3"><FaArrowLeftLong /></a>
                        <a href="#slide2" className="text-red-700 text-5xl font-bold"><FaArrowRightLong /></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={img2}
                        className="w-full" />
                    <div className="absolute right-20 bottom-5 flex -translate-y-1/2 transform justify-">
                        <a href="#slide1" className="text-red-700 text-5xl font-bold mr-3"><FaArrowLeftLong /></a>
                        <a href="#slide3" className="text-red-700 text-5xl font-bold"><FaArrowRightLong /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={img3}
                        className="w-full" />
                    <div className="absolute right-20 bottom-5 flex -translate-y-1/2 transform justify-">
                        <a href="#slide2" className="text-red-700 text-5xl font-bold mr-3"><FaArrowLeftLong /></a>
                        <a href="#slide4" className="text-red-700 text-5xl font-bold"><FaArrowRightLong /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={img4}
                        className="w-full" />
                    <div className="absolute right-20 bottom-5 flex -translate-y-1/2 transform justify-">
                        <a href="#slide3" className="text-red-700 text-5xl font-bold mr-3"><FaArrowLeftLong /></a>
                        <a href="#slide1" className="text-red-700 text-5xl font-bold"><FaArrowRightLong /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;