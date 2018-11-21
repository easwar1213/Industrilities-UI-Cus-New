
import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { ComposedChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, ResponsiveContainer } from 'recharts';

class PriorityTrendChart extends PureComponent {

    render() {

        let data = this.props.data;
        console.log(data)
        return (
            <ResponsiveContainer height={300}>
                <LineChart data={data}
                    margin={{ top: 0, right: 0, left: -15, bottom: 0 }}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="High" stroke="#FF6384" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Medium" stroke="#FFCE56" />
                    <Line type="monotone" dataKey="Low" stroke="#E7E9ED" />
                    {/* <Brush /> */}
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default (PriorityTrendChart);
