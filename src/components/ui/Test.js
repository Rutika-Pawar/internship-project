import React, { useState } from 'react';

function Test() {
	const [svgSize, setSvgSize] = useState(100); // initial size of the SVG

	function handleSizeChange(event) {
		setSvgSize(event.target.value); // update the size of the SVG
	}

	return (
		<div>
			<label>
				SVG Size:
				<input type="number" value={svgSize} onChange={handleSizeChange} />
			</label>
			<svg width={svgSize} height={svgSize}>
				<circle cx={svgSize / 2} cy={svgSize / 2} r={svgSize / 2} />
			</svg>
		</div>
	);
}

export default Test;
