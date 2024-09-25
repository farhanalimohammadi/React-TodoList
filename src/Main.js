import React from 'react';
import './index.css';
import Tabs from './stak/TabsStak';
import Appheader from './Headers/Main-Header';
import Toolbar from './Headers/ToolBar';
import List from './Headers/TreeList';
import Mobileheader from './Headers/mobail-Tool';
import Charts from './body/charts';

export default function Mainpeg(){
    return(
        <div className='flex flex-row h-screen w-screen overflow-x-hidden'>
            <div>
                <div>
                    {/* Tabs-stak */}
                    <Tabs/>
                </div>
            </div>
            <div className=' flex flex-col w-full'>
                <div className='flex flex-col'>
                    {/* App header */}
                    <Appheader/>
                    <Mobileheader/>
                    {/* Toolbar */}
                    <Toolbar/>
                </div>

                <div className='flex flex-col md:flex-row w-full h-full'>
                    <List/>
                    <Charts/>
                </div>
            </div>
        </div>
    )
}