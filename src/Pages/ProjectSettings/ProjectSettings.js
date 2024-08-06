import React from 'react'
import { useState } from 'react';
import '../../Styles/ProjectSettings/ProjectSettings.css';
import Sidebar from '../Common/Sidebar';
import LowerNavbar from '../Common/LowerNavbar';
import Settings from '../Projects/Settings';
import Summary from '../Projects/Summary';
import Boards from '../Projects/Boards';
import ListPage from '../Projects/ListPage';
 
const ProjectSettings = () => {

    const [ projName, setProjName ] = useState('Sample Project 1'); 
    const [ projKey, setProjKey ] = useState('GSAD');
    const [ projDesc, setProjDesc ] = useState('Sample Project 1 sdfhj  sh fg kjhsgjhgjf shkhjgjh kj');
    const [ projLead, setProjLead ] = useState('Sample Lead 1');

  return (  
    <div className='project-setting-main'> 
        <div className='dummy-navbar'> </div> 
        <div className='projectt-settings'>
            <div className='project-setting-sidebar'>
                <Sidebar/>
            </div>
            <div className='project-setting-rside'>
                <LowerNavbar/>  
                {/* rside upper part is the above code */}
                <div className='project-setting-rside-l'>
                    
                        {/* <Settings/> */}
                        {/* <Summary/>  */}
                        {/* <Boards/>  */}
                        {/* <ListPage/> */}
                        {/* <PieChartComponent/> */} 
                    
                </div>
            </div>
        </div>  
    </div>
  )
}

export default ProjectSettings;