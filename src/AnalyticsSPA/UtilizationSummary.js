import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SmallDataPanel from './SmallDataPanel'
import UtilizationSummaryChart from './UtilizationSummaryChart';

class UtilizationSummary extends PureComponent {

    constructor(props) {
        super(props)
        let data = this.props.value
        console.log(data)

        this.state = {
            sevenDays: {
                title: "Last 7 Days",
                // value: 30,
                value: data.sevenDayRunTime,
                footer: "hours"
            },

            month_To_date: {
                title: "Month-To-Date",
                //value: 30,
                value: data.month_To_Date_RunTime,
                footer: "hours"
            },

            oneMonth: {
                title: "Last 30 days",
                //value: 30,
                value: data.oneMonthRunTime,
                footer: "hours"
            },
            threeMonth: {
                title: "Last 90 Days",
                //value: 30,
                value: data.threeMonthRunTime,
                footer: "hours"
            },
            assteCount: {
                title: "Assets Reported Data During Period",
                value: data.SelectedAssets,
                footer: ""
            },
            avgPerAssetPerDay: {
                title: "Average hours per asset per day",
                //value: 30,
                value: data.AvgRunHoursPerAssetPerDay,
                footer: ""
            },

            firstQuarter: {
                title: "00:00 - 05:59",
                value: 8,
                footer: "hours"
            },

            secondQuarter: {
                title: "06:00 - 11:59",
                value: 11,
                footer: "hours"
            },
            thirdQuarter: {
                title: "12:00 - 17:59",
                value: 14,
                footer: "hours"
            },
            fourthQuarter: {
                title: "17:59 - 23:59",
                value: 6,
                footer: "hours"
            }

        };
        // console.log(this.state)

    }

    componentDidMount() {

    }

    render() {
        //console.log(this.props)

        return (
            <Container className='dashboard'>
                <Row>
                    <Col md={12}>
                        <h3 className='page-title'>{"Utilization Summary (in hours)"}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.sevenDays} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.oneMonth} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.month_To_date} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.threeMonth} />
                    </Col>
                </Row>
                <Row>
                    <br />
                </Row>
                <Row>
                    <Col md={12} lg={12} xs={12}>
                            <h5 className='page-title'>Total Run Hours for Last 7 days</h5>
                            <br/>
                            <UtilizationSummaryChart value={this.props.value.TotalRunHoursForGraph} />
                    </Col>
                </Row>
                <Row>
                    <br />
                </Row>
                <Row>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.assteCount} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.avgPerAssetPerDay} />
                    </Col>
                </Row>
                <Row>
                    <br />
                </Row>
                <Row>
                    <Col md={12}>
                        <h3 className='page-title'>{"Time Of Day Utilization Summary"}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.firstQuarter} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.secondQuarter} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.thirdQuarter} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.fourthQuarter} />
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default (UtilizationSummary);
