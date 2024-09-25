import React, { useDebugValue } from "react";

export default function Mobileheader(){
    return(
        <div className=" md:hidden flex flex-row justify-around w-full items-center h-[44px]">
            <div className="border-b-[1px] border-slate-200 border-solid w-full hover:border-blue-500 flex justify-center items-center  ">
                <span className="text-[15px]">Tab 1</span>
            </div>
            <div className="border-b-[1px] border-slate-200 border-solid w-full hover:border-blue-500 flex justify-center items-center  ">
                <span className="text-[15px]">Tab 2</span>
            </div>
            <div className="border-b-[1px] border-slate-200 border-solid w-full hover:border-blue-500 flex justify-center items-center  ">
                <span className="text-[15px]">Tab 3</span>
            </div>
        </div>
    )
}