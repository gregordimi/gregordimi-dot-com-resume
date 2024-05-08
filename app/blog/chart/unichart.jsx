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
import { Chart, Doughnut, Line } from 'react-chartjs-2';

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
  // Determine if the type is specifically for a doughnut chart
  const chartComponents = {
    doughnut: Doughnut,
    line: Line,
    // Add other chart types here as needed
  };
  
  const ChartComponent = chartComponents[type] || Chart;  // Fallback to generic Chart if type is not mapped
  

  return (
    <div className="relative max-w-4xl max-h-96 overflow-visible">
        <ChartComponent options={options} data={data} />
      <br/>
    </div>
  );
};


export default UniChart;
