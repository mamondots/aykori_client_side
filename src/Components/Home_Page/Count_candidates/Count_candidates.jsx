import { MdOutlineArrowOutward } from "react-icons/md";
import { FiArrowDownRight } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";


import './Count_candidates.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { feactApplications } from "../../../redux/features/applications/applicationsSlice";

const Count_candidates = () => {
    const dispatch = useDispatch()
    const { applications} = useSelector((state) => state.applications)
    useEffect(() => {
        dispatch(feactApplications())
    }, [dispatch])

    const Shortlisted = applications.filter((type) => type.type === 'Shortlisted')
    const rejected = applications.filter((type) => type.type === 'rejected')
    const Inprocess = applications.filter((type) => type.type === 'Inprocess')
    const OnHold = applications.filter((type) => type.type === 'OnHold')

    return (
        <div className="py-8 mt-8 flex items-center justify-between">

            <div className="flex items-center space-x-6 relative">
                <div>
                     <h2 className="text-sm font-medium text-[#060709]">Total Candidates</h2>
                     <p className="text-2xl font-bold text-[#060709] py-2">{applications.length}</p>
                     <p className="text-sm flex items-center space-x-1 text-[#11998E]"><span className="px-1 py-1 bg-[#B9F2E5] text-[#11998E] rounded-full"><MdOutlineArrowOutward /></span> <span>+26% Inc</span></p>
                </div>

                <div className="circle_bar">
                        <p className="value text-[#11998E] text-sm font-medium">+ 74%</p>
                </div>

                <div className="top-[-20px] right-0 absolute">
                    <p className="text-2xl text-[#979797]"><BsThreeDots /></p>
                </div>
            </div>


            <div className="flex items-center space-x-6 relative">
                <div>
                     <h2 className="text-sm font-medium text-[#060709]">Shortlisted Candidates</h2>
                     <p className="text-2xl font-bold text-[#060709] py-2">{Shortlisted.length}</p>
                     <p className="text-sm flex items-center space-x-1 text-[#E7B860]"><span className="px-1 py-1 bg-[#E0EDEA] text-[#E7B860] rounded-full"><MdOutlineArrowOutward /></span> <span>+45% Inc</span></p>
                </div>

                <div className="circle_bar2">
                        <p className="value text-[#E7B860] text-sm font-medium">+ 74%</p>
                </div>

                <div className="top-[-20px] right-0 absolute">
                    <p className="text-2xl text-[#979797]"><BsThreeDots /></p>
                </div>
            </div>

            <div className="flex items-center space-x-6 relative">
                <div>
                     <h2 className="text-sm font-medium text-[#060709]">Rejected Candidates</h2>
                     <p className="text-2xl font-bold text-[#060709] py-2">{rejected.length}</p>
                     <p className="text-sm flex items-center space-x-1 text-[#FF6A49]"><span className="px-1 py-1 bg-[#E0EDEA] text-[#FF6A49] rounded-full"><FiArrowDownRight /></span> <span>+04% Dec</span></p>
                </div>

                <div className="circle_bar3">
                        <p className="value text-[#FF6A49] text-sm font-medium">+ 74%</p>
                </div>

                <div className="top-[-20px] right-0 absolute">
                    <p className="text-2xl text-[#979797]"><BsThreeDots /></p>
                </div>
            </div>


        </div>
    );
};

export default Count_candidates;