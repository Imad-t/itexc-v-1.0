import React, { useState } from 'react';
import styles from '../../styles/AdminSideBar.module.scss'
import { Dashboard } from '@mui/icons-material';

const Sidebar = ({onSideBar}) => {
  const contents=[
    {
      name: 'Dashboard',
      componentName: 'Dashboard'
    },
    {
      name: 'Users-Table',
      componentName:'UsersManagement'
    }
  ];
 const [selectedComponent, setSelectedComponent] = useState('Dashboard');
 const Username="example"
  const handleItemClick = (componentName) => {
    setSelectedComponent(componentName);
    onSideBar(componentName);
  };

  return (
      <div className={styles["sidebar-container"]}>
      {/* Sidebar navigation */}
      <div className={styles["user"]}>
        <h2>Hi! {Username}</h2>
        <h3>{Username}@Email.com</h3>
      </div>
      
      <ul>
      {contents?.map((component,index)=>{
         return(<li className={component.componentName === selectedComponent ?styles['active']:styles[""]} key={index} onClick={() => handleItemClick(component.componentName)}>{component.name}</li>)
        })}

      </ul>
    <div className={styles["action"]}>
    <h2>
      Sign Out
    </h2>
    </div>

    </div>
  );
};

export default Sidebar;
