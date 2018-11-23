import React from 'react';

import { BooleanInput, SimpleShowLayout, SimpleList, ReferenceManyField, ReferenceArrayField, SelectArrayInput, Show, ShowButton, Tab, TabbedShowLayout, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import Grid from "@material-ui/core/Grid";
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import Paper from "@material-ui/core/Paper";
import AnalyticsTab from './AnalyticsTabs'
import ReportTypes from './ReportTypes'
import UtilizationSummary from './UtilizationSummary';
import Panel from '../components/Panel';

const Health = "Health";
const styles = {
    category: { fontWeight: 'bold' },
};

const ReportTitle = ({ record }) => {
    return <span>Analytics / {record.reportType ? `${record.subReportType}` : ''}</span>;
};

export const AnalyticsView = (props) => (
    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Analytics</h3>
            </Col>
        </Row>
        {/* <Row>
            <br />
        </Row>         */}
        <Row>
            <Panel xs={12} md={12} lg={12} title="Analytics Details">
                <List title="Analytics" {...props}   >
                    <Datagrid >
                        <TextField label="Category" source="reportType" />
                        <TextField label="Report" source="subReportType" />
                        <TextField label="Description" source="description" />
                        <ShowButton label="Show"/>
                    </Datagrid>
                </List>
            </Panel>
        </Row>
    </Container>
);

const MyActions = ({ record }) => {
    return <span></span>
}

export const ShowReport = (props) => (

    <ReportTypes type={props} />

    // <UtilizationSummary type ={props}/> 


)

//filter={{ type: "Utilization" }}
//actions={<MyActions />}