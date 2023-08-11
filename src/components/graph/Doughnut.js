import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DonutChart = () => {
	const data = {
		labels: [],
		datasets: [
			{
				data: [70, 20],
				backgroundColor: ['#FFD66B', '#ffffff'],
				hoverBackgroundColor: ['#3ec556', '#ffffff'],
				borderWidth: [10, 0],
			},
		],
	};

	const options = {
		animation: {
			animationRotate: true,
			duration: 2000,
		},
		legend: {
			display: false,
		},
		tooltips: {
			enabled: false,
		},
		elements: {
			arc: {
				borderWidth: 6,
			},
		},
		layout: {
			padding: {
				top: 2,
			},
		},
		borderRadius: 25,
	};
	const textCenter = {
		id: 'textCenter',
		beforeDatasetsDraw(chart) {
			const { ctx, data } = chart;

			ctx.save();
			ctx.font = 'bolder 10px';
			ctx.fillStyle = 'red';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(
				`${data.datasets[0].data[0]}%`,
				chart.getDatasetMeta(0).data[0].x,
				chart.getDatasetMeta(0).data[0].y
			);
		},
	};

	return (
		<div>
			<Doughnut data={data} options={options} plugins={[textCenter]} />
		</div>
	);
};
