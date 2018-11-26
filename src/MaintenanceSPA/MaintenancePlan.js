import React from 'react';

import { ShowView, ShowController, BooleanField, ReferenceArrayField, NumberInput, FormDataConsumer, BooleanInput, Labeled, EmailField, ReferenceArrayInput, SelectArrayInput, ArrayInput, SimpleFormIterator, RichTextInput, DateInput, ArrayField, ShowButton, Show, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, SimpleShowLayout } from 'react-admin';

import { Field, reduxForm } from 'redux-form'

import { ScheduleRule } from './ScheduleRuleInput';

//import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Card,CardBody,Col, Container, Row, Badge } from 'reactstrap';
import Panel from '../components/Panel';
import Table from '../components/table/Table';

const cardStyle = {
    width: 300,
    minHeight: 80,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};



const Title = ({ record }) => {
    return <span>Maintenance Plan</span>;
};
export const MaintenancePlanList = (props) => (

    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Maintenance Plan</h3>
            </Col>
        </Row>
        {/* <Row>
            <br />
        </Row> */}
        <Row>
            <Panel xs={12} md={12} lg={12} title="Plan Details">
                <List title="Plan" {...props} title={<Title />}>
                    <Datagrid>
                        <TextField source="planName" />
                        <TextField source="description" />
                        <TextField source="tags" />
                        <ShowButton label="Show" />
                    </Datagrid>
                </List>
            </Panel>
        </Row>
    </Container>

    // <List title="Plan" {...props} title={<Title/>}>
    //     <Datagrid>
    //         <TextField source="planName" />
    //         <TextField source="description" />
    //         <TextField source="tags" />
    //         <ShowButton label="Show"/>
    //     </Datagrid>
    // </List>
);

const MyActions = ({ record }) => {
    return <span></span>
}

const PostTitle = ({ record }) => {
    return <span>Maintenance Plan / {record ? `"${record.planName}"` : ''}</span>;
};


export const MaintenancePlanShow = (props) => (
    <ShowController title="Maintenance" {...props}>
        {controllerProps =>
            <ShowView {...props} {...controllerProps}>
                <SimpleShowLayout>
                    <h3 className='page-title'>Show Maintenance Plan Details</h3>
                    <TextField source="planName" className="Cols-width"/>
                    <TextField source="description" className="Cols-width"/>
                    <TextField label="Schedule Type" source="scheduleType" className="Cols-width"/>
                    <BooleanField label="Calendar Based Schedule Rule" source="calendarBased" className="Cols-width"/>
                    <TextField source="tags" className="Cols-width"/>
                    <SimpleShowLayout className="Cols-width">
                        {controllerProps.record && controllerProps.record.meterBased &&
                            <TextField label="Due Every" record={controllerProps.record.m_DueEvery} source="m_DueEvery" />
                        }
                        {controllerProps.record && controllerProps.record.meterBased &&
                            <TextField label="Unit" source="m_unit" />
                        }
                    </SimpleShowLayout>
                    
                    <SimpleShowLayout className="Cols-width">
                        {controllerProps.record && controllerProps.record.calendarBased &&
                            <TextField label="Due Every" source="c_DueEvery" />
                        }
                        {controllerProps.record && controllerProps.record.calendarBased &&
                            <TextField label="Unit" source="c_unit" />
                        }
                    </SimpleShowLayout>

                    {/* <div class="Common-div"> */}
                    
                        <ReferenceArrayField label="Assets" source="assets" reference="getAssetListForReference" className="Cols-div-width">
                            <Datagrid>
                                <TextField source="assetName" />
                                <TextField source="model" />
                                <TextField source="telematicsSerialNumber" />
                            </Datagrid>
                        </ReferenceArrayField>

                         <ArrayField label="Notify" source="notify" className="Cols-div-width">
                            <Datagrid>
                                <TextField source="email" />
                            </Datagrid>
                        </ArrayField>

                        <ArrayField source="documentLinks" className="Cols-div-width">
                            <Datagrid>
                                <TextField source="name" />
                                <TextField source="description" />
                                <TextField source="url" />
                            </Datagrid>
                        </ArrayField>

                    {/* </div> */}
                    
                </SimpleShowLayout>
            </ShowView>
        }
    </ShowController>
);

export const MaintenancePlanEdit = props => (
    <Edit title="Maintenance" {...props}>
        <SimpleForm redirect="show" >
            <h3 className='page-title'>Edit Maintenance Plan</h3>
            <DisabledInput label="Plan Name *" source="planName" />
            <br />
            <ArrayInput label="Notify (Max 10 emails)" source="notify" >
                <SimpleFormIterator>
                    <TextInput source="email" />
                </SimpleFormIterator>
            </ArrayInput>


            {/* <ScheduleRule/> */}
            <ReferenceArrayInput label="Pick Assets" source="assets" reference="getAssetListForReference">
                <SelectArrayInput optionText="assetName" />

            </ReferenceArrayInput>

            <TextInput label="Tags" source="tags" />
            <TextInput label="Description" source="description" />
            <br />


            <SelectInput label="Schedule Type *" source="scheduleType" choices={[
                { id: 'fixed', name: 'Fixed' },
                { id: 'offset', name: 'Offset' }
            ]} />

            <BooleanInput label="Meter Based Schedule Rule *" source="meterBased" />
            <FormDataConsumer>
                {({ formData, ...rest }) => formData.meterBased &&

                    <span>
                        <NumberInput label="Due Every" source="m_DueEvery" {...rest} />
                        &nbsp;
                        <SelectInput label="Unit" source="m_unit" choices={[
                            { id: 'run', name: 'Run Hours' },
                            { id: 'miles', name: 'Miles' },
                            { id: 'km', name: 'Kilometers' }
                        ]} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <NumberInput label="Upcoming In" source="m_upcomingIn" /> hours
                    </span>
                }
            </FormDataConsumer>
            <br />

            <BooleanInput label="Calendar Based Schedule Rule *" source="calendarBased" />
            <FormDataConsumer>
                {({ formData, ...rest }) => formData.calendarBased &&

                    <span>
                        <NumberInput label="Due Every" source="c_DueEvery" {...rest} />
                        &nbsp;
                        <SelectInput label="Unit" source="c_unit" choices={[
                            { id: 'days', name: 'Days' },
                            { id: 'weeks', name: 'Weeks' },
                            { id: 'months', name: 'Months' },
                            { id: 'years', name: 'Years' }
                        ]} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <NumberInput label="Upcoming In" source="c_upcomingIn" /> Days
                    </span>
                }
            </FormDataConsumer>

            <br />
            <br />
            <ArrayInput label="Document Links" source="documentLinks">
                <SimpleFormIterator>
                    <TextInput label="Name" source="name" />
                    <TextInput label="Description" source="description" />
                    <TextInput label="URL" source="url" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const MaintenancePlanCreate = (props) => (
    <Create title="Maintenance" {...props}>
        <SimpleForm redirect="show">
            <h3 className='page-title'>Create Maintenance Plan</h3>
            <TextInput label="Plan Name *" source="planName" />
            <br />
            <ArrayInput label="Notify (Max 10 emails)" source="notify" >
                <SimpleFormIterator>
                    <TextInput source="email" />
                </SimpleFormIterator>
            </ArrayInput>


            {/* <ScheduleRule/> */}
            <ReferenceArrayInput label="Pick Assets" source="assets" reference="getAssetListForReference">
                <SelectArrayInput optionText="assetName" />

            </ReferenceArrayInput>

            <TextInput label="Tags" source="tags" />
            <TextInput label="Description" source="description" />
            <br />


            <SelectInput label="Schedule Type *" source="scheduleType" choices={[
                { id: 'fixed', name: 'Fixed' },
                { id: 'offset', name: 'Offset' }
            ]} />

            <BooleanInput label="Meter Based Schedule Rule *" source="meterBased" />
            <FormDataConsumer>
                {({ formData, ...rest }) => formData.meterBased &&

                    <span>
                        <NumberInput label="Due Every" source="m_DueEvery" {...rest} />
                        &nbsp;
                        <SelectInput label="Unit" source="m_unit" choices={[
                            { id: 'run', name: 'Run Hours' },
                            { id: 'miles', name: 'Miles' },
                            { id: 'km', name: 'Kilometers' }
                        ]} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <NumberInput label="Upcoming In" source="m_upcomingIn" /> hours
                    </span>
                }
            </FormDataConsumer>
            <br />

            <BooleanInput label="Calendar Based Schedule Rule *" source="calendarBased" />
            <FormDataConsumer>
                {({ formData, ...rest }) => formData.calendarBased &&

                    <span>
                        <NumberInput label="Due Every" source="c_DueEvery" {...rest} />
                        &nbsp;
                        <SelectInput label="Unit" source="c_unit" choices={[
                            { id: 'days', name: 'Days' },
                            { id: 'weeks', name: 'Weeks' },
                            { id: 'months', name: 'Months' },
                            { id: 'years', name: 'Years' }
                        ]} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <NumberInput label="Upcoming In" source="c_upcomingIn" /> Days
                    </span>
                }
            </FormDataConsumer>

            <br />
            <br />
            <ArrayInput label="Document Links" source="documentLinks">
                <SimpleFormIterator>
                    <TextInput label="Name" source="name" />
                    <TextInput label="Description" source="description" />
                    <TextInput label="URL" source="url" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

{/* <ArrayField source="assests">
    <Datagrid>
        <TextField source="assetName" />
        <TextField source="runHours" />
        <TextField source="assetId" />
        <TextField source="startDate" />
    </Datagrid>
</ArrayField> */}

{/* <DateInput label="Publication date" source="published_at" defaultValue={new Date()} /> */ }

{/* <ReferenceArrayInput source="assetName" reference="getAssetList">
<SelectArrayInput optionText="name" />
</ReferenceArrayInput> */}