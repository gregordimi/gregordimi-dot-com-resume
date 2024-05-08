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
import { Chart, Doughnut } from 'react-chartjs-2';

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
  const renderDoughnut = type === 'doughnut';

  return (
    <div className="relative max-w-4xl max-h-96 overflow-visible">
      {renderDoughnut ? (
        <Doughnut options={options} data={data} />
      ) : (
        <Chart type={type} options={options} data={data} />
      )}
      <br/>
    </div>
  );
};


export default UniChart;
