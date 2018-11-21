import React, { PureComponent } from 'react';

import { Doughnut } from 'react-chartjs-2';
import Paper from "@material-ui/core/Paper";




const getState = (props) => ({
    labels: [
        '% Authorised',
        '% Unathorised',
    ],


    datasets: [{
        data: (props.value) ? [props.value.authorisedPartPercentage, props.value.unauthorisedPartPercentage] : [0, 0],
        backgroundColor: [
            '#4ce1b6',
            '#ff4861',
        ],
        hoverBackgroundColor: [
            '#4ce1b6',
            '#ff4861',
        ],
        borderColor: 'rgba(255,255,255,0.54)'
    }]
});

class StatusPieChart extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            props: props,
            data: getState(props)
        };
    }

    componentWillMount() {
        //setInterval(() => {
        this.setState({ data: getState(this.props) });
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
