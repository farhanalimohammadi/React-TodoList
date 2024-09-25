import React from "react";
import { FaEllipsis } from "react-icons/fa6";
import Chart1 from './exports/Chart1.jpg'
import Chart2 from './exports/Chart2.jpg'
import Chart3 from './exports/Chart3.jpg'
import Chart5 from './exports/Chart5.jpg'
import Chart6 from './exports/Chart6.jpg'
import Frame1321316017 from './exports/Frame1321316017.jpg'

export default function Charts(){
    return(
        <div className="flex flex-col justify-start items-center mt-10 ">
            <div className=" gap-y-1 flex items-center flex-col md:flex-row justify-around w-full translate-y-[-40px] mt-10 md:mt-auto md:ml-4 md:gap-x-2">
                <div className="p-[12px] w-[281px] h-[420px] shadow-sm shadow-slate-300 rounded-lg">
                    <div className="flex flex-row justify-between w-full items-center">
                        <div className="flex flex-col justify-center gap-y-1 items-start">
                            <h3 className="text-[18px] font-bold">Card Title</h3>
                            <p className="text-[12px]">Description</p>
                        </div>
                        <div>
                            <i><FaEllipsis/></i>
                        </div>
                    </div>

                    <div className="flex flex-row justify-start items-center gap-x-5 mt-3">
                        <span className="px-1 py-1 hover:border-b-[3px] border-blue-500 border-solid">7 days</span>
                        <span className="px-1 py-1 hover:border-b-[3px] border-blue-500 border-solid">30 days</span>
                        <span className="px-1 py-1 hover:border-b-[3px] border-blue-500 border-solid">60 days</span>
                    </div>

                    <div className="flex">
                        <img src={Chart1} alt="chart" />
                    </div>

                    <div className="mt-10">
                        <a className="text-[#5B5FC7] tracking-[1px] text-[14px] decoration-none" href="#">View details</a>
                    </div>
                    
                </div>

                <div className="p-[12px] w-[281px] h-[420px] shadow-sm shadow-slate-300 rounded-lg">
                    <div className="flex flex-row justify-between w-full items-center">
                        <div className="flex flex-col justify-center gap-y-1 items-start">
                            <h3 className="text-[18px] font-bold">Card Title</h3>
                            <p className="text-[12px]">Description</p>
                        </div>
                        <div>
                            <i><FaEllipsis/></i>
                        </div>
                    </div>

                    <div className="flex mb-0">
                        <img src={Chart2} alt="chart" />
                    </div>

                    <div className="mt-10">
                        <a className="text-[#5B5FC7] tracking-[1px] text-[14px] decoration-none" href="#">View details</a>
                    </div>
                    
                </div>

                <div className="hidden md:block p-[12px] w-[500px] h-[420px] shadow-sm shadow-slate-300 rounded-lg">
                    <div className="flex flex-row justify-between w-full items-center">
                        <div className="flex flex-col justify-center gap-y-1 items-start">
                            <h3 className="text-[18px] font-bold">Card 3</h3>
                            <p className="text-[12px]">Description</p>
                        </div>
                        <div>
                            <i><FaEllipsis/></i>
                        </div>
                    </div>

                    <div className="flex flex-row justify-start items-center gap-x-5 mt-2">
                        <span className="px-1 py-1 hover:border-b-[3px] border-blue-500 border-solid">7 days</span>
                        <span className="px-1 py-1 hover:border-b-[3px] border-blue-500 border-solid">30 days</span>
                        <span className="px-1 py-1 hover:border-b-[3px] border-blue-500 border-solid">60 days</span>
                    </div>

                    <div className="flex mb-0">
                        <img src={Chart3} alt="chart" />
                    </div>

                    <div className="mt-10">
                        <a className="text-[#5B5FC7] tracking-[1px] text-[14px] decoration-none" href="#">View details</a>
                    </div>
                    
                </div>

                

            </div>
            <div className=" gap-y-1 flex flex-col md:flex-row justify-around items-center w-full translate-y-[-40px] mt-10 md:mt-auto md:ml-4 md:gap-x-2">
                <div className="p-[12px] w-[281px] h-[420px] shadow-sm shadow-slate-300 rounded-lg">
                    <div className="flex flex-row justify-between w-full items-center">
                        <div className="flex flex-col justify-center gap-y-1 items-start">
                            <h3 className="text-[18px] font-bold">Card Title</h3>
                            <p className="text-[12px]">Description</p>
                        </div>
                        <div>
                            <i><FaEllipsis/></i>
                        </div>
                    </div>

                    <div className="flex flex-row justify-start items-center gap-x-5 mt-3">
                        <span className="px-1 py-1 hover:border-b-[3px] border-blue-500 border-solid">7 days</span>
                        <span className="px-1 py-1 hover:border-b-[3px] border-blue-500 border-solid">30 days</span>
                        <span className="px-1 py-1 hover:border-b-[3px] border-blue-500 border-solid">60 days</span>
                    </div>

                    <div className="flex">
                        <img src={Chart6} alt="chart" />
                    </div>

                    <div className="mt-10">
                        <a className="text-[#5B5FC7] tracking-[1px] text-[14px] decoration-none" href="#">View details</a>
                    </div>
                    
                </div>

                <div className="p-[12px] w-[281px] h-[420px] shadow-sm shadow-slate-300 rounded-lg">
                    <div className="flex flex-row justify-between w-full items-center">
                        <div className="flex flex-col justify-center gap-y-1 items-start">
                            <h3 className="text-[18px] font-bold">Card Title</h3>
                            <p className="text-[12px]">Description</p>
                        </div>
                        <div>
                            <i><FaEllipsis/></i>
                        </div>
                    </div>

                    <div className="flex mt-5 mb-0">
                        <img src={Chart5} alt="chart" />
                    </div>

                    <div className="mt-20">
                        <a className="text-[#5B5FC7] tracking-[1px] text-[14px] decoration-none" href="#">View details</a>
                    </div>
                    
                </div>

                <div className="hidden md:block p-[12px] w-[500px] h-[420px] shadow-sm shadow-slate-300 rounded-lg">
                    <div className="flex flex-row justify-between w-full items-center">
                        <div className="flex flex-col justify-center gap-y-1 items-start">
                            <h3 className="text-[18px] font-bold">Card 6</h3>
                            <p className="text-[12px]">Description</p>
                        </div>
                        <div>
                            <i><FaEllipsis/></i>
                        </div>
                    </div>

                    <div className="flex flex-row justify-start items-center gap-x-5 mt-1">
                        <span className="px-1 py-1 hover:border-b-[3px] border-blue-500 border-solid">first tab</span>
                        <span className="px-1 py-1 hover:border-b-[3px] border-blue-500 border-solid">second tab</span>
                        <span className="px-1 py-1 hover:border-b-[3px] border-blue-500 border-solid">third tab</span>
                    </div>

                    <div className="flex mb-0">
                        <img src={Frame1321316017} alt="chart" />
                    </div>

                    <div className="">
                        <a className="text-[#5B5FC7] tracking-[1px] text-[14px] decoration-none" href="#">View details</a>
                    </div>
                    
                </div>

                

            </div>

            
        </div>
    )
}