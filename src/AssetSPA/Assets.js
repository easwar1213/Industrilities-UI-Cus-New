import React from 'react';
//import { List, Datagrid, TextField,EmailField, ReferenceField } from 'react-admin';
import { Responsive, BooleanInput, SimpleShowLayout, SimpleList, ReferenceManyField, ReferenceArrayField, SelectArrayInput, Show, ShowButton, Tab, TabbedShowLayout, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { Col, Container, Row } from 'reactstrap';
import Map from './map';
import SensorGroupTable from './SensorGroupTable';
import Table from '../components/table/Table';
import Panel from '../components/Panel';
import { Card, CardBody } from 'reactstrap';
import Collapse from '../components/Collapse';
import { Badge } from 'reactstrap';
import '../index.css';

export const AssetList = (props) => (

    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Assets</h3>
            </Col>
        </Row>
        {/* <Row>
            <br />
        </Row> */}
        <Row>
            {/* <AssetDetails /> */}
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
                        {/* <thead className="table-heading">
                            <tr width="100%">
                                <th width="50%">Field Name</th>
                                <th width="50%">Values</th>
                            </tr>
                        </thead> */}
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

//export const showAsset = (props) => (

//     <Show title="Assets" {...props}  >
//             <Map vale="check" />    
//         {/* <Card>
//             <CardBody>
//                 <Collapse className="with-shadow" title="Device Details ">
//                     <div class="card">
//                         <div class="card-body">
//                             <Map vale="check" />
//                         </div>
//                     </div>
//                 </Collapse>
//                 <Collapse className="with-shadow" title="Device Details ">
//                     <div class="card">
//                         <div class="card-body">
//                             <SensorGroupTable />
//                         </div>
//                     </div>
//                 </Collapse>
//                 <Collapse className="with-shadow" title="Device Details ">
//                     <div class="card">
//                         <div class="card-body">
//                             <AssetDetailsTab />
//                         </div>
//                     </div>
//                 </Collapse>
//                 <Collapse className="with-shadow" title="Device Details ">
//                     <div class="card">
//                         <div class="card-body">
//                             <ReferenceManyField filters={<AlertFilter />}  {...props} label="Alerts" target="telematicsSerialNumber" source="telematicsSerialNumber" reference="getAssetAlerts" className="TableResponsive">
//                                 <Datagrid>
//                                     <TextField source="assetName" />
//                                     <TextField label="Time Active" source="timeStamp" />
//                                     <TextField source="alertPriority" />
//                                     <TextField source="alertStatus" />
//                                     <TextField source="event" />
//                                 </Datagrid>
//                             </ReferenceManyField>
//                         </div>
//                     </div>
//                 </Collapse>
//                 <Collapse className="with-shadow" title="Device Details ">
//                     <div class="card">
//                         <div class="card-body">
//                             <ReferenceManyField filters={<AssetFilter />} label="Maintenance" target="telematicsSerialNumber" source="telematicsSerialNumber" reference="getAssetMaintenance" className="TableResponsive">
//                                 <Datagrid>
//                                     <TextField source="plan" />
//                                     <TextField source="serviceRunHours" />
//                                     <TextField source="lastService" />
//                                     <TextField source="status" />
//                                     <TextField source="assetName" />
//                                 </Datagrid>
//                             </ReferenceManyField>
//                         </div>
//                     </div>
//                 </Collapse>
//             </CardBody>
//         </Card>     */}
//     </Show >
// );


export const showAsset = (props) => (
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
                {/* <h5 class="bold-text heading-txt">Alert Details</h5> */}
                <ReferenceManyField filters={<AlertFilter />}  {...props} label="" target="telematicsSerialNumber" source="telematicsSerialNumber" reference="getAssetAlerts" className="TableResponsive">
                    {/* <List {...props}filters={<AlertFilter />} filter={{ telematicsSerialNumber:"telematicsSerialNumber"}} title="Alerts"> */}
                    <Datagrid>
                        <TextField source="assetName" />
                        <TextField label="Time Active" source="timeStamp" />
                        <TextField source="alertPriority" />
                        <TextField source="alertStatus" />
                        <TextField source="event" className="LastChildClass" />
                    </Datagrid>
                    {/* </List>  */}
                </ReferenceManyField>
            </Tab>

            <Tab label="Maintenance">
                {/* <h5 class="bold-text heading-txt">Maintenance Details</h5> */}
                <ReferenceManyField filters={<AssetFilter />} label="" target="telematicsSerialNumber" source="telematicsSerialNumber" reference="getAssetMaintenance" className="TableResponsive">
                    <Datagrid>
                        <TextField source="plan" />
                        <TextField source="serviceRunHours" />
                        <TextField source="lastService" />
                        <TextField source="status" />
                        <TextField source="assetName" />
                        {/* <ShowButton /> */}

                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>

    </Show >
);


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
//filter={{ is_published: true }}