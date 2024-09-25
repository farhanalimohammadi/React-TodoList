import React ,  {useEffect , useState } from 'react';
import AvatarFluent from './icons/AvatarFluent.jpg'
import Union from './icons/Union.png'
import Shape2 from './icons/Shape2.png'
import Shape3 from './icons/Shape3.png'
import { FaEllipsis } from "react-icons/fa6";

export default function Appheader(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <div className={` mt-3 flex flex-row justify-between items-center p-[0px_16px_0px_16px] w-full h-[44px] lg:h-[68px]`}>
            <div className={`flex flex-row w-full justify-start gap-x-[8px]`}>
                <div className={`flex flex-row justify-between items-center w-full md:w-auto`}>
                    <div className='flex flex-row justify-between items-center gap-x-2'>
                        {windowWidth > 768 ? (<img className='w-[30px] h-[30px] object-cover' src={AvatarFluent} alt="" />) : (<img src={Union} alt="" />)}
                        <h2 className={` flex flex-nowrap gap-x-2 flex-row text-[26px] font-bold text-black`} ><span>Van </span><span>Arsdel</span></h2>
                    </div>
                    <div className=' md:hidden flex flex-row justify-center items-center gap-x-5'>
                        <img src={Shape3} alt="" />
                        <i><FaEllipsis/></i>
                    </div>
                </div>
                <div className={` hidden sm:p-3 md:flex sm:justify-center sm:items-center hover:border-b-2 border-blue-500 border-solid `} ><button className={`text-black bg-white border-none outline-none text-[14px]`}>home</button></div>
                <div className={` hidden sm:p-3 md:flex sm:justify-center sm:items-center hover:border-b-2 border-blue-500 border-solid `}><button className={`text-black bg-white border-none outline-none text-[14px]`}>Timeline</button></div>
                <div className={` hidden sm:p-3 md:flex sm:justify-center sm:items-center hover:border-b-2 border-blue-500 border-solid `}><button className={`text-black bg-white border-none outline-none text-[14px]`}>Chat</button></div>
                <div className={` hidden sm:p-3 md:flex sm:justify-center sm:items-center hover:border-b-2 border-blue-500 border-solid `}><button className={`text-black bg-white border-none outline-none text-[14px]`}>Assigned to you</button></div>
            </div>
            <div className={`md:flex flex-row gap-x-2 hidden`}>
                <img src={Shape2} alt="" />
                <i><FaEllipsis/></i>
            </div>
        </div>
    )
}