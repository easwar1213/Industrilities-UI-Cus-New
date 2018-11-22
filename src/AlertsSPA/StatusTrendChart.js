
import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { ComposedChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,ResponsiveContainer } from 'recharts';



class StatusTrendChart extends PureComponent {
    render() {

        let data =this.props.data;
        console.log(data)
        return (
            <ResponsiveContainer height={300}>
                <LineChart data={data}
                    margin={{ top: 0, right: 0, left: -15, bottom: 0 }}>
                <XAxis dataKey="date" />
                <YAxis  />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Active" stroke="#4ce1b6" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Returned" stroke="#5bc0de" />
                <Line type="monotone" dataKey="Acknowledged" stroke="#90CAF9" />
                {/* <Brush /> */}
            </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default (StatusTrendChart);
