// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
// import { Doughnut, Line } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

// // Donut chart data and configuration
// export const DonutChart = () => {
//   const donutData = {
//     labels: [
//       'Risk averse, uncertainty averse',
//       'Risk seeking, uncertainty averse',
//       'Risk averse, uncertainty seeking',
//       'Risk seeking, uncertainty seeking',
//     ],
//     datasets: [
//       {
//         data: [139, 127, 168, 13],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//       },
//     ],
//   };

//   const donutOptions = {
//     cutout: '60%',
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'bottom',
//       },
//     },
//   };

//   return <Doughnut data={donutData} options={donutOptions} />;
// };

// // Line chart data and configuration
// export const LineChart = () => {
//   const lineData = {
//     labels: Array.from({ length: 30 }, (_, i) => i.toString()),
//     datasets: [
//       {
//         label: 'Desktop, Travel Micro-moments',
//         data: [0, 60, 33.33, 15.79, 35.29, 46.15, 50, 30.77, 21.43, 15.38, 15.79, 42.86, 0, 38.46, 50, 60, 20, 10, 11.54, 50, 25, 31.58, 0, 20, 0, 0, 100, 33.33, 0, 0],
//         borderColor: '#FF6384',
//         fill: false,
//       },
//       {
//         label: 'Desktop, Travel Pageviews',
//         data: [0, 29.49, 16.48, 1.48, 28.32, 27.04, 6.63, 5.16, 6.23, 2.82, 2.07, 39.87, 0, 8.91, 8.97, 12.22, 10.69, 4.81, 1.78, 12.23, 33.27, 3.67, 0, 25.92, 0, 0, 20.25, 27.98, 0, 0],
//         borderColor: '#36A2EB',
//         fill: false,
//       },
//       // Additional datasets...
//     ],
//   };

//   const lineOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'bottom',
//       },
//       tooltip: {
//         mode: 'index',
//         intersect: false,
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Week',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Percentage of travel-related activity (%)',
//         },
//       },
//     },
//   };

//   return <Line data={lineData} options={lineOptions} />;
// };


"use client";

import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const DonutLineChart = () => {
  // Donut chart data and configuration
  const donutData = {
    labels: [
      'Risk averse, uncertainty averse',
      'Risk seeking, uncertainty averse',
      'Risk averse, uncertainty seeking',
      'Risk seeking, uncertainty seeking',
    ],
    datasets: [
      {
        data: [139, 127, 168, 13],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const donutOptions = {
    cutout: '60%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  // Line chart data and configuration
  const lineData = {
    labels: Array.from({ length: 30 }, (_, i) => i.toString()),
    datasets: [
      {
        label: 'Desktop, Travel Micro-moments',
        data: [
          0, 60, 33.33, 15.79, 35.29, 46.15, 50, 30.77, 21.43, 15.38, 15.79, 42.86, 0, 38.46, 50, 60, 20, 10, 11.54, 50, 25, 31.58, 0, 20, 0, 0, 100, 33.33, 0, 0,
        ],
        borderColor: '#FF6384',
        fill: false,
      },
      {
        label: 'Desktop, Travel Pageviews',
        data: [
          0, 29.49, 16.48, 1.48, 28.32, 27.04, 6.63, 5.16, 6.23, 2.82, 2.07, 39.87, 0, 8.91, 8.97, 12.22, 10.69, 4.81, 1.78, 12.23, 33.27, 3.67, 0, 25.92, 0, 0, 20.25, 27.98, 0, 0,
        ],
        borderColor: '#36A2EB',
        fill: false,
      },
      // Additional datasets...
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Week',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Percentage of travel-related activity (%)',
        },
      },
    },
  };

  return (
    <div>
      <h2>Donut Chart</h2>
      <Doughnut data={donutData} options={donutOptions} />

      <h2>Line Chart</h2>
      <Line data={lineData} options={lineOptions} />
    </div>
  );
};

export default DonutLineChart;
