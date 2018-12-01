import React from 'react';
//import { List, Datagrid, TextField,EmailField, ReferenceField } from 'react-admin';
import { ReferenceArrayInput, DateInput, SelectArrayInput, Filter,ShowButton,Show, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import Panel from '../components/Panel';
import Table from '../components/table/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import BlockIcon from '@material-ui/icons/Block';
import AckIcon from '@material-ui/icons/ThumbUp';
import DoneIcon from '@material-ui/icons/Done';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import UndoIcon from '@material-ui/icons/Undo';
// import Table from '@material-ui/core/Table';
import { Card,CardBody,Col, Container, Row, Badge } from 'reactstrap';

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


const AlertFilter = (props) => (
    <Filter {...props}>

        <SelectArrayInput label="Status" source="alertStatus" choices={[
            { id: 'active', name: 'Active' },
            { id: 'returned', name: 'Returned' },
            { id: 'acknowledged', name: 'Acknowledged' },
            { id: 'cleared', name: 'Cleared' }
        ]} />

        <SelectArrayInput label="Priority" source="alertPriority" choices={[
            { id: 'high', name: 'High' },
            { id: 'medium', name: 'Medium' },
            { id: 'low', name: 'Low' }
        ]} />

        <SelectArrayInput label="Type" source="alertType" choices={[
            { id: 'alert', name: 'Alert' },
            { id: 'fault', name: 'Fault' },
            { id: 'geozones', name: 'GeoZones' }
        ]} />


        <DateInput source="startDate" />
        <DateInput source="endDate" />



        <ReferenceArrayInput label="Pick Assets" source="assets" reference="getAssetListForReference">
            <SelectArrayInput optionText="assetName" />

        </ReferenceArrayInput>

    </Filter>
);

export const AlertsHistory = (props) => (

    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Alerts History</h3>
            </Col>
        </Row>
        {/* <Row>
            <br />
        </Row>        */}
        <Row>
            <Panel xs={12} md={12} lg={12} title="Historical Details">
                <List title="Alerts History" {...props} filters={<AlertFilter />} perPage={10}>
                    <AlertHistoryGrid />
                    {/* <Datagrid>
                        {/* <ReferenceField label="Asset Name" source="assetId" reference="getAssetListForReference">
                            <TextField source="assetName" />
                        </ReferenceField> 
                        <TextField source="assetName" />
                        <TextField label="Time Active" source="timeStamp" />
                        <TextField source="alertPriority" />
                        <TextField source="alertStatus" />
                        <TextField source="event" />
                    </Datagrid> */}
                </List>
            </Panel>
        </Row>
    </Container >
);

const AlertHistoryGrid = ({ ids, data, basePath }) => (
    <div id="device" style={{ gridStyle }}>

        <Table responsive style={{ tableLayout: 'auto' }}  >
            <TableHead>
                <TableRow>
                    <TableCell>Asset Name</TableCell>
                    <TableCell>Time Active</TableCell>
                    <TableCell>Alert Priority</TableCell>
                    <TableCell> Alert Status</TableCell>
                    <TableCell>Event</TableCell>
                    {/* <TableCell>Show</TableCell> */}
                </TableRow>
            </TableHead>
            <TableBody>
                {ids.map(id => {
                    return (
                        <TableRow
                            key={id}>
                            <TableCell>{(data[id]).assetName}</TableCell>
                            <TableCell>{new Date(parseInt((data[id]).timeStamp)).toLocaleString()}</TableCell>
                            {(data[id]).alertPriority == 'high' && (
                                <TableCell><Badge color='danger'><ArrowUpwardIcon style={{ width: 25, height: 25, paddingRight: 5 }} />High</Badge></TableCell>
                            )}

                            {(data[id]).alertPriority == 'medium' && (
                                <TableCell><Badge color='warning'><CompareArrowsIcon style={{ width: 25, height: 25, paddingRight: 5 }} />Medium</Badge></TableCell>
                            )}

                            {(data[id]).alertPriority == 'low' && (
                                <TableCell><Badge color='secondary'><ArrowDownwardIcon style={{ width: 25, height: 25, paddingRight: 5 }} />Low</Badge></TableCell>
                            )}

                            {(data[id]).alertStatus == 'active' && (
                                <TableCell><Badge color='success'><DoneIcon style={{ width: 25, height: 25, paddingRight: 5 }} />Active</Badge></TableCell>
                            )}

                            {(data[id]).alertStatus == 'acknowledged' && (
                                <TableCell><Badge color='primary'><AckIcon style={{ width: 25, height: 25, paddingRight: 5 }} />Acknowledged</Badge></TableCell>
                            )}

                            {(data[id]).alertStatus == 'cleared' && (
                                <TableCell><Badge color='success'><DoneIcon style={{ width: 25, height: 25, paddingRight: 5 }} />Cleared</Badge></TableCell>
                            )}

                            {(data[id]).alertStatus == 'returned' && (
                                <TableCell><Badge color='info'><UndoIcon style={{ width: 25, height: 25, paddingRight: 5 }} />Returned</Badge></TableCell>
                            )}
                            <TableCell>{(data[id]).event} </TableCell>
                            {/* <TableCell>
                                <ShowButton
                                    resource="getAlerstHistory" basePath={basePath} record={(data[id])}
                                />
                            </TableCell> */}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </div>
)

// export const AlertHistoryDetails = (props) => (
//     <Show title="Alert History" {...props}  >   
//         <AlertDetailedView/>
//     </Show>
// );

// const AlertDetailedView = ({ record }) => {
//     return (
//         // <Panel xs={12} md={12} lg={12} title={"Device : " + record.model+" - "+record.telematicsSerialNumber}> 
//         <Card>
//             <CardBody>
//                 <h5 class="bold-text">{"Alert History / Details : "}</h5>
//                 <div class="card">
//                     <div class="card-body">                        
//                         <Col md={6} lg={6} xs={6}>
//                             <h5>Alert Details</h5>
//                             <Table responsive className='table--bordered'>                                
//                                 <tbody>
//                                     <tr>
//                                         <td><strong>Asset Name</strong></td>
//                                         <td><strong>{record ? `${record.assetName}` : ''}</strong></td>
//                                     </tr>
//                                     {/* <tr>
//                                         <td><strong>Plan</strong></td>
//                                         <td><strong>{record ? `${record.plan}` : ''}</strong></td>
//                                     </tr>
//                                     <tr>
//                                         <td><strong>Work Order #</strong></td>
//                                         <td><strong>{record ? `${record.workOrder}` : ''}</strong></td>
//                                     </tr>
//                                     <tr>
//                                         <td><strong>Completed By</strong></td>
//                                         <td><strong>{record ? `${record.completedBy}` : ''}</strong></td>
//                                     </tr>
//                                     <tr>
//                                         <td><strong>Service Run Hours</strong></td>
//                                         <td><strong>{record ? `${record.serviceRunHours}` : ''}</strong></td>
//                                     </tr>
//                                     <tr>
//                                         <td><strong>Service Date</strong></td>
//                                         <td><strong>{record ? `${record.dateOfService}` : ''}</strong></td>
//                                     </tr>
//                                     <tr>
//                                         <td><strong>Status</strong></td>
//                                         <td><strong>{record ? `${record.status}` : ''}</strong></td>
//                                     </tr>                                     */}
//                                 </tbody>
//                             </Table>
//                         </Col>
//                     </div>
//                 </div>
//             </CardBody>
//         </Card>
//         //</Panel>
//     );
// };

AlertHistoryGrid.defaultProps = {
    data: {},
    ids: [],
};



// export const DateFilterForm = (props) => (
//     <Create title="Historical Alerts" {...props}>
//         <SimpleForm redirect="show">
//             <DateInput source="startDate" />
//             <DateInput source="endDate" />
//         </SimpleForm>
//     </Create>
// );
