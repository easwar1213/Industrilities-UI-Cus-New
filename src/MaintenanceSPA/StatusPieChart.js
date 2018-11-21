import React, { PureComponent } from 'react';

import { Doughnut } from 'react-chartjs-2';
import Paper from "@material-ui/core/Paper";

const getState = (props) => ({
    labels: [
        '% Due',
        '% Upcoming',
    ],

    datasets: [{
        data: (props.value)?[props.value.dueMaintenancePercentage,props.value.upcomingMaintenancePercentage]:[0,0],
        backgroundColor: [
            '#36A2EB',
            '#F4D03F',
        ],
        hoverBackgroundColor: [
            '#36A2EB',
            '#F4D03F',
        ],
        borderColor: 'rgba(255,255,255,0.54)'
    }]
});

const options = {
    legend: {
        position: 'left'
    }
}
class StatusPieChart extends PureComponent {  
    constructor(props) {
        super(props);
        
        this.state = {
          props:props,
          data: getState(props)
        };
      }

    componentWillMount() {
        //setInterval(() => {
        this.setState({ data: getState(this.props) });
        this.setState({ options: options });
        // }, 4000);
    }

    render() {
        return (
            <div>
                <Doughnut height={310} data={this.state.data} />
            </div>
        )
    }
}

export default (StatusPieChart);
