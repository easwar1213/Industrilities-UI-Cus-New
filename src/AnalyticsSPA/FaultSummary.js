import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SmallDataPanel from './SmallDataPanel'

import FaultSummaryChart from './FaultSummaryChart';

class FaultSummary extends PureComponent {

    constructor(props) {
        super(props)
        //    let data =this.props.value
        // console.log(data)

        this.state = {
            assetFaulting: {
                // title: "Last 7 Days",
                // value: 30,
                value: "1/3 (33%)",
                footer: "Asset Faulting"
            },

            totalFaults: {
                //  title: "Month-To-Date",
                //value: 30,
                value: 1,
                footer: "Total Faults"
            },

            UniqueFaultCodes: {
                // title: "Last 30 days",
                //value: 30,
                value: 1,
                footer: "Unique Fault Codes"
            },
            avgFaultPerTotalAssets: {
                //title: "Last 90 Days",
                //value: 30,
                value: 0.33,
                footer: "Avg Fault Per Total Assets"
            },
            avgFaultPerFaultingAssets: {
                //title:"Assets Reported Data During Period",
                value: 1,
                footer: "Avg Fault Per Faulting Assets"
            },
            avgFaultPerFaultingModels: {
                // title:"Average hours per asset per day",
                //value: 30,
                value: 1,
                footer: "Avg Fault Per Faulting Models"
            },

            top10FaultingAssets: {
                title: "Top 10 Faulting Assets",
                value: 0
                // value:{"Sullair Test3":1},
                //  footer:"hours"
            },

            top10FaultingModels: {
                title: "Top 10 Faulting Models",
                value: "Sullair Test 3"
                // value:{"Model":"LS 90","Count":1,"Asset %":33.33},
                //  footer:"hours"
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
                        <h3 className='page-title'>{"Fault Summary"}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.assetFaulting} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.totalFaults} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.UniqueFaultCodes} />
                    </Col>
                    {/* <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.threeMonth} />
                    </Col> */}
                </Row>
                <Row>
                    <br />
                </Row>
                <Row>
                    <Col md={12} lg={12} xs={12}>
                        <h5 className='page-title'>Occurrence(s) Per Day</h5>
                        <br />
                        <FaultSummaryChart fillColor="#FF6384"/>
                    </Col>
                </Row>
                <Row>
                    <br />
                </Row>
                <Row>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.avgFaultPerTotalAssets} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.avgFaultPerFaultingAssets} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.avgFaultPerFaultingModels} />
                    </Col>
                </Row>
                <br />
                {/* <Row>
                    <Col md={12}>
                        <h3 className='page-title'>{"Time Of Day Utilization Summary"}</h3>
                    </Col>
                </Row> */}
                <Row>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.top10FaultingAssets} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.top10FaultingModels} />
                    </Col>
                    {/* <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.thirdQuarter} />
                    </Col>
                    <Col md={12} lg={3} xs={12}>
                        <SmallDataPanel value={this.state.fourthQuarter} />
                    </Col> */}
                </Row>
            </Container>
        )
    }
}

export default (FaultSummary);
