import React from "react";
import { FaBars } from "react-icons/fa";
 export default function Toolbar(){
    
    return (
        <div className=" hidden md:flex p-[8px_16px_8px_16px]  flex-row justify-between items-center border-b-[1px] border-t-[1px] border-slate-300 border-solid">
            <div className="flex flex-row justify-start items-center">
                <div className="flex flex-row justify-start items-center gap-x-1 ">
                    <i className=" text-[30px]"><FaBars /></i>
                    <div className=" flex justify-center items-center text-[16px] font-bold w-[93px] h-[32px] rounded-[4px] bg-purple-400 text-white  ">text</div>
                    <div className=" flex justify-center items-center text-[16px] font-bold w-[93px] h-[32px] rounded-[4px] bg-white active:bg-purple-400 active:text-white text-black ">text</div>
                    <div className=" flex justify-center items-center text-[16px] font-bold w-[93px] h-[32px] rounded-[4px] bg-white active:bg-purple-400 active:text-white text-black ">text</div>
                    <span>|</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-x-5 ">
                    <div className=" flex justify-center items-center text-[16px] font-bold w-[93px] h-[32px] rounded-[4px] bg-white active:bg-purple-400 active:text-white text-black ">text</div>
                    <div className=" flex justify-center items-center text-[16px] font-bold w-[93px] h-[32px] rounded-[4px] bg-white active:bg-purple-400 active:text-white text-black ">text</div>
                    <div className=" flex justify-center items-center text-[16px] font-bold w-[93px] h-[32px] rounded-[4px] bg-white active:bg-purple-400 active:text-white text-black ">text</div>
                    <span>|</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-x-5 ">
                    <div className=" flex justify-center items-center text-[16px] font-bold w-[93px] h-[32px] rounded-[4px] bg-white active:bg-purple-400 active:text-white text-black ">text</div>
                    <div className=" flex justify-center items-center text-[16px] font-bold w-[93px] h-[32px] rounded-[4px] bg-white active:bg-purple-400 active:text-white text-black ">text</div>
                </div>
            </div>
            <div className=" flex flex-row gap-x-5 justify-center items-center">
                <span className="text-[14px]">Filter</span>
                <input placeholder="find" className="bg-white px-2 py-1 border border-1 border-slate-400 border-solid outline-none rounded-lg" type="text" />
            </div>
        </div>
    )
  
 }