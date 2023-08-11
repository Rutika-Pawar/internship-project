import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import { BarColor } from '../../data/constants';
import { Colors } from '../../styles/graphColors';
import { BarColor } from '../../data/constants';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const GraphBar = (props) => {
	const options = {
		// responsive: true,
		// maintainAspectRatio: false, // disable aspect ratio calculation
		plugins: {
			legend: {
				display: props.label,
				position: 'top',
			},
			title: {
				display: true,
				text: 'Class Wise Attendance',
				color: Colors.Black,
				align: props.alignment,
				padding: {
					top: 10,
				},
				font: { size: 15 },
			},
			tooltip: {
				backgroundColor: Colors.Orange,
				yAlign: 'bottom',
				cornerRadius: 8,
				displayColors: false,
				bodyAlign: 'center',
				enabled: props.enabledtooltip,
			},
		},
		scales: {
			x: {
				grid: {
					display: props.showXaxisValues,
					drawTicks: false,
					color: Colors.Black_FIVE,
					lineWidth: 1,
				},
				ticks: {
					color: Colors.Black_FOURTY,
					font: { size: 13 },
				},
			},
			y: {
				ticks: {
					display: props.showYaxisValues,
					callback: function (val, index) {
						return index % 3 === 0 ? this.getLabelForValue(val) : '';
					},
					color: Colors.Black_FOURTY,
					font: { size: 13 },
				},
				grid: {
					display: props.showYaxisValues,
					drawTicks: false,
					color: Colors.Black_FIVE,
					lineWidth: 1,
				},
			},
		},
	};

	const labels = [];
	const data = {
		labels,
		datasets: [
			{
				data: [],
				barThickness: props.barThickness || 10,
				barPercentage: 0.5,
				backgroundColor: BarColor,
				hoverBackgroundColor: BarColor,
				borderColor: BarColor,
				borderWidth: 1,
				borderRadius: props.borderRadius || 5,
			},
		],
	};

	data.labels = props.labels;
	data.datasets[0].data = props.data;

	return (
		<div style={{ width: props.width }}>
			<Bar
				height={props.height}
				options={options}
				data={data}
				style={{
					backgroundColor: Colors.Primary_LIGHT,
					borderRadius: 16,
					padding: 18,
					height: 10,
					width: props.width,
				}}
			/>
		</div>
	);
};
