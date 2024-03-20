import { useEffect, useState } from "react";
import Single_Application from "../Single_Application/Single_Application";
import { useDispatch, useSelector } from "react-redux";
import { feactApplications } from "../../../redux/features/applications/applicationsSlice";
import Loader from "../../../utilitis/Loader";
import { IoIosSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import './Application.css'


const Application = () => {


    const dispatch = useDispatch()
    const { applications, isLoading, isError, error } = useSelector((state) => state.applications)
    useEffect(() => {
        dispatch(feactApplications())
    }, [dispatch])

    let content = null;

    if (isLoading) content = <Loader></Loader>
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && applications?.length === 0) {
        content = <div className="col-span-12">no video found</div>
    }
    if (!isLoading && !isError && applications?.length > 0) {
        content = applications.map(application => <Single_Application key={application._id} application={application}></Single_Application>)
    }


    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }

    const Shortlisted = applications.filter((type) => type.type === 'Shortlisted')
    const rejected = applications.filter((type) => type.type === 'rejected')
    const Inprocess = applications.filter((type) => type.type === 'Inprocess')
    const OnHold = applications.filter((type) => type.type === 'OnHold')


    return (
        <div className="w-full  px-20 py-6">
            <h2 className="text-xl font-semibold text-[#060709]">Application</h2>
            <p className="pt-4 font-medium">On Going Recruitment</p>

            <div>
                <select className="bg-[#B9F2E5] my-4 outline-none px-4 py-2 rounded-md text-[#060709] font-medium text-sm">
                    <option value="">Jr. UI/UX Designer</option>
                    <option value="">Jr. FrontEnd Developer</option>
                    <option value="">Jr. BackEnd Developer</option>
                    <option value="">Jr. Grapich Designer</option>
                </select>
            </div>

            <div className="bg-[#E0EDEA] my-2 rounded-md py-4 px-6 flex items-center justify-between">
                <div className="flex items-center space-x-6 font-medium text-[#060709] cursor-pointer">

                    <p onClick={() => toggleTab(1)}
                        className={toggle === 1 ? "tabs active-tabs border-b-2 border-[#11998E] px-2 py-2" : "px-2 py-2  tabs"}>
                        All ({applications.length})
                    </p>

                    <p onClick={() => toggleTab(2)}
                        className={toggle === 2 ? "tabs active-tabs border-b-2 border-[#11998E] px-2 py-2" : "px-2 py-2  tabs"}>
                        Shortlisted ({Shortlisted.length})
                    </p>

                    <p onClick={() => toggleTab(3)}
                        className={toggle === 3 ? "tabs active-tabs border-b-2 border-[#11998E] px-2 py-2" : "px-2 py-2   tabs"}>
                        In process ({Inprocess.length})
                    </p>

                    <p onClick={() => toggleTab(4)}
                        className={toggle === 4 ? "tabs active-tabs border-b-2 border-[#11998E] px-2 py-2" : "px-2 py-2   tabs"}>
                        On Hold {(OnHold.length)}
                    </p>

                    <p onClick={() => toggleTab(5)}
                        className={toggle === 5 ? "tabs active-tabs border-b-2 border-[#11998E] px-2 py-2" : "px-2 py-2   tabs"}>
                        rejected ({rejected.length})
                    </p>
                </div>

                <div className="flex items-center space-x-3">
                    <p className="flex items-center justify-center space-x-1"><span className="text-[#11998E]"><IoIosSearch /></span><span>Search</span></p>
                    <p className="flex items-center justify-center space-x-1"><span className="text-[#11998E]"><CiFilter /></span><span>Filter</span></p>
                </div>
            </div>

            <div className={toggle === 1 ? "content active-content" : "content"}>
                <div className="my-4 space-y-3">
                    {content}
                </div>
            </div>

            <div className={toggle === 2 ? "content active-content" : "content"}>
                 <div className="my-4 space-y-3">
                    
                      {
                        Shortlisted.map(application => <Single_Application key={application._id} application={application}></Single_Application>)
                      }  
                    
                 </div>
            </div>


            <div className={toggle === 3 ? "content active-content" : "content"}>
                 <div className="my-4 space-y-3">
                    
                      {
                        Inprocess.map(application => <Single_Application key={application._id} application={application}></Single_Application>)
                      }  
                    
                 </div>
            </div>


            <div className={toggle === 4 ? "content active-content" : "content"}>
                 <div className="my-4 space-y-3">
                    
                      {
                        OnHold.map(application => <Single_Application key={application._id} application={application}></Single_Application>)
                      }  
                    
                 </div>
            </div>

            <div className={toggle === 5 ? "content active-content" : "content"}>
                 <div className="my-4 space-y-3">
                    
                      {
                        rejected.map(application => <Single_Application key={application._id} application={application}></Single_Application>)
                      }  
                    
                 </div>
            </div>

            
        </div>
    );
};

export default Application;