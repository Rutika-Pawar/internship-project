import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	scales,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Colors } from '../../styles/graphColors';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	scales
);

export const GraphLine = (props) => {
	const labels = [];

	const options = {
		maintainAspectRatio: false, // disable aspect ratio calculation
		// responsive: true,
		plugins: {
			legend: {
				position: 'top',
				labels: {
					color: Colors.Black,
				},
			},
			title: {
				display: true,
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
				},
				ticks: {
					color: Colors.Black_FOURTY,
					font: { size: 13 },
				},
			},

			y: {
				ticks: {
					// // For a category axis, the val is the index so the lookup via getLabelForValue is needed
					callback: function (val, index) {
						// Hide every 2nd tick label
						return index % 2 === 0 ? this.getLabelForValue(val) : '';
					},
					color: Colors.Black_FOURTY,
					font: { size: 13 },
				},
				grid: {
					drawTicks: false,
					color: Colors.Black_FIVE,
					lineWidth: 1,
				},
			},
		},
	};

	const data = {
		labels,
		datasets: [
			{
				label: 'Previous Exam',
				data: [1, 3, 5, 8, 2, 5, 9],
				borderColor: Colors.Secondary_BLUE,
				backgroundColor: Colors.Primary_LIGHT,
				lineTension: 0.4, // adjust lineTension as needed
			},
			{
				label: 'Recent Exam',
				data: [0, 2, 8, 12, 1, 6, 15],
				borderColor: Colors.Black,
				backgroundColor: Colors.Primary_LIGHT,
				lineTension: 0.4, // adjust lineTension as needed
			},
		],
	};

	data.labels = props.labels;
	data.datasets[0].data = props.data1;
	data.datasets[1].data = props.data2;

	return (
		// <div style={{ height: 320, width: '100%', margin: 'auto' }}>
		<Line
			options={options}
			data={data}
			style={{
				backgroundColor: Colors.Primary_LIGHT,
				borderRadius: 16,
				padding: 18,
				width: props.width,
				height: props.height,
			}}
		/>
		// </div>
	);
};
