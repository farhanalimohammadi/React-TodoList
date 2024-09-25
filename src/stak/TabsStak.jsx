import React , {useEffect , useState} from 'react';
import { CgAddR , CgFile } from "react-icons/cg";
import { BiBell } from "react-icons/bi";
import { BsChatText } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { FaEllipsis } from "react-icons/fa6";
import Buttonluent21 from './SVG/Buttonluent21.jpg'

export default function Tabs(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return(
        <div className=' z-50 bg-white sm:bg-[#EBEBEB] sm:h-[1000px] sm:flex-col sm:justify-start sm:items-center sm:static sm:w-[78px] sm:px-3 sm:left-0 flex flex-row justify-between w-full h-[83px] gap-x-[6px] fixed bottom-[2px]'>
            <div className={` hover:text-blue-500 active:text-blue-500 cursor-pointer flex flex-col items-center justify-center w-[78px] h-[60px] p-[8px_22px_8px_22px] ${windowWidth > 500 ? " bg-[#EBEBEB]" : "bg-white"}`}>
            <i className='text-[24px]'><BiBell/></i>
                <h4 className='text-[10px] text-center'  >Activity</h4>
            </div>
            <div className={` hover:text-blue-500 active:text-blue-500 cursor-pointer flex flex-col items-center justify-center w-[78px] h-[60px] p-[8px_22px_8px_22px] ${windowWidth > 500 ? " bg-[#EBEBEB]" : "bg-white"}`}>
            <i className='text-[24px]'><BsChatText/></i>
                <h4 className='text-[10px] text-center'>Chat</h4>
            </div>
            <div className={` hover:text-blue-500 active:text-blue-500 cursor-pointer flex flex-col items-center justify-center w-[78px] h-[60px] p-[8px_22px_8px_22px] ${windowWidth > 500 ? " bg-[#EBEBEB]" : "bg-white"}`}>
            <i className='text-[24px]'><RiTeamLine/></i>
                <h4 className='text-[10px] text-center'>Teams</h4>
            </div>
            <div className={` hover:text-blue-500 active:text-blue-500 cursor-pointer flex flex-col items-center justify-center w-[78px] h-[60px] p-[8px_22px_8px_22px] ${windowWidth > 500 ? " bg-[#EBEBEB]" : "bg-white"}`}>
            <i className='text-[24px]'><BiCalendar/></i>
                <h4 className='text-[10px] text-center'>Calendar</h4>
            </div>

            <div className={` ${windowWidth > 500 ? "block" : "hidden"} hover:text-blue-500 active:text-blue-500 cursor-pointer flex flex-col items-center justify-center w-[78px] h-[60px] p-[8px_22px_8px_22px] bg-[#EBEBEB]`}>
            <i className='text-[24px]'><BsTelephone/></i>
                <h4 className='text-[10px] text-center'>Calls</h4>
            </div>
            <div className={` ${windowWidth > 500 ? "block" : "hidden"} hover:text-blue-500 active:text-blue-500 cursor-pointer flex flex-col items-center justify-center w-[78px] h-[60px] p-[8px_22px_8px_22px] bg-[#EBEBEB]`}> 
            <i className='text-[24px]'><CgFile/></i>
                <h4 className='text-[10px] text-center'>Files</h4>
            </div>
            <div className={` ${windowWidth > 500 ? "block" : "hidden"} hover:text-blue-500 active:text-blue-500 cursor-pointer flex flex-col items-center justify-center w-[78px] h-[60px] p-[8px_22px_8px_22px] bg-[#EBEBEB]`}>
                <img className='w-[24px] h-[24px] object-cover mix-blaend-mode' src={Buttonluent21} alt="" />
                <h4 className='text-[10px] text-center'>Van Arsdel</h4>
            </div>
            <div className={ `  hover:text-blue-500 active:text-blue-500 cursor-pointer lassName= flex flex-col items-center justify-center w-[78px] h-[60px] p-[8px_22px_8px_22px] ${windowWidth > 500 ? " bg-[#EBEBEB]" : "bg-white"}`}>
            <i className='text-[24px]'><FaEllipsis/></i>
            </div>
            <div className={` ${windowWidth > 500 ? "block" : "hidden"} hover:text-blue-500 active:text-blue-500 cursor-pointer flex flex-col items-center justify-center w-[78px] h-[60px] p-[8px_22px_8px_22px] bg-[#EBEBEB]`}>
                <i className='text-[24px]'><CgAddR/></i>
                <h4 className='text-[10px] text-center'>Apps</h4>
            </div>
        </div>
    )
}