import React from 'react';
//import { List, Datagrid, TextField,EmailField, ReferenceField } from 'react-admin';
import { Responsive, BooleanInput, SimpleShowLayout, SimpleList, ReferenceManyField, ReferenceArrayField, SelectArrayInput, Show, ShowButton, Tab, TabbedShowLayout, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { Col, Container, Row } from 'reactstrap';
import Map from './map';
import SensorGroupTable from './SensorGroupTable';
import Table from '../components/table/Table';
import Panel from '../components/Panel';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card, CardBody } from 'reactstrap';
import Collapse from '../components/Collapse';
import { Badge } from 'reactstrap';
import '../index.css';
import { Paper } from '@material-ui/core';
import MapIcon from '@material-ui/icons/LocationOn';
import ListIcon from '@material-ui/icons/List';
import DoneIcon from '@material-ui/icons/Done';
import UndoIcon from '@material-ui/icons/Undo';
import AckIcon from '@material-ui/icons/ThumbUp';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

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


export const AssetList = (props) => (

    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Assets</h3>
            </Col>
        </Row>      
        <Row>
            <Panel xs={12} md={12} lg={12} title="Asset Details">
                <List title="Assets" {...props} filters={<AssetFilter />}>
                    <Datagrid>
                        <TextField source="telematicsSerialNumber" />
                        <TextField source="make" />
                        <TextField source="assetName" />
                        <TextField source="model" />
                        <TextField source="distributorName" />
                        <ShowButton label="Show" />
                    </Datagrid>
                </List>
            </Panel>
        </Row>
    </Container>
);

const AssetTitle = ({ record }) => {
    return <span>Assets / {record ? `${record.telematicsSerialNumber}` : ''}</span>;
};

const AssetDetailsTab = ({ record }) => {
    return (
        <div class="card">
            <div class="card-body">
                <Col md={6} lg={6} xs={6}>
                    <h5>Asset Details</h5>
                    <Table responsive className='table--bordered'>                       
                        <tbody>
                            <tr>
                                <td><strong>Name</strong></td>
                                <td><strong>{record ? `${record.assetName}` : ''}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Device Model</strong></td>
                                <td><strong>{record ? `${record.model}` : ''}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Make</strong></td>
                                <td><strong>{record ? `${record.Make}` : ''}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Model Year</strong></td>
                                <td><strong>{record ? `${record.modelYear}` : ''}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Compressor Controller</strong></td>
                                <td><strong>{record ? `${record.compressorController}` : ''}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Compressor Type</strong></td>
                                <td><strong>{record ? `${record.compressorType}` : ''}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Distributor Name</strong></td>
                                <td><strong>{record ? `${record.distributorName}` : ''}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Motor HP</strong></td>
                                <td><strong>{record ? `${record.motorHP}` : ''}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Nominal Package FlowRating</strong></td>
                                <td><strong>{record ? `${record.nominalPackageFlowRating}` : ''}</strong></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </div>
        </div>
    );
};


export const showAsset = (props) => (

    <Container id="assetShow">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Assets</h3>
            </Col>
        </Row>
        <Row>
            <Panel xs={12} md={12} lg={12} title="">
                <Row>
                    <Col md={4}>
                        <img src="../img/LS90.jpg" width="300" height="140" />
                    </Col>
                    <Col md={7}>
                        <ul id="assetInfo">
                            <li><strong>Owner Name : Georgia-Pacific Plant</strong></li>
                            <li><strong>Asset Model : LS 110</strong></li>
                            <li><strong>Asset Serial# : 1212343456</strong></li>
                            <li><strong>Model Year : 2017</strong></li>
                            <li><strong>Compressor Type : Stationary</strong></li>                            
                        </ul>                        
                    </Col>
                </Row>
            </Panel>
        </Row>        
        <Row>
            <Panel xs={12} md={12} lg={12} title="">
                <Show title="Assets" {...props}  >
                    <TabbedShowLayout >

                        <Tab label="Location" >
                            <Map vale="check" />
                        </Tab>

                        <Tab label="Data" >
                            <SensorGroupTable />
                        </Tab>

                        <Tab label="Details">
                            <AssetDetailsTab />
                        </Tab>

                        <Tab label="Alerts" filters={<AlertFilter />}>
                            <ReferenceManyField filters={<AlertFilter />}  {...props} label="" target="telematicsSerialNumber" source="telematicsSerialNumber" reference="getAssetAlerts" className="TableResponsive">
                            <AlertAssetGrid />
                                {/* <List {...props}filters={<AlertFilter />} filter={{ telematicsSerialNumber:"telematicsSerialNumber"}} title="Alerts"> */}
                                {/* <Datagrid>
                                    <TextField source="assetName" />
                                    <TextField label="Time Active" source="timeStamp" />
                                    <TextField source="alertPriority" />
                                    <TextField source="alertStatus" />
                                    <TextField source="event" className="LastChildClass" />
                                </Datagrid> */}
                                {/* </List>  */}
                            </ReferenceManyField>
                        </Tab>

                        <Tab label="Maintenance">
                            <ReferenceManyField filters={<AssetFilter />} label="" target="telematicsSerialNumber" source="telematicsSerialNumber" reference="getAssetMaintenance" className="TableResponsive">
                            <MaintenanceAssetGrid />
                                {/* <Datagrid>
                                    <TextField source="plan" />
                                    <TextField source="serviceRunHours" />
                                    <TextField source="lastService" />
                                    <TextField source="status" />
                                    <TextField source="assetName" />
                                </Datagrid> */}
                            </ReferenceManyField>
                        </Tab>
                    </TabbedShowLayout>
                </Show>
            </Panel>
        </Row>
    </Container>
);

const AlertAssetGrid = ({ ids, data, basePath }) => (
    <div style={{ gridStyle }}>

        <Table responsive style={{ tableLayout: 'auto' }}  >
            <TableHead>
                <TableRow>
                    <TableCell>Asset Name</TableCell>
                    <TableCell>Time Active#</TableCell>
                    <TableCell> Alert Priority</TableCell>
                    <TableCell>Alert Status</TableCell>
                    <TableCell>Event</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {ids.map(id => {
                    return (
                        <TableRow
                            key={id}>                          
                            <TableCell>{(data[id]).assetName}</TableCell>
                            <TableCell>{(data[id]).timeStamp}</TableCell>
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
                             {(data[id]).alertStatus == 'cleared' && (                               
                                <TableCell><Badge color='success'><DoneIcon style={{ width: 25, height: 25, paddingRight: 5 }} />Cleared</Badge></TableCell>
                            )}

                            {(data[id]).alertStatus == 'acknowledged' && (                               
                                <TableCell><Badge color='primary'><AckIcon style={{ width: 25, height: 25, paddingRight: 5 }} />Acknowledged</Badge></TableCell>
                            )}

                            {(data[id]).alertStatus == 'returned' && (                                
                                <TableCell><Badge color='info'><UndoIcon style={{ width: 25, height: 25, paddingRight: 5 }} />Returned</Badge></TableCell>
                            )}
                           
                            <TableCell>{(data[id]).event}</TableCell>                           
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </div>
)

const MaintenanceAssetGrid = ({ ids, data, basePath }) => (
    <div style={{ gridStyle }}>

        <Table responsive style={{ tableLayout: 'auto' }}  >
            <TableHead>
                <TableRow>
                    <TableCell>Plan</TableCell>
                    <TableCell>Service Run Hours</TableCell>
                    <TableCell>Last Service</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Asset Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {ids.map(id => {
                    return (
                        <TableRow
                            key={id}>                          
                            
                            <TableCell>{(data[id]).plan}</TableCell>
                            <TableCell>{(data[id]).serviceRunHours}</TableCell>
                            <TableCell>{(data[id]).lastService}</TableCell>
                            {(data[id]).status == 'due' && (                                   
                                <TableCell><Badge color='primary'><DoneIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Due</Badge></TableCell>                        
                            )}
                            {(data[id]).status == 'upcoming' && (                               
                                <TableCell><Badge color='warning'><DoneIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Upcoming</Badge></TableCell>
                            )}                           
                            {(data[id]).status == 'completed' && (
                                <TableCell><Badge color='success'><DoneIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Completed</Badge></TableCell>
                            )}                           
                            <TableCell>{(data[id]).assetName}</TableCell>                         
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </div>
)


const AssetFilter = (props) => (
    <Filter {...props}>

        <SelectArrayInput label="Maintenance Status" source="maintenanceStatus" choices={[
            { id: 'due', name: 'Due' },
            { id: 'upcoming', name: 'Upcoming' }
        ]} />

        <SelectArrayInput label="Alert Priority" source="alertPriority" choices={[
            { id: 'high', name: 'High' },
            { id: 'medium', name: 'Medium' },
            { id: 'low', name: 'Low' }
        ]} />

        <SelectInput label="Communication" source="communication" choices={[
            { id: 'c_1', name: 'Communicated Within 24 Hour' },
            { id: 'c_7', name: 'Communicated Within 7 days' },
            { id: 'c_30', name: 'Communicated Within 30 days' },
            { id: 'n_1', name: 'Not Communicated Within 24 Hour' },
            { id: 'n_7', name: 'Not Communicated Within 7 days' },
            { id: 'n_30', name: 'Not Communicated Within 30 days' },
            { id: 'n', name: 'Not Communicated Ever' }
        ]} />

    </Filter>
);


const AlertFilter = (props) => (
    <Filter {...props}>

        <SelectArrayInput label="Status" source="alertStatus" choices={[
            { id: 'active', name: 'Active' },
            { id: 'returned', name: 'Returned' },
            { id: 'acknowledged', name: 'Acknowledged' }
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

    </Filter>
);

AlertAssetGrid.defaultProps = {
    data: {},
    ids: [],
};

MaintenanceAssetGrid.defaultProps = {
    data: {},
    ids: [],
};


//filter={{ is_published: true }}