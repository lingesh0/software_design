import React from 'react'
import '../../Styles/Common/Sidebar.css';
import projects from '../../SampleJson/Projects.json';
import profilepic from '../../Assets/Images/logo.jpg';
import AddchartIcon from '@mui/icons-material/Addchart';

const Sidebar = () => {
  return (
    <div className='sidebar-main'>
        <div className='sidebar-content'>
            <div className='sidebar-u'>
              <div className='sidebar-u-label'><b>Projects</b></div>
              <div className='sidebar-u-plus-icon'><AddchartIcon sx={{ fontSize: 30 }}/></div>
            </div>
            <div className='sidebar-proj-list'>
                {projects.map((project) => (
                    <div className='sidebar-proj-list-card'>
                        <div className='sidebar-proj-list-card-icon'>
                            <img src={profilepic} alt='profile-pic' className='sidebar-proj-list-card-img'></img>
                        </div>
                        <div className='sidebar-proj-list-card-label'>{project.name}</div>
                    </div>
                ))}
            </div>
            <div className='sidebar-view'>
              <div className='sidebar-view-label'><b>View all projects</b></div>
            </div> 
        </div>
    </div>
  )
}  

export default Sidebar
