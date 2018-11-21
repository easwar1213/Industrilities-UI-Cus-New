import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class StatusTrendChart extends PureComponent {
  render() {
    //const {t} = this.props;
    let data = this.props.data;
    console.log(data)
    return (
      <div>
        <ResponsiveContainer height={300}>
          <LineChart data={data} margin={{ top: 0, right: 0, left: -15, bottom: 0 }}>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='Available' stroke='#4ce1b6' />
            <Line type='monotone' dataKey='Unavailable' stroke='#ff4861' activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default (StatusTrendChart);
