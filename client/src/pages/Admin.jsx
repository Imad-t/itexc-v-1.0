import React from 'react';
import Sidebar from '../components/admin.module/AdminSideBar';
import styles from '../styles/Admin.module.scss'
import Dashboard from '../components/admin.module/AdminDashboard'
import UsersManagement from '../components/admin.module/UsersManagement'
import { useState } from 'react';
const Admin = () => {
    const [selectedComponent, setSelectedComponent]= useState('Dashboard')
    const handleSideBar=(selectedComponent)=>{
        setSelectedComponent(selectedComponent)
    }
    console.log(selectedComponent)
  return (
    <>
    <div className={styles["admin-container"]}>
    <div><Sidebar onSideBar={handleSideBar}/></div>
    <div className={styles['contents']}>
          {/* Rendered component based on selected item */}
      {selectedComponent === 'Dashboard'&& <Dashboard/> }
      {selectedComponent === 'UsersManagement' && <UsersManagement/>}
      {selectedComponent === 'component3' }
    </div>
    </div>
    </>
  );
};

export default Admin;
