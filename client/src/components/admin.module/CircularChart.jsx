import { Margin } from '@mui/icons-material';
import React from 'react';
import { Pie,Doughnut } from 'react-chartjs-2';
import styles from '../../styles/Admin.module.scss'
const CircularChart = () => {
  // Data for the chart
  const data = {
    labels: ['New Users', 'New Stores', 'New Wholesalers'],
    datasets: [
      {
        data: [30, 40, 20],
        backgroundColor: ['rgb(0, 255, 202)', 'rgb(5, 191, 219)', 'rgb(10, 77, 104)'], // Colors for the slices
        radius: '80%',
        innerRadius: '90%', 
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        Align: 'end'
      },
    },
    cutoutPercentage: 70,
    borderWidth: 0,
    responsive: true,
  };

  return (
    <div>
      <Doughnut data={data} options={options} /> {/* Use Pie or Doughnut component */}
    </div>
  );
};

export default CircularChart;