import { IoIosSearch } from "react-icons/io";


const Nabvar = () => {
    return (
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Good Morning</h2>
            <div className="flex items-center bg-[#B9F2E5] rounded-md">
                 <input className=" px-4 bg-transparent outline-none" type="text" placeholder="Search..." />
                 <p className="py-3 px-3 bg-[#11998E] text-xl text-[#fff] rounded-md"><IoIosSearch /></p>
            </div>
        </div>
    );
};

export default Nabvar;