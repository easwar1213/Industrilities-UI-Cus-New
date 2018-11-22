import React from 'react';
//import { List, Datagrid, TextField,EmailField, ReferenceField } from 'react-admin';
import { SelectArrayInput, ShowButton, Show, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, SimpleShowLayout } from 'react-admin';
import Complete from './CompleteMaintenanceButton';
import MaintenanceIcon from '@material-ui/icons/Build';
import { Label, PieChart, Pie, ResponsiveContainer } from 'recharts';
import Chip from '@material-ui/core/Chip';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MaintenanceDueChart from './MaintenanceDueChart'
import MaintenanceUpcomingChart from './MaintenanceUpcomingChart'
import MaintenanceTrendChart from './MaintenanceTrendChart'
import StatusStatisticsContainer from './StatusStatisticsContainer'
import StatusTrendContainer from './StatusTrendContainer'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Col, Container, Row, Badge } from 'reactstrap';
import Panel from '../components/Panel';

const MaintenanceFilter = (props) => (
    <Filter title="Status Filter" {...props}>
        <SelectArrayInput label="Status" source="status" choices={[
            { id: 'due', name: 'Due' },
            { id: 'upcoming', name: 'Upcoming' }
        ]} />
    </Filter>
);

const data02 = [{ value: 50, fill: '#ff4861' },
{ value: 50, fill: '#eeeeee' }]

const renderActiveShape = (props) => {
    return (
        <g>
            <text x={200} y={100} dy={8} textAnchor="middle" fill="#82ca9d">{(data02[0]).value}</text>
        </g>
    )
}

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em', marginBottom: '2em' },

};

export const Maintenance = (props) => (

    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Maintenance Dashboard</h3>
            </Col>
        </Row>
        <Row>
            <br />
        </Row>
        <Row>
            <StatusStatisticsContainer/>
            <StatusTrendContainer/> 
        </Row>       
        <Row>
            <Panel xs={12} md={12} lg={12} title="Maintenance Details">
                <List title="Maintenance Dashboard" filters={<MaintenanceFilter />} {...props}>
                    <MaintenanceGrid/>
                </List>
            </Panel>
        </Row>
    </Container>

    // <Grid container spacing={24}>
    //     <Grid item xs={4}>
    //     <StatusStatisticsContainer/>
    //     </Grid>

    //     <Grid item xs ={8}>
    //         <StatusTrendContainer/>   
    //     </Grid>

    //     <Grid item xs={12}>
    //         <Paper elevation={11}>
    //             <List title="Maintenance"  {...props} filters={<MaintenanceFilter />}>
    //                 <MaintenanceGrid/>
    //                 {/* <Datagrid >
    //                     <TextField label="Plan" source="plan" />
    //                     <TextField label="Next Service" source="nextService" />
    //                     <TextField label="Last Service" source="lastService" />
    //                     <TextField label="Status" source="status" />
    //                     <TextField label="Asset Name" source="assetName" />
    //                     <Complete/>
    //                 </Datagrid> */}
    //             </List>
    //         </Paper>
    //     </Grid>
    // </Grid>
);



const gridStyle = {
    width: '60%',
    raised: true

};

const MaintenanceGrid = ({ ids, data, basePath,classes }) => (
    <div style={{ gridStyle }}>

        <Table fixedHeader={false} style={{ width: "auto", tableLayout: "auto" }} >
            <TableHead>
                <TableRow>
                    <TableCell>Plan</TableCell>
                    <TableCell colSpan={0.5}>Next Service</TableCell>
                    <TableCell>Last Service</TableCell>
                    <TableCell> Status</TableCell>
                    <TableCell>Asset Name</TableCell>
                    <TableCell>Complete Maintenance</TableCell>
               
                </TableRow>
            </TableHead>
            <TableBody>
                {ids.map(id => {
                    return (
                        <TableRow
                            //  hover
                            //  onClick={ this.handleShowSensorList(row.sensorGroup)}
                            //    onClick={event => this.handleShowSensorList(row)}
                            // value={row.sensorGroup}
                            key={id}>


                            <TableCell>{(data[id]).plan} </TableCell>
                            <TableCell>{(data[id]).nextService} </TableCell>
                            <TableCell>{new Date(parseInt((data[id]).lastService)).toLocaleString()}</TableCell>

                            {(data[id]).status == 'due' && (
                                // <TableCell>
                                //     <Chip
                                //         avatar={
                                //             <Avatar style={{ backgroundColor: '#E7E9ED', width: 30, height: 30 }} >
                                //                 <MaintenanceIcon />
                                //             </Avatar>
                                //         }
                                //         label={<Badge color='primary'>Due</Badge>}
                                //         variant="outlined"
                                //     />
                                // </TableCell>        
                                <TableCell><Badge color='primary'><MaintenanceIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Due</Badge></TableCell>                        
                            )}

                            {(data[id]).status == 'upcoming' && (
                                // <TableCell>
                                //     <Chip
                                //         avatar={
                                //             <Avatar style={{ backgroundColor: '#E7E9ED', width: 30, height: 30 }} >
                                //                 <MaintenanceIcon />
                                //             </Avatar>
                                //         }
                                //         label={<Badge color='warning'>Upcoming</Badge>}
                                //         variant="outlined"
                                //     />
                                // </TableCell>
                                <TableCell><Badge color='warning'><MaintenanceIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Upcoming</Badge></TableCell>
                            )}
                            <TableCell>{(data[id]).assetName} </TableCell>
                            <TableCell > <Complete record={(data[id])} /> </TableCell>
                            

                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </div>

)

MaintenanceGrid.defaultProps = {
    data: {},
    ids: [],
};


