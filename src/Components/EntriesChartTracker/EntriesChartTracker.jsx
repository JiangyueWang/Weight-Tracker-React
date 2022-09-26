import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
const EntriesChartTracker = (props) => {
    // console.log(props.parentEntries)
    const [chartData, setChartData] = useState([]);
    
    // 1st useEffect runs is as soon as the components pop on the screen 
    // then it will run everytime the component is updated
    useEffect(() => {
        let tempChartData = props.parentEntries.map(entry => {
            return [entry.date, entry.weight];
        });
        setChartData(tempChartData);
    }, [props.parentEntries])

    return (
    <Chart
        chartType="LineChart"
        data={[["Date", "Weight"], ...chartData]}
        width="100%"
        height="400px"
        legendToggle
      />
    );
}
 
export default EntriesChartTracker;