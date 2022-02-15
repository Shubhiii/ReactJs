import React from "react";
import Bar from "../Bar";

interface IChart {
	chartDataPoints: any;
}

const Chart: React.FC<IChart> = ({ chartDataPoints }) => {
	const dataPointValues = chartDataPoints.map(
		(dataPoint: { value: any }) => dataPoint.value
	);
	const totalMaximum = Math.max(...dataPointValues);
	return (
		<>
			{chartDataPoints.map(
				(data: { label: string; value: number }, i: number) => (
					<Bar
						maxValue={totalMaximum}
						key={i}
						label={data.label}
						value={data.value}
					/>
				)
			)}
		</>
	);
};

export default Chart;
