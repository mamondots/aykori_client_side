

const Job = ({job,index}) => {
    const {title,description} = job
    return (
        <div className="flex items-center space-x-2 bg-[#B9F2E5] rounded-md py-2 px-2">
            <p className="py-2 px-3 bg-[#11998E] font-medium text-[#fff]">{index+1}</p>
            <div>
                <h2 className="font-medium capitalize">{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};

export default Job;