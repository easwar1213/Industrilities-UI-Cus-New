
import React, { PureComponent } from 'react';
import { ComposedChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,ResponsiveContainer } from 'recharts';




class StatusTrendChart extends PureComponent {
    render() {
        let data = this.props.data;
        console.log(data)
        return (
            <ResponsiveContainer height={300}>
                <LineChart data={data}
                    margin={{ top: 0, right: 0, left: -15, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Unauthorised" stroke="#ff4861" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Authorised" stroke="#4ce1b6" />
                    {/* <Brush /> */}
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default (StatusTrendChart);
