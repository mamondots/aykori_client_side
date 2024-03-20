import { FaCalendarAlt } from "react-icons/fa";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { BsGenderAmbiguous } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";


import './Applications_Received.css'

const Applications_Received = () => {
    const data = [
        {
            name: '8PM',
            uv: 400,

        },
        {
            name: '10PM',
            uv: 300,

        },
        {
            name: '12PM',
            uv: 200,

        },
        {
            name: '2PM',
            uv: 278,

        },
        {
            name: '4PM',
            uv: 189,

        },
        {
            name: '6PM',
            uv: 239,

        },
        {
            name: '8PM',
            uv: 349,

        },
    ];
    return (
        <div className="py-4 flex space-x-16">
            <div className="w-2/3">

                <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#060709]">Applications Received Time</p>
                    <div className="flex items-center">
                        <p className="py-1 px-1 text-[#11998E] bg-[#B9F2E5] rounded"><FaCalendarAlt /></p>
                        <select className="font-semibold text-[#060709] outline-none" >
                            <option value="">Today</option>
                            <option value="">Tomorrow</option>
                            <option value="">Yesterday</option>
                        </select>
                    </div>
                </div>

                <div className='ml-[-25px] mt-10'>

                    <AreaChart
                        width={500}
                        height={200}
                        data={data}
                        margin={{
                            bottom: 20
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#92C1BD" fill="#92C1BD" fillOpacity={0.3} />

                    </AreaChart>

                </div>

            </div>

            <div className="w-full flex items-center  flex-col">
                <h2 className="font-semibold text-[#060709]">Candidates by Gender</h2>

                <div className="gender_bar mt-6">
                    <p className="value text-2xl bg-[#fff] px-8 py-8 rounded-full shadow-md text-[#11998E]"><BsGenderAmbiguous /></p>
                </div>

                <div className="flex items-center justify-between space-x-6 py-3">
                    <p className="flex items-center space-x-1 font-medium"><span className="text-[#11998E] text-2xl"><GoDotFill /></span> <span>Male</span></p>
                    <p className="flex items-center space-x-1 font-medium"><span className="text-[#E7B860] text-2xl"><GoDotFill /></span> <span>Female</span></p>
                </div>

            </div>
        </div>
    );
};

export default Applications_Received;