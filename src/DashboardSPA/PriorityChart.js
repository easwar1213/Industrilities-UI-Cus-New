import React, { PureComponent } from 'react';

import { Doughnut } from 'react-chartjs-2';
import Paper from "@material-ui/core/Paper";

import Card from '@material-ui/core/Card';
import { height, width } from 'window-size';
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = (props) => ({

  labels: [
    '% High',
    '% Medium',
    '% Low',
  ],


  datasets: [{
    data: (props.value) ? [props.value.highAlertPercentage, props.value.mediumAlertPercentage, props.value.lowAlertPercentage] : [0, 0, 0],
    backgroundColor: [
      '#FF6384',
      '#FFCE56',
      '#E7E9ED'
    ],
    hoverBackgroundColor: [

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
    position: 'bottom'
  }
}
class PriorityChart extends PureComponent {

  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {
      props: props,
      data: getState(props),
      options: options
    };
  }


  componentDidMount() {
    console.log(this.props)
    //setInterval(() => {
    this.setState({ data: getState(this.props) });
    this.setState({ options: options });
    // }, 4000);
  }

  render() {


    return (
      <div >
        <Doughnut height={250} options={this.state.options} data={this.state.data} />
      </div>
    )
  }
}

export default (PriorityChart);
