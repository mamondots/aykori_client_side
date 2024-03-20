import logo from '../../assets/images/ayykori.png'
import { RiLayoutGridFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { SlGrid } from "react-icons/sl";
import { BsDiagram3Fill } from "react-icons/bs";
import { BsBookmarksFill } from "react-icons/bs";
import { PiUserSquareBold } from "react-icons/pi";
import { SiInstructure } from "react-icons/si";
import { MdPieChart } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';




const SideMenu = () => {
    return (
        <div className='w-1/5'>
            <div>
                <img src={logo} alt="logo" />
            </div>

            <div className='py-8 space-y-2'>

                <div>
                    <h2 className='text-[#060709] text-lg font-semibold py-2'>Menu</h2>
                    <div className=''>
                        <ul className=''>
                            <li>
                                <NavLink to='/'>
                                    <a href="" className='flex items-center space-x-3  text-[#fff] text-lg font-medium bg-[#11998E] rounded-md py-2 px-4 duration-300 group'><span className='group-hover:scale-110'><RiLayoutGridFill /></span><span className=' text-[#fff] duration-300'>Dashboard</span></a>
                                </NavLink>
                            </li>
                            <li><a href="" className='menulink group'><span className='group-hover:scale-110'><MdEmail /></span><span className='text-[#060709] group-hover:text-[#fff] duration-300'>Massage</span></a></li>
                            <li><a href="" className='menulink group'><span className='group-hover:scale-110'><FaCalendar /></span><span className='text-[#060709] group-hover:text-[#fff] duration-300'>Calendar</span></a></li>
                        </ul>
                    </div>
                </div>


                <div>
                    <h2 className='text-[#060709] text-lg font-semibold py-2'>Recruitment</h2>
                    <div className=''>
                        <ul className=''>
                            <li><a href="" className='menulink group'><span className='group-hover:scale-110'><IoBag /></span><span className='text-[#060709] group-hover:text-[#fff] duration-300'>Jobs</span></a></li>
                            <li>
                                <NavLink to='/application'>
                                    <a href="" className='menulink group'><span className='group-hover:scale-110'><SlGrid /></span><span className='text-[#060709] group-hover:text-[#fff] duration-300'>Application</span></a>
                                </NavLink>
                            </li>
                            <li><a href="" className='menulink group'><span className='group-hover:scale-110'><BsDiagram3Fill /></span><span className='text-[#060709] group-hover:text-[#fff] duration-300'>Career site</span></a></li>
                            <li><a href="" className='menulink group'><span className='group-hover:scale-110'><BsBookmarksFill /></span><span className='text-[#060709] group-hover:text-[#fff] duration-300'>My Referrals</span></a></li>
                        </ul>
                    </div>
                </div>



                <div>
                    <h2 className='text-[#060709] text-lg font-semibold py-2'>Organization</h2>
                    <div className=''>
                        <ul className=''>
                            <li><a href="" className='menulink group'><span className='group-hover:scale-110'><PiUserSquareBold /></span><span className='text-[#060709] group-hover:text-[#fff] duration-300'>Employee</span></a></li>
                            <li><a href="" className='menulink group'><span className='group-hover:scale-110'><SiInstructure /></span><span className='text-[#060709] group-hover:text-[#fff] duration-300'>Structure</span></a></li>
                            <li><a href="" className='menulink group'><span className='group-hover:scale-110'><MdPieChart /></span><span className='text-[#060709] group-hover:text-[#fff] duration-300'>Report</span></a></li>
                            <li><a href="" className='menulink group'><span className='group-hover:scale-110'><IoSettings /></span><span className='text-[#060709] group-hover:text-[#fff] duration-300'>Settings</span></a></li>
                            <li><a href="" className='menulink group'><span className='group-hover:scale-110'><IoLogOutSharp /></span><span className='text-[#060709] group-hover:text-[#fff] duration-300'>logout</span></a></li>
                        </ul>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default SideMenu;