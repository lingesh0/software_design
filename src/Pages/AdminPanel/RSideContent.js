import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../Styles/AdminPanel/RSideContent.css';
import { Button, TextField, Pagination } from '@mui/material';
import profilePic from '../../Assets/Images/logo.jpg';
import enterpriseMembers from '../../SampleJson/enterpriseMembers.json';
import freeManagedAccounts from '../../SampleJson/freeManagedAccounts.json';
import boardGuests from '../../SampleJson/boardGuests.json';
import enterpriseWorkspaces from '../../SampleJson/enterpriseWorkspaces.json';
import nonEnterpriseList from '../../SampleJson/nonEnterpriseList.json';
import pending from '../../SampleJson/pending.json';

const RSideContent = () => {
  const selectedAdmin = useSelector((state) => state.selectedAdmin);
  const selectedWorkspace = useSelector((state) => state.selectedWorkspace);
  const [workspaceAdmins, setWorkspaceAdmins] = useState([]);
  const [workspaceData, setWorkspaceData] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    switch (selectedAdmin) {
      case 'Enterprise Members':
        setWorkspaceAdmins(enterpriseMembers);
        break;
      case 'Free Managed Accounts':
        setWorkspaceAdmins(freeManagedAccounts);
        break;
      case 'Board Guests':
        setWorkspaceAdmins(boardGuests);
        break;
      default:
        setWorkspaceAdmins([]);
    }
  }, [selectedAdmin]);

  useEffect(() => {
    switch (selectedWorkspace) {
      case 'Enterprise Workspaces':
        setWorkspaceData(enterpriseWorkspaces);
        break;
      case 'Non-Enterprise Workspaces':
        setWorkspaceData(nonEnterpriseList);
        break;
      case 'Pending':
        setWorkspaceData(pending);
        break;
      default:
        setWorkspaceData([]);
    }
  }, [selectedWorkspace]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedAdmins = workspaceAdmins.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const paginatedWorkspaces = workspaceData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className='rSideContent'>
      <div className='rSide-c'>
        <div className='rSide-content-allow'>
        {selectedAdmin ? (
          <>
            <div className='rSide-u'>
              <div className='rSide-u-l'>
                <div className='rSide-u-l-u'><b>Members </b></div>
                <div className='rSide-u-l-b'>Members are billable accounts ..............</div>
              </div>
              <div className='rSide-u-r'>
                <div className='rSide-u-r-l'>
                  <Button variant="outlined"
                    sx={{
                      border: '2px solid black',
                      color: 'black',
                      backgroundColor: 'transparent',
                      '&:hover': {
                        border: '2px solid black',
                        backgroundColor: 'gray',
                      },
                      '&:focus': {
                        border: '2px solid blue',
                        color: 'blue',
                        backgroundColor: 'darkgray',
                      },
                    }}>Export</Button>
                </div>
                <div className='rSide-u-r-r'>
                  <TextField id="filled-basic" label="Filled" variant="filled" />
                </div>
              </div>
            </div>
            <div className='rSide-b'>
              {paginatedAdmins.map((workspaceAdmin, index) => (
                <div key={index} className='rSide-b-card'>
                  <div className='rSide-b-card-l'>
                    <div className='rSide-b-card-l-image'>
                      <img src={profilePic} alt="profile-pic" className='profile-pic'></img>
                    </div>
                    <div className='rSide-b-card-l-content'>
                      <b className='rSide-b-card-l-content-name'>{workspaceAdmin.name}</b>
                      @{workspaceAdmin.nameDesc}
                    </div>
                  </div>
                  <div className='rSide-b-card-r'>
                    <div className='designation'><p>{workspaceAdmin.designation}</p></div>
                    <div className='lastActive'><p>Active on {workspaceAdmin.lastActive}</p></div>
                    <div className='activeInNWorkspaces'><p>Active in {workspaceAdmin.workspacesActive} Workspaces</p></div>
                    <Button variant='outlined'
                      sx={{
                        border: '2px solid black',
                        color: 'black',
                        backgroundColor: 'transparent',
                        '&:hover': {
                          border: '2px solid black',
                          backgroundColor: 'gray',
                        },
                        '&:focus': {
                          border: '2px solid blue',
                          color: 'blue',
                          backgroundColor: 'darkgray',
                        },
                      }}>Edit</Button>
                    <Button variant='outlined'
                      sx={{
                        border: '2px solid black',
                        color: 'black',
                        backgroundColor: 'transparent',
                        '&:hover': {
                          border: '2px solid black',
                          backgroundColor: 'gray',
                        },
                        '&:focus': {
                          border: '2px solid blue',
                          color: 'blue',
                          backgroundColor: 'darkgray',
                        },
                      }}>Remove</Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className='w-u-content'>
              <div className='w-u-content-q'><b>Teams</b></div>
              <TextField id="filled-basic" label="Filled" variant="filled" />
            </div>
            <div className='w-b-content'>
              {paginatedWorkspaces.map((workspace, index) => (
                <div key={index} className='w-b-card'>
                  <div className='w-b-card-image'>
                    <img src={profilePic} alt="profile-pic" className='profile-pic'></img>
                    <div className='w-b-card-name'>{workspace.name}</div>
                  </div>
                  <div className='w-b-card-members'>Members: Active {workspace.active}, Deactivated {workspace.deactivated}</div>
                </div>
              ))}
            </div>
          </>
        )}
        </div>
        <Pagination
          count={Math.ceil(selectedAdmin ? workspaceAdmins.length / itemsPerPage : workspaceData.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          className="pagination"
        />
      </div>
    </div>
  );
};

export default RSideContent;
