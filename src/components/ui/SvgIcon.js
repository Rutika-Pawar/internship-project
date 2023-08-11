import React from 'react';
import { IconContext } from 'react-icons';
import svgs from '../../data/svgs.json';

export const SvgIcon = ({ iconName, height, width, pressMe }) => {
	const svgString = svgs[iconName];
	const div = document.createElement('div');
	div.innerHTML = svgString;
	const svg = div.querySelector('svg');

	if (svg && height && width) {
		svg.setAttribute('height', height);
		svg.setAttribute('width', width);
	}

	return (
		<IconContext.Provider value={{ height, width }}>
			{svg && (
				<div
					style={{ cursor: 'pointer' }}
					onClick={pressMe}
					dangerouslySetInnerHTML={{ __html: svg.outerHTML }}
				/>
			)}
		</IconContext.Provider>
	);
};

export default SvgIcon;

// import { useEffect } from 'react';
// import svgIcons from '../../data/svgs.json';

// export const SvgIcon = (props) => {
// 	let svgStyle = {
// 		height: props.height,
// 		width: props.width,
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	};

// 	useEffect(() => {
// 		let svg = document.getElementsByTagName('svg');
// 		let path = document.getElementsByTagName('path');
// 		svg = svg[0];
// 		path = path[0];

// 		svg.setAttribute('height', props.height ? props.height : '32px');
// 		svg.setAttribute('width', props.width ? props.width : '32px');
// 		if (props.fill) path.setAttribute('fill', props.fill);
// 	}, [props]);

// 	return (
// 		<i
// 			id={props.id}
// 			style={svgStyle}
// 			onClick={props.pressMe}
// 			dangerouslySetInnerHTML={{ __html: svgIcons[props.iconName] }}
// 		/>
// 	);
// };
