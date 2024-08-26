import React , { createContext, useState } from 'react';
import Todolist from './App';

export const taskContext = createContext({
    taskitem : [],
    setTaskitem : ()=>{}
})