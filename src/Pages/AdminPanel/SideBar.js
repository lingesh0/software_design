import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedAdmin, setSelectedWorkspace } from '../../Store/actions';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import '../../Styles/AdminPanel/SideBar.css';
import accountAdminList from '../../SampleJson/accountAdminList.json';
import workspacesList from '../../SampleJson/workspacesList.json';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Button } from '@mui/material';
import Logout from '@mui/icons-material/Logout';

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useHistory for navigation

  const handleAdminClick = (admin) => {
    dispatch(setSelectedAdmin(admin));
  };

  const handleWorkspaceClick = (workspace) => {
    dispatch(setSelectedWorkspace(workspace));
  };

  const handleLogoutClick = () => {
    navigate('/register'); // Navigate to the '/register' route
  };

  return (
    <div className='sideBar'>
      <div className='s-content'>
        <div className='s-content-u'>
          <div className='s-header'><h4>Account administration</h4></div>
          {accountAdminList.map((adminlist) => (
            <Button
              key={adminlist.content}
              className='s-subhead'
              variant="outlined"
              sx={{
                margin: '7px',
                fontSize: '12px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                border: 'none',
                color: 'black',
                backgroundColor: 'transparent',
                '&:hover': {
                  fontSize: '12px',
                  justifyContent: 'flex-start',
                  border: 'blue',
                  color: 'black',
                  backgroundColor: 'transparent',
                },
                '&:focus': {
                  margin: '7px',
                  alignItems: 'center',
                  fontSize: '12px',
                  justifyContent: 'flex-start',
                  border: '2px solid blue',
                  color: 'black',
                  backgroundColor: 'rgb(148, 190, 253)',
                },
              }}
              onClick={() => handleAdminClick(adminlist.content)}
            >
              <AccountCircleIcon /><span className='workspaceName'>{adminlist.content}</span>
            </Button>
          ))}
          <br />
          <div className='s-header'><h4>Workspaces</h4></div>
          {workspacesList.map((workspacelist) => (
            <Button
              key={workspacelist.name}
              className='s-subhead'
              variant='outlined'
              sx={{
                margin: '7px',
                alignItems: 'center',
                fontSize: '12px',
                justifyContent: 'flex-start',
                border: 'none',
                color: 'black',
                backgroundColor: 'transparent',
                '&:hover': {
                  fontSize: '12px',
                  justifyContent: 'flex-start',
                  border: 'blue',
                  color: 'black',
                  backgroundColor: 'transparent',
                },
                '&:focus': {
                  margin: '7px',
                  alignItems: 'center',
                  fontSize: '12px',
                  justifyContent: 'flex-start',
                  border: '2px solid blue',
                  color: 'black',
                  backgroundColor: 'rgb(148, 190, 253)',
                },
              }}
              onClick={() => handleWorkspaceClick(workspacelist.name)}
            >
              <SupervisedUserCircleIcon /><span className='workspaceName'>{workspacelist.name}</span>
            </Button>
          ))}
          <br />
        </div>
        <div className='logout-btn'>
          <Button
            variant='outlined'
            sx={{
              margin: '7px',
              alignItems: 'center',
              fontSize: '12px',
              justifyContent: 'flex-start',
              border: 'none',
              color: 'black',
              backgroundColor: 'transparent',
              '&:hover': {
                fontFamily:'satoshi-bold',
                fontSize: '12px',
                justifyContent: 'flex-start',
                border: 'blue',
                color: 'black',
                backgroundColor: 'transparent',
              },
              '&:focus': {
                fontFamily:'satoshi-bold',
                margin: '7px',
                alignItems: 'center',
                fontSize: '12px',
                justifyContent: 'flex-start',
                border: '2px solid blue',
                color: 'black',
                backgroundColor: 'rgb(148, 190, 253)',
              },
            }}
            onClick={handleLogoutClick}
          >
            <Logout />Logout??
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
