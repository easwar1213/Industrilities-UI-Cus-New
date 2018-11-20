import React from 'react';
//import { List, Datagrid, TextField,EmailField, ReferenceField } from 'react-admin';
import { BooleanInput, SimpleShowLayout, SimpleList, ReferenceManyField, ReferenceArrayField, SelectArrayInput, Show, ShowButton, Tab, TabbedShowLayout, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import Grid from "@material-ui/core/Grid";
//import Mymap from './map';

import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import Paper from "@material-ui/core/Paper";
import ClusterMapInfo from './ClusterMapInfo'
import Panel from '../components/Panel';


export const MapView = (props) => (
    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Map</h3>
            </Col>
        </Row>
        <Row>
            <br />
        </Row>
        <Row>
            <Panel xs={12} md={12} lg={12} title="Map Details">
                <ClusterMapInfo />
            </Panel>
        </Row>
    </Container>

    // <div>
    //     {/* <Paper> */}
    //     {/* <Row>
    //             <SimpleModal/>
    //         </Row>
    //         <Row> */}
    //     <ClusterMapInfo />
    //     {/* </Row> */}
    //     {/* </Paper> */}
    // </div>
);