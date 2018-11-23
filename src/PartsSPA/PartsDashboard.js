import React from 'react';
import { BooleanInput, SimpleShowLayout, SimpleList, ReferenceManyField, ReferenceArrayField, SelectArrayInput, Show, ShowButton, Tab, TabbedShowLayout, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Paper from "@material-ui/core/Paper";
import withStyles from '@material-ui/core/styles/withStyles';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PartsValidityChart from './PartsValidityChart'
import PartsStatusChart from './PartsStatusChart'
import AfterMarketChart from './AfterMarketChart'
import ValidityStatisticsContainer from './ValidityStatisticsContainer'
import StatusStatisticsContainer from './StatusStatisticsContainer'
import SimpleTable from './PartsDashBoardDataTable'
import ValidityTrendContainer from './ValidityTrendContainer'
import StatusTrendContainer from './StatusTrendContainer'
import BlockIcon from '@material-ui/icons/Block';
import DoneIcon from '@material-ui/icons/Done';
import AlertIcon from '@material-ui/icons/ErrorOutline';
import ClearIcon from '@material-ui/icons/Clear';
import AckIcon from '@material-ui/icons/ThumbUp';
import { Col, Container, Row, Badge } from 'reactstrap';
import Panel from '../components/Panel';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        maxWidth: 400,
    },
});

const gridStyle = {
    width: '60%',
};

const PartsDataGrid = (({ ids, data, basePath, classes }) => (
    <div style={{ gridStyle }}>
        <Table responsive style={{ tableLayout: 'auto' }} id="partstbl">
            <TableHead>
                <TableRow>
                    <TableCell>Part Serial Number</TableCell>
                    <TableCell >Part Number</TableCell>
                    <TableCell >Tag Id</TableCell>
                    <TableCell > Asset Serial Number</TableCell>
                    <TableCell>Asset Model</TableCell>
                    {/* <TableCell >Gateway Id</TableCell> */}
                    <TableCell > Life Time (Days)</TableCell>
                    <TableCell >Validity</TableCell>
                    <TableCell >Valid Till</TableCell>
                    <TableCell  >Part Status</TableCell>
                    {/* <TableCell > Last Reported</TableCell> */}
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
                            <TableCell>{(data[id]).partSerialNumber}</TableCell>
                            <TableCell>{(data[id]).partNumber}</TableCell>
                            <TableCell>{(data[id]).tagId}</TableCell>
                            <TableCell>{(data[id]).telematicsSerialNumber}</TableCell>
                            <TableCell>{(data[id]).model}</TableCell>
                            {/* <TableCell>{(data[id]).gatewayId}</TableCell> */}
                            <TableCell>{(data[id]).lifeTime}</TableCell>
                            {(data[id]).validity == "Valid" && (
                                //      <TableCell>
                                //      <Chip
                                //          avatar={
                                //              <Avatar style={{ backgroundColor: '#81C784', width: 30, height: 30 }} >
                                //                  <DoneIcon />
                                //              </Avatar>
                                //          }
                                //          label="Valid "
                                //          // color="default"
                                //          variant="outlined"
                                //      />
                                //  </TableCell>
                                // <TableCell style={{ backgroundColor: "#63D16C" }} >{(data[id]).validity}</TableCell>
                                // <TableCell><Badge color='success'>{(data[id]).validity}</Badge></TableCell>
                                <TableCell><Badge color='success'><DoneIcon style={{ width: 25, height: 25,paddingRight:5 }}/>{(data[id]).validity}</Badge></TableCell>
                            )}
                            {(data[id]).validity == "NA" && (
                                // <TableCell style={{ backgroundColor: "grey" }} >{(data[id]).validity}</TableCell>
                                // <TableCell><Badge color='secondary'>{(data[id]).validity}</Badge></TableCell>
                                <TableCell><Badge color='secondary'><BlockIcon style={{ width: 25, height: 25,paddingRight:5 }}/>{(data[id]).validity}</Badge></TableCell>
                            )}

                            {(data[id]).validity == "Due For Replacement" && (
                                //      <TableCell>
                                //      <Chip
                                //          avatar={
                                //              <Avatar style={{ backgroundColor: '#F4D03F', width: 30, height: 30 }} >
                                //                  <AlertIcon />
                                //              </Avatar>
                                //          }
                                //          label="Due For Replacement"
                                //          // color="default"
                                //          variant="outlined"
                                //      />
                                //  </TableCell>
                                // <TableCell style={{ backgroundColor: "#FFE000" }} >{(data[id]).validity}</TableCell>
                                // <TableCell><Badge color='warning'>{(data[id]).validity}</Badge></TableCell>
                                <TableCell><Badge color='warning'><AlertIcon style={{ width: 25, height: 25,paddingRight:5 }}/>{(data[id]).validity}</Badge></TableCell>
                            )}
                            {(data[id]).validity == "Expired" && (
                                // <TableCell style={{ backgroundColor: "red" }} >{(data[id]).validity}</TableCell>
                                // <TableCell><Badge color='danger'>{(data[id]).validity}</Badge></TableCell>
                                <TableCell><Badge color='danger'><ClearIcon style={{ width: 25, height: 25,paddingRight:5 }}/>{(data[id]).validity}</Badge></TableCell>
                            )}
                            <TableCell>{(data[id]).validTill}</TableCell>


                            {(data[id]).partStatus == "Unauthorized" && (
                                // <TableCell>
                                //     <Chip
                                //         avatar={
                                //             <Avatar style={{ backgroundColor: '#D81B60', width: 30, height: 30 }} >
                                //                 <BlockIcon />
                                //             </Avatar>
                                //         }
                                //         label=" Unauthorized "
                                //         // color="default"
                                //         variant="outlined"
                                //     />
                                // </TableCell>
                                // <TableCell><Badge color='danger'>Unauthorized</Badge></TableCell>
                                <TableCell><Badge color='danger'><BlockIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Unauthorized</Badge></TableCell>
                            )}

                            {(data[id]).partStatus == "Authorized" && (
                                // <TableCell>
                                //     <Chip
                                //         avatar={
                                //             <Avatar style={{ backgroundColor: '#81C784', width: 30, height: 30 }} >
                                //                 <DoneIcon />
                                //             </Avatar>
                                //         }
                                //         label=" Authorized "
                                //         // color="default"
                                //         variant="outlined"
                                //     />
                                // </TableCell>
                                // <TableCell style={{ backgroundColor: "#63D16C" }} >{(data[id]).partStatus}</TableCell>
                                // <TableCell><Badge color='success'>Authorized</Badge></TableCell>
                                <TableCell><Badge color='success'><AckIcon style={{ width: 25, height: 25,paddingRight:5 }}/>Authorized</Badge></TableCell>
                            )}
                            {/* <TableCell>{(data[id]).lastReported}</TableCell> */}

                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>

    </div>

))
PartsDataGrid.defaultProps = {
    data: {},
    ids: [],
};


const listStyles = {
    root: {
        maxWidth: '18em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

//export const PartsDashboard = (props) => (
export const PartsDashboard = ({ ...props }) => (
    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Parts</h3>
            </Col>
        </Row>
        {/* <Row>
            <br />
        </Row> */}
        <Row>
            <ValidityStatisticsContainer />
            <ValidityTrendContainer />
        </Row>
        <Row>
            <StatusStatisticsContainer />
            <StatusTrendContainer />
        </Row>
        <Row>
            <Panel xs={12} md={12} lg={12} title="Parts Details">
                <List title="Parts Dashboard" filters={<PartsFilter />} {...props}>
                    <PartsDataGrid />
                </List>
            </Panel>
        </Row>
    </Container>

    // <Grid container spacing={24}>
    //     <Grid item xs={4}>
    //         <ValidityStatisticsContainer />
    //     </Grid>

    //     <Grid item xs={8}>
    //         <ValidityTrendContainer />
    //     </Grid>
    //     <Grid item xs={4}>
    //         <StatusStatisticsContainer />
    //     </Grid>

    //     <Grid item xs={8}>
    //         <StatusTrendContainer />
    //     </Grid>

    //     <Grid item xs={12}>
    //         <Paper elevation={11}>
    //             <List title="Parts Dashboard" filters={<PartsFilter />} {...props}>
    //                 <PartsDataGrid />
    //             </List>
    //         </Paper>
    //     </Grid>
    // </Grid>
)


const PartsFilter = (props) => (

    <Filter {...props}>

        <SelectArrayInput label="Part Status" source="partStatus" choices={[
            { id: 'Authorized', name: 'Authorized' },
            { id: 'Unauthorized', name: 'Unauthorized' }
        ]} />
        <SelectArrayInput label="Validity" source="validity" choices={[
            { id: 'Active', name: 'Active' },
            { id: 'Expired', name: 'Expired' },
            { id: 'Renewal Required', name: 'Renewal Required' }
        ]} />

    </Filter>
);