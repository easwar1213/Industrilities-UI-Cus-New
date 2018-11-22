import React, { PureComponent } from 'react';
import { Card, CardBody, Col, CardText, CardTitle } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import Paper from "@material-ui/core/Paper";

const getState = (props) => ({
  labels: [
    '% Active',
    '% Returned',
    '% Ack',
  ],
  datasets: [{
    data: (props.value) ? [props.value.activeAlertPercentage, props.value.returnedAlertPercentage, props.value.acknowledgedAlertPercentage] : [0, 0, 0],
    backgroundColor: [
      '#4ce1b6',
      '#5bc0de',
      '#90CAF9'
    ],
    hoverBackgroundColor: [

      '#4ce1b6',
      '#5bc0de',
      '#90CAF9'
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
class StatusPieChart extends PureComponent {

  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {
      props: props,
      data: getState(props),
      options: options
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

      // <Col >
      //   <Card>
      //     <CardBody>
      <div>
        <Doughnut height={310} data={this.state.data} />
      </div>
      //       <div className="bg-info clearfix" style={{ padding: '.5rem' }}>

      //    </div>
      //     </CardBody>
      //   </Card>
      // </Col>

    )
  }
}

export default (StatusPieChart);
