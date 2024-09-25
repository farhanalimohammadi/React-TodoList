import React , { useState } from "react";

export default function List(){
    const [showOptions, setShowOptions] = useState(false);
    const [openOption, setOpenOption] = useState(null);
  
    const handleOptionClick = (option) => {
      setOpenOption(option === openOption ? null : option); // Toggle option
    };
    return (
        <div className=" hidden md:block w-[195px] py-1 h-[100%] border-r-[1px] border-slate-200 border-solid ">
          {/* Group Title */}
          <div>
            <button
              className=" text-gray-700 py-2 px-2 rounded-md w-[183px] text-left hover:bg-gray-300"
              onClick={() => setShowOptions(!showOptions)}
            >
              Group Title
            </button>
          </div>
    
          {/* Options */}
          {showOptions && (
            <div className="mt-2 space-y-2">
              <div>
                <button
                  className=" text-gray-700 py-2 px-4 rounded-md w-[183px] text-left hover:bg-gray-200"
                  onClick={() => handleOptionClick("option1")}
                >
                  Option 1
                </button>
    
                {/* Items for Option 1 */}
                {openOption === "option1" && (
                  <div className=" flex flex-col justify-around gap-y-1 items-center mt-2 space-y-2 ml-4">
                    <button className=" text-gray-600 py-1 px-4 w-[183px] text-left hover:bg-gray-100">
                      Item 1
                    </button>
                    <button className=" text-gray-600 py-1 px-4 w-[183px] text-left hover:bg-gray-100">
                      Item 2
                    </button>
                    <button className=" text-gray-600 py-1 px-4 w-[183px] text-left hover:bg-gray-100">
                      Item 3
                    </button>
                    <button className=" text-gray-600 py-1 px-4 w-[183px] text-left hover:bg-gray-100">
                      Item 4
                    </button>
                  </div>
                )}
              </div>
    
              <div>
                <button
                  className=" text-gray-700 py-2 px-4 rounded-md w-[183px] text-left hover:bg-gray-200"
                  onClick={() => handleOptionClick("option2")}
                >
                  Option 2
                </button>
    
                {/* Items for Option 2 */}
                {openOption === "option2" && (
                  <div className=" flex flex-col justify-around gap-y-1 items-center mt-2 space-y-2 ml-4">
                    <button className=" text-gray-600 py-1 px-4 w-[183px] text-left hover:bg-gray-100">
                      Item 5
                    </button>
                    <button className=" text-gray-600 py-1 px-4 w-[183px] text-left hover:bg-gray-100">
                      Item 6
                    </button>
                    <button className=" text-gray-600 py-1 px-4 w-[183px] text-left hover:bg-gray-100">
                      Item 7
                    </button>
                    <button className=" text-gray-600 py-1 px-4 w-[183px] text-left hover:bg-gray-100">
                      Item 8
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      );
}