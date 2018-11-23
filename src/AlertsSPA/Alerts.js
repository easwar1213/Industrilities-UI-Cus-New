import React from 'react';
//import { List, Datagrid, TextField,EmailField, ReferenceField } from 'react-admin';
import { ChipField, Button, SelectArrayInput, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import IconButton from '@material-ui/core/IconButton';
import AcknowledgeButton from './AcknowledgeButton';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import AddCommentButton from './AddCommentButton';
import UndoIcon from '@material-ui/icons/Undo';
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AlertIcon from '@material-ui/icons/ErrorOutline';
import ClearIcon from '@material-ui/icons/Clear';
import AckIcon from '@material-ui/icons/ThumbUp';
import DoneIcon from '@material-ui/icons/Done';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import LowPriorityChart from './LowPriorityChart'
import MediumPriorityChart from './MediumPriorityChart'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import PriorityStatisticsContainer from './PriorityStatisticsContainer'
import StatusStatisticsContainer from './StatusStatisticsContainer'

import StatusTrendContainer from './StatusTrendContainer'
import Divider from '@material-ui/core/Divider';
import grey from '@material-ui/core/colors/grey';
import Refresh from '@material-ui/icons/Refresh';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PriorityTrendContainer from './PriorityTrendContainer'
import { Col, Container, Row, Badge } from 'reactstrap';
import Panel from '../components/Panel';
import { EqualIcon } from 'mdi-react';


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

const listStyles = {
    actions: {
        backgroundColor: 'Lavender',
    },
    header: {
        backgroundColor: 'Lavender',
    },
    root: {
        elevation: 11
    }
};

const themeShadow = createMuiTheme({
    shadows: {
        24: grey,
    },
});
export const Alerts = withStyles(listStyles)(({ classes, ...props }) => (

    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Alerts Dashboard</h3>
            </Col>
        </Row>
        <Row>
            <br />
        </Row>
        <Row>
            <PriorityStatisticsContainer />
            <PriorityTrendContainer />
        </Row>
        <Row>
            <StatusStatisticsContainer />
            <StatusTrendContainer />
        </Row>
        <Row>
            <Panel xs={12} md={12} lg={12} title="Alerts Details">
                <List title="Alerts Dashboard" {...props} filters={<AlertFilter />} >
                    <AlertGrid />
                </List>
            </Panel>
        </Row>
    </Container>


    //     <div style={{backgroundColor:"#ECEFF1"}}>
    //     <Grid container spacing={24}>
    //         <Grid item xs={4}>
    //             <PriorityStatisticsContainer />
    //         </Grid>


    //         <Grid item xs={8}>
    //             <PriorityTrendContainer />
    //         </Grid>

    //         <Grid item xs={4}>
    //             <StatusStatisticsContainer/>
    //         </Grid>

    //         <Grid item xs={8}>
    //             <StatusTrendContainer/>
    //         </Grid>

    //         <Grid item xs={12}>
    //             <Paper elevation={11}>
    //                 <List title="Alerts" classes={classes} {...props} filters={<AlertFilter />} >

    //                     <AlertGrid />

    //                     {/* <Datagrid >
    //              <TextField source="assetName" />
    //              <TextField label = "Time Active" source="timeStamp" />
    //              <TextField source="alertPriority" />
    //              <TextField source="alertStatus" />
    //              <TextField source="event" />
    //              <AddCommentButton />
    //             <AcknowledgeButton/>  
    //          </Datagrid> */}
    //                 </List>
    //             </Paper>
    //         </Grid>

    //     </Grid>
    // </div>



    // <List title="Alerts" {...props} filters={<AlertFilter />} >
    //     <Datagrid >
    //         <TextField source="assetName" />
    //         <TextField label = "Time Active" source="timeStamp" />
    //         <TextField source="alertPriority" />
    //         <TextField source="alertStatus" />
    //         <TextField source="event" />
    //         <AddCommentButton label ="Notes"/>
    //         <AcknowledgeButton/>  
    //     </Datagrid>
    // </List>



));


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
    raised: true

};
const AlertGrid = ({ ids, data, basePath, classes }) => (
    <div style={{ gridStyle }}>

        <Table style={{ width: "auto", tableLayout: "auto" }} >
            <TableHead>
                <TableRow>
                    <TableCell>Alert Priority</TableCell>
                    <TableCell colSpan={1}>Asset Name</TableCell>
                    <TableCell>Time Active</TableCell>
                    <TableCell> Alert Status</TableCell>
                    <TableCell>Event</TableCell>
                    <TableCell>Add Comments</TableCell>
                    <TableCell>Acknowledge / Clear</TableCell>
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



                            {(data[id]).alertPriority == 'high' && (
                                // <TableCell>
                                //     <Chip
                                //         avatar={
                                //             <Avatar style={{ backgroundColor: '#ff4861', width: 30, height: 30 }} >
                                //                 <AlertIcon />
                                //             </Avatar>
                                //         }
                                //         label={<Badge color='danger'>High</Badge>}
                                //         variant="outlined"
                                //     />
                                // </TableCell>
                                <TableCell><Badge color='danger'><ArrowUpwardIcon style={{ width: 25, height: 25,paddingRight:5 }}/>High</Badge></TableCell>
                            )}

                            {(data[id]).alertPriority == 'medium' && (
                                // <TableCell>
                                //     <Chip
                                //         avatar={
                                //             <Avatar style={{ backgroundColor: '#E7E9ED', width: 30, height: 30 }} >
                                //                 <AlertIcon />
                                //             </Avatar>
                                //         }
                                //         label={<Badge color='warning'>Medium</Badge>}
                                //         variant="outlined"
                                //     />
                                // </TableCell>
                                <TableCell><Badge color='warning'><EqualizerIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Medium</Badge></TableCell>
                            )}

                            {(data[id]).alertPriority == 'low' && (
                                // <TableCell>
                                //     <Chip
                                //         avatar={
                                //             <Avatar style={{ backgroundColor: '#E7E9ED', width: 30, height: 30 }} >
                                //                 <AlertIcon />
                                //             </Avatar>
                                //         }
                                //         label={<Badge color='secondary'>Low</Badge>}
                                //         variant="outlined"
                                //     />
                                // </TableCell>
                                <TableCell><Badge color='secondary'><ArrowDownwardIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Low</Badge></TableCell>
                            )}

                            <TableCell colSpan={1}>{(data[id]).assetName}</TableCell>
                            <TableCell>{new Date(parseInt((data[id]).timeStamp)).toLocaleString()}</TableCell>
                            {/* <TableCell>{(data[id]).alertStatus}</TableCell> */}

                            {(data[id]).alertStatus == 'active' && (
                                // <TableCell>
                                //     <Chip
                                //         avatar={
                                //             <Avatar style={{ backgroundColor: '#4ce1b6', width: 30, height: 30 }} >
                                //                 <AlertIcon />
                                //             </Avatar>
                                //         }
                                //         label={<Badge color='success'>Active</Badge>}
                                //         variant="outlined"
                                //     />
                                // </TableCell>
                                <TableCell><Badge color='success'><DoneIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Active</Badge></TableCell>
                            )}

                            {(data[id]).alertStatus == 'acknowledged' && (
                                // <TableCell>
                                //     <Chip
                                //         avatar={
                                //             <Avatar style={{ backgroundColor: "#90CAF9", width: 30, height: 30 }} >
                                //                 <AckIcon />
                                //             </Avatar>
                                //         }
                                //         label={<Badge color='primary'><AckIcon style={{ width: 30, height: 30 }}/> Acknowledged</Badge>}
                                //         variant="outlined"
                                //     />
                                // </TableCell>
                                <TableCell><Badge color='primary'><AckIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Acknowledged</Badge></TableCell>
                            )}

                            {(data[id]).alertStatus == 'returned' && (
                                // <TableCell>
                                //     <Chip
                                //         avatar={
                                //             <Avatar style={{ backgroundColor: "#5bc0de", width: 30, height: 30 }} >
                                //                 <UndoIcon />
                                //             </Avatar>
                                //         }
                                //         label={<Badge color='info'>Returned</Badge>}
                                //         variant="outlined"
                                //     />
                                // </TableCell>
                                <TableCell><Badge color='info'><UndoIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Returned</Badge></TableCell>
                            )}
                            <TableCell>{(data[id]).event} </TableCell>
                            <TableCell ><AddCommentButton record={(data[id])} /></TableCell>
                            <TableCell>  <AcknowledgeButton record={(data[id])} />  </TableCell>

                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </div>

)

AlertGrid.defaultProps = {
    data: {},
    ids: [],
};
