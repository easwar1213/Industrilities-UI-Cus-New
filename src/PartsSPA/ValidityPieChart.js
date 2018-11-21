import React, { PureComponent } from 'react';

import { Doughnut } from 'react-chartjs-2';
import Paper from "@material-ui/core/Paper";



// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const getState = (props) => ({
    
    labels: [
        '% Valid',
        '% Expired',
        '% Replacement Due',
        '% InValid',
    ],


    datasets: [{
        data: (props.value)?[props.value.validPartPercentage,props.value.expiredPartPercentage,props.value.dueForReplacementPartPercentage,props.value.invalidPartPercentage]:[0,0,0,0],
        backgroundColor: [
            '#4BC0C0',
            '#FF6384',
            '#FFCE56',
            '#E7E9ED'
        ],
        hoverBackgroundColor: [
            '#4BC0C0',
            '#FF6384',
            '#FFCE56',
            '#E7E9ED'
        ],
        borderColor: 'rgba(255,255,255,0.54)',
        borderWidth: 2,
    }]
});

const options = {
    legend: {
        position: 'left'
    }
}
class ValidityPieChart extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            props:props,
            data: getState(props)
        };
    }

    componentWillMount() {
        //setInterval(() => {
            console.log(this.props)
        this.setState({data: getState(this.props)});
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

export default (ValidityPieChart);
