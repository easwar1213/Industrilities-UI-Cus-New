import React from 'react';
//import { List, Datagrid, TextField,EmailField, ReferenceField } from 'react-admin';
import { SimpleShowLayout, ShowButton, Show, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput,ReferenceManyField } from 'react-admin';



export const MaintenanceHistory = (props) => (

    <List title="Maintenance History" {...props} filter={{ status: "completed" }} >
        <Datagrid>
            <TextField source="plan" />
            <TextField source="assetName" />
            <TextField source="status" />
            <TextField label="Completed At" source="serviceDate" />
            <ShowButton />
        </Datagrid>

    </List>
);


const MaintenanceHistoryTitle = ({ record }) => {
    return <span>Maintenance History / Details </span>;
};

export const MaintenanceHistoryDetails = (props) => (

    <Show {...props}  >
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

        <SimpleShowLayout>
            <TextField label="Asset" source="assetName" />
            <TextField source="plan" />
            <TextField lable="Work Order #" source="workOrder" />
            <TextField label="Completed By" source="completedBy" />
            <TextField label="Service Run Hours" source="serviceRunHours" />
            <TextField label="Service Date" source="dateOfService" />
            <TextField source="status" />
        </SimpleShowLayout>

    </Show>
);

