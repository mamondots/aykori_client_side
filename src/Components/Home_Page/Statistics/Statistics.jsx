
import { FaCalendarAlt } from "react-icons/fa";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { GoDotFill } from "react-icons/go";

const Statistics = () => {
    const data = [
        {
            name: 'Mon',
            uv: 400,
            pv: 240,
            re: 240,
        },
        {
            name: 'Tue',
            uv: 300,
            pv: 139,
            re: 221,
        },
        {
            name: 'Wed',
            uv: 200,
            pv: 980,
            re: 229,
        },
        {
            name: 'Thu',
            uv: 278,
            pv: 390,
            re: 200,
        },
        {
            name: 'Fri',
            uv: 189,
            pv: 480,
            re: 218,
        },
        {
            name: 'Sat',
            uv: 239,
            pv: 380,
            re: 250,
        },
        {
            name: 'Sun',
            uv: 349,
            pv: 430,
            re: 210,
        },
    ];
    return (
        <div className="py-4 flex space-x-8">
            <div className="w-2/3">

                <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#060709]">Statistics of Active Applications</p>
                    <div className="flex items-center">
                        <p className="py-1 px-1 text-[#11998E] bg-[#B9F2E5] rounded"><FaCalendarAlt /></p>
                        <select className="font-semibold text-[#060709] outline-none" >
                            <option value="">Week</option>
                            <option value="">Month</option>
                            <option value="">Year</option>
                        </select>
                    </div>
                </div>

                <div className='ml-[-12px] mt-6'>

                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 0,
                            left: 0,

                        }}
                        padding={{
                            padding: 20
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="pv" stackId="a" fill="#11998E" />
                        <Bar dataKey="re" stackId="a" fill="#E7B860" />
                        <Bar dataKey="uv" stackId="a" fill="#FF6A49" />
                    </BarChart>

                </div>

                <div className='py-4 flex items-center justify-between'>

                    <div className='flex items-center space-x-1'>
                        <input type="checkbox" className="toggle toggle-sm  [--tglbg:#11998E] bg-[#fff] hover:bg-[#fff] border-[#11998E]" checked />
                        <p className='text-[#060709] font-medium text-sm'>Applications</p>
                    </div>

                    <div className='flex items-center space-x-1'>
                        <input type="checkbox" className="toggle toggle-sm  [--tglbg:#E7B860] bg-[#fff] hover:bg-[#fff] border-[#E7B860]" checked />
                        <p className='text-[#060709] font-medium text-sm'>Shortlisted</p>
                    </div>

                    <div className='flex items-center space-x-1'>
                        <input type="checkbox" className="toggle toggle-sm [--tglbg:#FF6A49] bg-[#fff] hover:bg-[#fff] border-[#FF6A49]" checked />
                        <p className='text-[#060709] font-medium text-sm'>Rejected</p>
                    </div>

                    <div className='flex items-center space-x-1'>
                        <input type="checkbox" className="toggle toggle-sm [--tglbg:#7B7B7B] bg-[#fff] hover:bg-[#fff] border-[#7B7B7B]" checked />
                        <p className='text-[#060709] font-medium text-sm'>On Hold</p>
                    </div>

                </div>

            </div>

            <div className="w-full">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#060709]">Acquisitions</p>
                    <div className="flex items-center">
                        <p className="py-1 px-1 text-[#11998E] bg-[#B9F2E5] rounded"><FaCalendarAlt /></p>
                        <select className="font-semibold text-[#060709] outline-none" >
                            <option value="">Month</option>
                            <option value="">Week</option>
                            <option value="">Year</option>
                        </select>
                    </div>
                </div>

                <div className="my-8 space-y-10">

                    <div className="flex items-center justify-between">
                        <p className="flex items-center space-x-1  font-medium"><span className="text-xl text-[#11998E]"><GoDotFill /></span> <span>Applications</span></p>
                        <div className="flex items-center space-x-2">
                            <progress className="progress progress-accent w-20" value={40} max="60"></progress>
                            <p className="text-sm font-medium text-[#11998E]">80%</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="flex items-center space-x-1  font-medium"><span className="text-xl text-[#E7B860]"><GoDotFill /></span> <span>Shortlisted</span></p>
                        <div className="flex items-center space-x-2">
                            <progress className="progress progress-accent w-20" value={40} max="60"></progress>
                            <p className="text-sm font-medium text-[#11998E]">80%</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="flex items-center space-x-1  font-medium"><span className="text-xl text-[#FF6A49]"><GoDotFill /></span> <span>Rejected</span></p>
                        <div className="flex items-center space-x-2">
                            <progress className="progress progress-accent w-20" value={40} max="60"></progress>
                            <p className="text-sm font-medium text-[#11998E]">80%</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="flex items-center space-x-1  font-medium"><span className="text-xl text-[#7B7B7B]"><GoDotFill /></span> <span>On Hold</span></p>
                        <div className="flex items-center space-x-2">
                            <progress className="progress progress-accent w-20" value={40} max="60"></progress>
                            <p className="text-sm font-medium text-[#11998E]">80%</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="flex items-center space-x-1  font-medium"><span className="text-xl text-[#61E7D3]"><GoDotFill /></span> <span>Finalised</span></p>
                        <div className="flex items-center space-x-2">
                            <progress className="progress progress-accent w-20" value={40} max="60"></progress>
                            <p className="text-sm font-medium text-[#11998E]">80%</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Statistics;