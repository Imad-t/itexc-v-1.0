import React from 'react'
import styles from '../../styles/AdminDashboard.module.scss'
import DataContainer from './DataContainer'
import Chart from 'chart.js';import {usersData} from '../../data/adminData'
import { storeData } from '../../data/adminData'
import {wholesaleData} from '../../data/adminData'
import ChartComponent from './ChartComponent';
import CircularChart from './CircularChart';
import UsersTable from './UsersTable';
import RecentUsersTable from './RecentUsersTable';
function AdminDashboard() {
    const overView=[
        {
            dataName:"Users Amount",
            Value:usersData.length,
            details:'0',
            
        },
        {
            dataName:"Store Amount",
            Value:storeData.length,
            details:'10',
            
        },
        {
            dataName:"WholeSalers ",
            Value:wholesaleData.length,
            details:'-20',
            
        }

    ]        


  return (
    <div className={styles["dashboard-container"]}>
            <div >
                <h1 style={{fontSize:"20px"}}>Overview</h1>
                <div className={styles['overview']}>
                    {overView.map((data)=>{
                    return( <div className={styles["overview-data"]}>
                            <div className={styles['overview-details']}>
                            <h2 className={styles['overview-details-name']}>{data.dataName}</h2>
                            <h2>{data.Value}</h2>
                            </div>
                            <div className={styles['overview-moreDetails']}>
                            <h3 className={parseInt(data.details) < 0 ? styles["down"] : styles["up"]}>{data.details}%</h3>
                            </div>                          
                       </div>)
                        
                    })}
                </div>
            </div>
            <div className={styles['admin-dashboard']}>
            <div className={styles['content-left']}>
            <div>
            <ChartComponent/>
            </div>
            <div>
            <h1 style={{fontSize:"20px"}}>Recent Users</h1>
            <RecentUsersTable></RecentUsersTable>
            </div>
            </div>
            <div className={styles['content-right']}>
                <CircularChart></CircularChart>
            </div>
            </div>
    </div>
  )
}


export default AdminDashboard