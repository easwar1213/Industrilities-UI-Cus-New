import React from 'react';
//import { List, Datagrid, TextField,EmailField, ReferenceField } from 'react-admin';
import { SimpleShowLayout, ShowButton, Show, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, ReferenceManyField } from 'react-admin';
import { Card,CardBody,Col, Container, Row, Badge } from 'reactstrap';
import Panel from '../components/Panel';
import Table from '../components/table/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';
// import Table from '@material-ui/core/Table';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const gridStyle = {
    width: '60%',
};


export const MaintenanceHistory = (props) => (

    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Maintenance History</h3>
            </Col>
        </Row>
        {/* <Row>
            <br />
        </Row> */}
        <Row>
            <Panel xs={12} md={12} lg={12} title="History Details">
                <List title="Maintenance History" {...props} filter={{ status: "completed" }} >
                <MaintenanceHistoryGrid />
                    {/* <Datagrid>
                        <TextField source="plan" />
                        <TextField source="assetName" />
                        <TextField source="status" />
                        <TextField label="Completed At" source="serviceDate" />
                        <ShowButton label="Show" />
                    </Datagrid> */}
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


const MaintenanceHistoryGrid = ({ ids, data, basePath }) => (
    <div id="device" style={{ gridStyle }}>

        <Table responsive style={{ tableLayout: 'auto' }}  >
            <TableHead>
                <TableRow>
                    <TableCell>Plan</TableCell>
                    <TableCell>Asset Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Completed At</TableCell>
                    <TableCell>Show</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {ids.map(id => {
                    return (
                        <TableRow
                            key={id}>
                            <TableCell>{(data[id]).plan}</TableCell>                            
                            <TableCell>{(data[id]).assetName}</TableCell>
                            {(data[id]).status == 'due' && (                                   
                                <TableCell><Badge color='primary'><DoneIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Due</Badge></TableCell>                        
                            )}
                            {(data[id]).status == 'upcoming' && (                               
                                <TableCell><Badge color='warning'><DoneIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Upcoming</Badge></TableCell>
                            )}                           
                            {(data[id]).status == 'completed' && (
                                <TableCell><Badge color='success'><DoneIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Completed</Badge></TableCell>
                            )}   
                            <TableCell>{(data[id]).serviceDate}</TableCell>  
                            <TableCell>
                                <ShowButton
                                    resource="getMaintenanceHistory" basePath={basePath} record={(data[id])}
                                />
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </div>
)

const MaintenanceHistoryTitle = ({ record }) => {
    return <span>Maintenance History / Details </span>;
};

const MaintennaceDetailedView = ({ record }) => {
    return (
        // <Panel xs={12} md={12} lg={12} title={"Device : " + record.model+" - "+record.telematicsSerialNumber}> 
        <Card>
            <CardBody>
                <h5 class="bold-text">{"Maintenance History / Details : "}</h5>
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

        <MaintennaceDetailedView/>

    </Show>
);

MaintenanceHistoryGrid.defaultProps = {
    data: {},
    ids: [],
};

