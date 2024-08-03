
const Form = () => {
    return (
        <div className="mt-20 p-5 bg-zinc-400">
            <div className="md:flex">
                <div className="md:w-full">
                    <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" /><br />

                    <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs mt-5" />

                </div>
                <div className="md:w-full">
                    <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />


                    <label className="form-control w-full max-w-xs mt-5">
                        <select className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="mt-5">
            <textarea className="textarea textarea-bordered md:w-11/12 h-32" placeholder="Bio"></textarea>
            <button className="btn btn-primary md:w-11/12 mt-5">Sent Message</button>
            </div>
        </div>
    );
};

export default Form;