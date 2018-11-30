
import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
//import {ComposedChart,LineChart,Bar,Brush, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { ComposedChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class SensorDataChart extends PureComponent {
  render() {
    const data = [
      { timeStamp: '2018-09-18', sensorValue: 1.7, },
      { timeStamp: '2018-09-19', sensorValue: 1, },
      { timeStamp: '2018-09-20', sensorValue: 2, },
      { timeStamp: '2018-09-21', sensorValue: 1.5, },
      { timeStamp: '2018-09-22', sensorValue: 0.5, }

    ];
    let sensor = this.props.chartValue;
    let group = this.props.group
    return (
        // <ComposedChart width={650} height={180} data={data}
        //     margin={{top: 7, right: 20, left: 20, bottom: 5}}>
        //   <XAxis dataKey="timeStamp" />
        //   <YAxis />
        //   <CartesianGrid strokeDasharray="3 3" />
        //   <Tooltip />
        //   <Legend />
        //   {/* <Line type="monotone" dataKey="Active" stroke="#4ce1b6" activeDot={{ r: 8 }} /> */}
        //   <Line name={sensor} type="monotone" yAxisId="left" dataKey="sensorValue" stroke="#36A2EB" />
        //   {/* <Brush /> */}
        // </ComposedChart>

      <ComposedChart width={650} height={180} data={data}
            margin={{top: 7, right: 20, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="timeStamp"/>
       <YAxis   padding={{ top: 20 }} label={{ value:group, angle: -90, position: 'insideBottomLeft' }} yAxisId="left" />
       {/* <YAxis yAxisId="right" orientation="right" /> */}
       <Tooltip/>
      {/* <Legend/> */}
      {/* <Brush /> */}
      <Line name ={sensor} type="monotone" yAxisId="left"  dataKey="sensorValue" fill='#36A2EB' />     
      </ComposedChart>
    );
  }
}

export default (SensorDataChart);
