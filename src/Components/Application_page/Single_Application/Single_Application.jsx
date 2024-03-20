

const Single_Application = ({application}) => {
    const {name,year,salary,type,img,date} = application
    return (
        <div className="flex items-center justify-between bg-[#E0EDEA] group hover:bg-[#B9F2E5] duration-300 py-3 px-4 rounded-md cursor-pointer">
            <div className="flex items-center space-x-4 ">
                <img src={img} alt="" />
                <div>
                    <h2 className="text-base font-medium text-[#060709]">{name}</h2>
                    <p className="text-sm text-[#7B7B7B]">{year}  year exp. | Expected {salary}k</p>
                </div>
            </div>

            <div>
                <h2 className="text-[#11998E] group-hover:text-[#060709] duration-300 font-medium capitalize">{type}</h2>
            </div>

            <div>
                <h2>{date}</h2>
            </div>

        </div>
    );
};

export default Single_Application;