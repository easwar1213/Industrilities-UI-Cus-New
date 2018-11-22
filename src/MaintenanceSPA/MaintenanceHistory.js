import React from 'react';
//import { List, Datagrid, TextField,EmailField, ReferenceField } from 'react-admin';
import { SimpleShowLayout, ShowButton, Show, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, ReferenceManyField } from 'react-admin';
import { Card,CardBody,Col, Container, Row, Badge } from 'reactstrap';
import Panel from '../components/Panel';
import Table from '../components/table/Table';


export const MaintenanceHistory = (props) => (

    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Maintenance History</h3>
            </Col>
        </Row>
        <Row>
            <br />
        </Row>
        <Row>
            <Panel xs={12} md={12} lg={12} title="History Details">
                <List title="Maintenance History" {...props} filter={{ status: "completed" }} >
                    <Datagrid>
                        <TextField source="plan" />
                        <TextField source="assetName" />
                        <TextField source="status" />
                        <TextField label="Completed At" source="serviceDate" />
                        <ShowButton label="Show" />
                    </Datagrid>
                </List>
            </Panel>
        </Row>
    </Container>

    // <List title="Maintenance History" {...props} filter={{ status: "completed" }} >
    //     <Datagrid>
    //         <TextField source="plan" />
    //         <TextField source="assetName" />
    //         <TextField source="status" />
    //         <TextField label="Completed At" source="serviceDate" />
    //         <ShowButton label="Show"/>
    //     </Datagrid>
    // </List>
);


const MaintenanceHistoryTitle = ({ record }) => {
    return <span>Maintenance History / Details </span>;
};

const DeviceDetailedView = ({ record }) => {
    return (
        // <Panel xs={12} md={12} lg={12} title={"Device : " + record.model+" - "+record.telematicsSerialNumber}> 
        <Card>
            <CardBody>
                <h5 class="bold-text heading-txt">{"Maintenance History / Details : "}</h5>
                <div class="card">
                    <div class="card-body">                        
                        <Col md={6} lg={6} xs={6}>
                            <h5>Maintenance Details</h5>
                            <Table responsive className='table--bordered'>
                                {/* <thead className="table-heading">
                                    <tr width="100%">
                                        <th width="15%">Asset Name</th>
                                        <th width="15%">Plan</th>
                                        <th width="15%">Work Order #</th>
                                        <th width="15%">Completed By</th>
                                        <th width="15%">Service Run Hours</th>
                                        <th width="15%">Service Date</th>
                                        <th width="10%">Status</th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    <tr>
                                        <td><strong>Asset Name</strong></td>
                                        <td><strong>{record ? `${record.assetName}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Plan</strong></td>
                                        <td><strong>{record ? `${record.plan}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Work Order #</strong></td>
                                        <td><strong>{record ? `${record.workOrder}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Completed By</strong></td>
                                        <td><strong>{record ? `${record.completedBy}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Service Run Hours</strong></td>
                                        <td><strong>{record ? `${record.serviceRunHours}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Service Date</strong></td>
                                        <td><strong>{record ? `${record.dateOfService}` : ''}</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Status</strong></td>
                                        <td><strong>{record ? `${record.status}` : ''}</strong></td>
                                    </tr>                                    
                                </tbody>
                            </Table>
                        </Col>
                    </div>
                </div>
            </CardBody>
        </Card>
        //</Panel>
    );
};

export const MaintenanceHistoryDetails = (props) => (

    <Show title="Maintenance History" {...props}  >
        {/* <ReferenceManyField target="Asset" reference="getMaintenanceHistory" className="TableResponsive">
            <Datagrid>
                <TextField label="Asset" source="assetName" />
                <TextField source="plan" />
                <TextField lable="Work Order #" source="workOrder" />
                <TextField label="Completed By" source="completedBy" />
                <TextField label="Service Run Hours" source="serviceRunHours" />
                <TextField label="Service Date" source="dateOfService" />
                <TextField source="status" />
            </Datagrid>
        </ReferenceManyField> */}

        {/* <SimpleShowLayout>
            <TextField label="Asset" source="assetName" />
            <TextField source="plan" />
            <TextField lable="Work Order #" source="workOrder" />
            <TextField label="Completed By" source="completedBy" />
            <TextField label="Service Run Hours" source="serviceRunHours" />
            <TextField label="Service Date" source="dateOfService" />
            <TextField source="status" />
        </SimpleShowLayout> */}

        <DeviceDetailedView/>

    </Show>
);

