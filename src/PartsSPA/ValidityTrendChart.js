
import React, { PureComponent } from 'react';
import { ComposedChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, ResponsiveContainer } from 'recharts';




class ValidityTrendChart extends PureComponent {
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
                    <Line type="monotone" dataKey="Expired" stroke="#FF6384" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Replacement Due" stroke="#FFCE56" />
                    <Line type="monotone" dataKey="Invalid" stroke="#E7E9ED" />
                    <Line type="monotone" dataKey="Valid" stroke="#4BC0C0" />
                    {/* <Brush /> */}
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default (ValidityTrendChart);
