
import { useLoaderData } from "react-router-dom";
import Assignment from "./Assignment/Assignment";
import { useRef, useState } from "react";

const Assignments = () => {

    const datas = useLoaderData(null)
    // console.log(datas)
    const [assignmentArray, setAssignmentAssay] = useState(datas);
    const serchRef = useRef()


    const handleSort = (e) => {
        if (e.target.value == "lowToHighMark") {
            const sortArray = datas.sort((a, b) => a.mark - b.mark)
            setAssignmentAssay([...sortArray])
        }

        if (e.target.value == "highToLowMarck") {
            const sortArray = datas.sort((a, b) => b.mark - a.mark)
            setAssignmentAssay([...sortArray])
        }

        if (e.target.value == "default") {
            setAssignmentAssay([...datas])
        }
    }
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(serchRef.current.value)
        const search = datas.filter((e, inx) => e.name.toLowerCase().includes(serchRef.current.value.toLowerCase()))
        console.log(search)
        setAssignmentAssay([...search])
        if (serchRef.current.value.length < 1) {
            setAssignmentAssay([...datas])
        }
    }

    return (
        <div>

            <div className="flex justify-around mt-5">
                <div>
                    <input ref={serchRef} type="text" placeholder="Type here" className="input input-bordered w-96 max-w-xs" />

                    <button onClick={handleSearch} className="btn btn-secondary py-4">Click Here</button>
                </div>


                <div>
                    <select onClick={handleSort} className="select select-bordered w-full max-w-xs">
                        <option value="default">Default</option>
                        <option value="highToLowMarck">Hight To Low Mark</option>
                        <option value="lowToHighMark">Low To High Mark</option>
                    </select>
                </div>
            </div>


            {
                assignmentArray.map(assignment => <Assignment assigment={assignment} key={assignment.id}></Assignment>)
            }
        </div>
    );
};

export default Assignments;