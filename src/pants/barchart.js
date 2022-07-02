import React from 'react';
import { Line } from 'react-chartjs-2';
import { chart as chartjs } from 'chart.js/auto'

const Barchart = ({ chartData }) => {
    return (
        <Line data={chartData} ></Line>
    )
}

export default Barchart;
