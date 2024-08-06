import React, { useState } from 'react'
import '../../Styles/Projects/Boards.css';
import lists from '../../SampleJson/Lists.json';
import { Button, IconButton, Menu, MenuItem, InputBase } from '@mui/material';
import Tasks from '../../SampleJson/HighestPriority.json';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Boards = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState('Sample Name');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRenameClick = () => {
    setIsRenaming(true);
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    handleMenuClose();
  };

  const handleRenameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleRenameSubmit = (event) => {
    if (event.key === 'Enter') {
      // Implement save logic here
      setIsRenaming(false);
      // Optionally update the listItem object
    }
  };

  return (
    <div className='boards-main'>
        {lists.map((listItem) => (
          <div className='boards-list-card'>
            <div className='list-card-u'>
                <div className='list-card-u-left'>
                    <div className='list-card-u-left-name'>
                      {isRenaming ? (
                          <InputBase
                            value={newName}
                            onChange={handleRenameChange}
                            onKeyDown={handleRenameSubmit}
                            placeholder={listItem.listaName}
                            className="rename-input"
                          />
                        ) : (
                          newName
                        )}
                      </div>
                    <div className='list-card-u-left-number'>4</div>
                </div>
                <div className='list-card-u-right'>
                  <IconButton
                    aria-label="more"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                  >
                    <MoreVertIcon/>
                  </IconButton>

                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={handleRenameClick}>
                        <EditIcon className="menu-icon" /> Rename
                      </MenuItem>
                      <MenuItem onClick={handleDeleteClick}>
                        <DeleteIcon className="menu-icon" /> Delete
                      </MenuItem>
                    </Menu>
                </div>
            </div>
            <div className='list-card-l'>
                {Tasks.map((item) => (
                <div className='list-card-l-card'>
                    <div className='list-card-l-card-name'>{item.taskName}</div>
                    <div className='list-card-l-card-desc'>{item.taskDesc}</div>
                    <div className='list-card-l-card-due'><CalendarMonthIcon/>{item.dueDate}</div>
                    <div className='list-card-l-card-key'>
                      <div className='list-card-l-card-key-left'>{item.taskKey}</div>
                      <div className='list-card-l-card-key-right'>{item.priority}</div>
                    </div>
                </div>
                ))} 
            </div>
          </div>
        ))}
    </div>
  )
}

export default Boards
