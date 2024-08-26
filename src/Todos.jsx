import React, { useContext } from 'react';
import { HiArchiveBoxXMark, HiCheckCircle, HiMiniXCircle } from "react-icons/hi2"; 
import { taskContext } from './taskContext';

const Todos = () => {
    const { taskitem , setTaskitem } = useContext(taskContext);

    function dontDOHandle(id){
        const index = taskitem.findIndex(t=>t.id === id);
        let newTaskItem = [... taskitem]
        newTaskItem[index].done = false;
        setTaskitem(newTaskItem)
    }
    function doHandle(id){
        const index = taskitem.findIndex(t=>t.id === id);
        let newTaskItem = [... taskitem]
        newTaskItem[index].done = true;
        setTaskitem(newTaskItem)
    }
    function deleteHandle(id){
        let newTaskitem = taskitem.filter(t=>t.id !== id)
        setTaskitem(newTaskitem)
    }

    if(taskitem.length){
        return (
            <div className='flex flex-col gap-y-5'>
                {
                    taskitem.map((t) => (
                        <div key={t.id} className={`bg-slate-800 ${t.done ? "bg-[#4bff4b] text-black " : ""} w-[505px] rounded-lg px-3 py-3 flex flex-row justify-between items-center border-solid border-[2px] border-[#00FFFF]
                        hover:scale-x-[1.02] hover:shadow-[0px_0px_10px_#00FFFF] transition-all duration-500 ease-linear`}>
                            <h3 className='text-[25px]'>{t.title}</h3>
                            <div className='flex flex-row gap-x-2'>
                                {
                                    t.done ? (
                                        <i onClick={()=> dontDOHandle(t.id)} className='text-[28px] hover:text-[#ff0000] transition-all duration-500 ease-linear cursor-pointer'>
                                            <HiMiniXCircle />
                                        </i>
                                    )
                                     : (
                                        <i onClick={()=> doHandle(t.id)}  className='text-[28px] hover:text-[#00ff08] transition-all duration-500 ease-linear cursor-pointer'>
                                            <HiCheckCircle />
                                        </i>
                                     )
                                }
                                <i onClick={()=> deleteHandle(t.id)} className='text-[28px] hover:text-[#ff0000] transition-all duration-500 ease-linear cursor-pointer'>
                                    <HiArchiveBoxXMark />
                                </i>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }else{
        return(
            <h4 className='mt-10 bg-slate-800 p-5 text-[25px] text-[#f22] rounded-[10px] shadow-[0px_0px_10px_#00FFFF] border-solid border-[2px] border-[#00FFFF]'>
                Nothing has been Task added yet
            </h4>
        )
    }
}

export default Todos;