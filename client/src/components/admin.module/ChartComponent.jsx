import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js'; // Import necessary objects from 'chart.js'
import { Padding } from '@mui/icons-material';
import styles from '../../styles/Admin.module.scss'
// Register necessary chart types
Chart.register(...registerables);

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Array of data for each month
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','augest'],
      datasets: [{
        label: 'New Users',
        data: [10, 15, 13, 17, 21, 19, 22,28],
        backgroundColor: 'rgb(0, 255, 202)', // Bar color
      }, {
        label: 'New Stores',
        data: [7, 12, 10, 14, 18, 16, 19,5],
        backgroundColor: 'rgb(5, 191, 219)', // Bar color
      }, {
        label: 'New Wholesalers',
        data: [5, 10, 8, 12, 16, 14, 17,9],
        backgroundColor: 'rgb(10, 77, 104)', // Bar color
      }]
    };

    // Create a bar chart
    const chart = new Chart(chartRef.current, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
          responsive: true,
          barThickness: 10, // Set the width of the bars
          barPercentage: 0.8, // Set the percentage of the bar width
          categoryPercentage: 0.8, // Set the percentage of the category width
        
      }
    });

    // Cleanup chart instance on unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
