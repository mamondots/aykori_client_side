import { useEffect, useState } from "react";
import Job from "../Job/Job";
import { useDispatch, useSelector } from "react-redux";
import { feactJobs } from "../../../../redux/features/jobs/jobsSlice";
import Loader from "../../../../utilitis/Loader";


const All_Jobs = () => {
    // const [jobs,setJobs] = useState([])
    // useEffect(() =>{
    //     fetch('jobs.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setJobs(data)
    //     })
    // },[])

    const dispatch = useDispatch()
    const { jobs, isLoading, isError, error } = useSelector((state) => state.jobs)
    useEffect(() => {
        dispatch(feactJobs())
    }, [dispatch])

    console.log(jobs)

    let content = null;

    if (isLoading) content = <Loader></Loader>
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && jobs?.length === 0) {
        content = <div className="col-span-12">no video found</div>
    }
    if (!isLoading && !isError && jobs?.length > 0) {
        content = jobs.map((job,index) => <Job key={job._id} index={index}  job={job}></Job>)
    }
    return (
        <div className="mx-4 mt-4">
            <p className="text-sm font-medium">Recent Added Jobs</p>
            <div className="my-4 space-y-2">
                {
                    content
                }
            </div>
        </div>
    );
};

export default All_Jobs;