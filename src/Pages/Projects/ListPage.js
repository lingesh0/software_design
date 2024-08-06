import React, { useState } from 'react'
import '../../Styles/Projects/ListPage.css';
import { Checkbox, FormControlLabel } from '@mui/material';
import items from '../../SampleJson/HighestPriority.json';

const ListPage = () => {

    const [checkedItems, setCheckedItems] = useState(Array(items.length).fill(false));
    const [isAllChecked, setIsAllChecked] = useState(false);
  
    const handleSelectAllChange = (event) => {
      const isChecked = event.target.checked;
      setIsAllChecked(isChecked);
      setCheckedItems(Array(items.length).fill(isChecked));
    };
  
    const handleCheckboxChange = (index) => (event) => {
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index] = event.target.checked;
      setCheckedItems(newCheckedItems);
      setIsAllChecked(newCheckedItems.every((item) => item));
    };

  return (
    <div className='list-page-main'>
      <div className='list-page-list'>
        <div className='list-header'>
            <div className='list-header-checkbox'>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isAllChecked}
                      onChange={handleSelectAllChange}
                      color="primary"
                    />
                  }
                />
            </div>
            <div className='list-header-key'></div>
            <div className='list-header-summary'></div>
            <div className='list-header-status'></div>
            <div className='list-header-assignee'></div>
            <div className='list-header-duedate'></div>
            <div className='list-header-priority'></div>
            <div className='list-header-created'></div>
        </div>
        <div className='list-content'>
            {items.map((item, index) => (
                <div
                key={item.id}
                className={`list-content-card item-row ${checkedItems[index] ? 'item-row-checked' : ''}`}>
                    <div className='list-item-checkbox'>
                        <Checkbox
                          checked={checkedItems[index]}
                          onChange={handleCheckboxChange(index)}
                          color="primary"
                        />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ListPage
