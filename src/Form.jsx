import './index.css';
import React, { useContext, useState } from 'react';
import { taskContext } from './taskContext';

export default function Form() {
    const [task, settask] = useState("");
    const { taskitem, setTaskitem } = useContext(taskContext);

    function typeHandler(event) {
        settask(event.target.value);
    }

    function addHandler(event) {
        event.preventDefault(); 
        if(task === ""){
            alert("please enter a task name ")
        }else{
            setTaskitem([...taskitem, { id: taskitem.length + 1, title: task, done: false }]); 
        }
        settask(""); 
    }

    return (
        <div className='form w-[100%] flex flex-row justify-center items-center '>
            <form className='flex flex-row gap-x-1' onSubmit={addHandler}>
                <input 
                    placeholder='enter a name for task'
                    onChange={typeHandler} 
                    value={task} 
                    className='input-box w-[400px] bg-slate-800 px-5 text-[25px] py-3 text-white rounded-l-[10px] border-solid border-[#00FFFF] border-[2px]
                    outline-none focus:shadow-[0px_0px_10px_#00FFFF] focus:scale-x-[1.01] transition-all duration-500 ease-linear'>
                </input>
                <button 
                    type='submit' 
                    className='btn bg-slate-800 text-white text-[25px] px-7 py-3 rounded-r-[10px] border-solid border-[#00FFFF] border-[2px] outline-none
                    hover:shadow-[0px_0px_10px_#00FFFF] hover:scale-[1.02] transition-all duration-500 ease-linear'>
                    add
                </button>
            </form>
        </div>
    );
}