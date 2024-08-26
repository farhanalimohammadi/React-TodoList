import logo from './logo.svg';
import './index.css';
import React , { useContext, useState } from 'react';
import { HiArchiveBoxXMark , HiCheckCircle , HiMiniXCircle } from "react-icons/hi2";
import Form from './Form';
import Todos from './Todos';
import { taskContext } from './taskContext';

export default function Todolist() {

    const [taskitem , setTaskitem] = useState([
    ])

    return (
        <div className='w-[100vw] h-[100vh] bg-black py-10 selection:bg-[#00FFFF] selection:text-black'>
            <div className='flex flex-col p-10 rounded-[15px] w-[700px] mr-auto ml-auto bg-[#000] border-solid border-[2px] border-[#00FFFF]
            justify-between items-center gap-y-10 text-white shadow-lg shadow-[#00FFFF] '>
                <h2>Todolist</h2>
                <taskContext.Provider value={{
                    taskitem,
                    setTaskitem
                }}>
                    <Form/>
                    <Todos/>    
                </taskContext.Provider>         
            </div>
        </div>
    )
}





