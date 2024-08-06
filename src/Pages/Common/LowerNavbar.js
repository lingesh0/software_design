import React from 'react'
import '../../Styles/ProjectSettings/ProjectSettings.css';
import projImg from '../../Assets/Images/logo.jpg';
import SettingsIcon from '@mui/icons-material/Settings';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useState } from 'react';
import { Button } from '@mui/material';

const LowerNavbar = () => {

    const [ projName, setProjName ] = useState('Sample Project 1');

    return (
        <div className='project-setting-rside-u'>
            <div className='setting-rside-u-u'>
                <div className='setting-rside-u-u-left'>
                    <div className='setting-rside-u-u-proj-img'><img src={projImg} alt='proj img' className='rside-u-u-proj-img'></img></div>
                    <div className='setting-rside-u-u-name'><h1>{projName}</h1></div>
                </div>
                <div className='setting-rside-u-u-right'>
                    <div className='setting-rside-u-u-proj-settings'>
                        <Button variant="contained" 
                            sx={{
                            width: '13rem',
                            height: '3.5rem',
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            color: 'white', // Text color to ensure readability
                            transition: 'background 1s ease',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                            },
                        }}><SettingsIcon/>Project Settings</Button>
                    </div>
                </div>
            </div>
            <div className='setting-rside-u-l'>
                <div className='setting-rside-u-l-btns'>
                    <Button variant='contained'
                    sx={{
                        width: '9rem',
                        height: '100%',
                        backgroundColor: 'white',
                        color: 'rgb(80, 80, 80)', // Text color to ensure readability
                        transition: 'background 1s ease',
                        borderRadius: '5px',
                        '&:hover': {
                            borderRadius: '5px',
                            backgroundColor: 'white',
                            borderBottom: '2px solid blue',
                        },
                    }}><SummarizeIcon/>Summary</Button>
                    <Button variant='contained'
                    sx={{
                        width: '9rem',
                        height: '100%',
                        backgroundColor: 'white',
                        color: 'black', // Text color to ensure readability
                        transition: 'background 1s ease',
                        borderRadius: '5px',
                        '&:hover': {
                            borderRadius: '5px',
                            backgroundColor: 'white',
                            borderBottom: '2px solid blue',
                        },
                    }}><DashboardIcon/>Board</Button>
                    <Button variant='contained'
                    sx={{
                        width: '9rem',
                        height: '100%',
                        backgroundColor: 'white',
                        color: 'black', // Text color to ensure readability
                        transition: 'background 1s ease',
                        borderRadius: '5px',
                        '&:hover': {
                            borderRadius: '5px',
                            backgroundColor: 'white',
                            borderBottom: '2px solid blue',
                        },
                    }}><FormatListBulletedIcon/>List</Button>
                </div>
            </div>
        </div>
    ) 
}   

export default LowerNavbar
