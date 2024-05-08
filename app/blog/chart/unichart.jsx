"use client";


// components/UniversalChart.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const UniChart = ({ type, options, data }) => {
  // Render the Chart component from react-chartjs-2
  return (
    <div className="relative max-w-4xl max-h-96 overflow-visible">
  
        <Chart type={type} options={options} data={data} />
        <br/>

    </div>
    

  );
};

export default UniChart;
