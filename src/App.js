import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { AssetList, showAsset } from '././AssetSPA/Assets';
import { DeviceList, showDevice } from '././DevicesSPA/Devices';

import UserIcon from '@material-ui/icons/People';
//import Dashboard from './Dashboard';

import authProvider from './authProvider';

import { func } from 'prop-types';

import MaintenanceHistoryIcon from '@material-ui/icons/Build';
import LocationIcon from '@material-ui/icons/LocationOn';
import AssetIcon from '@material-ui/icons/CastConnected';
import AnalytcisIcon from '@material-ui/icons/PieChart';
import AlertConfigIcon from '@material-ui/icons/AddCircleOutline';
import AlertDashboard from '@material-ui/icons/ErrorOutline';
import HistoryAlertIcon from '@material-ui/icons/Error';
import DeviceIcon from '@material-ui/icons/Router';
import AlertIcon from '@material-ui/icons/Warning';
import NotFound from './NotFound';
import Login from './CustomLoginPage';
import dataProvider from './dataProvider';
import CustomLoginPage from './CustomLoginPage';
import CustomLayout from './CustomLayout'
import './index.css';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { MapView } from '././MapSPA/MapView';
import Dashboard from '././DashboardSPA/Dashboard';

import {PartsCustomerView,ShowCustomerAssets} from '././PartsSPA/Customers';
import {PartsDashboard} from '././PartsSPA/PartsDashboard';

import { MaintenancePlanList, MaintenancePlanShow, MaintenancePlanEdit, MaintenancePlanCreate } from '././MaintenanceSPA/MaintenancePlan';
import { Maintenance, MaintenanceShow } from '././MaintenanceSPA/Maintenance';
import { MaintenanceHistory, MaintenanceHistoryDetails } from '././MaintenanceSPA/MaintenanceHistory';

import { Alerts } from '././AlertsSPA/Alerts';
import { AlertsHistory } from '././AlertsSPA/AlertHistory';
import { AlertConfiguration, createAlertConfiguration, showAlertConfiguration, editAlertConfiguration } from '././AlertsSPA/AlertConfiguration'

import { AnalyticsView, ShowReport } from '././AnalyticsSPA/Analytics';


class App extends React.Component {

  render() {
    console.log(this.props)
    return (

      <Admin
        title="Fleet-Admin"
        catchAll={NotFound}
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={dataProvider}
        loginPage={Login}
        appLayout={CustomLayout}
      >

      <Resource
          name="getDashboardData"
          options={{ label: 'Dashboard' }}
          list={Dashboard}
          icon={DashboardIcon}
        />

        <Resource
          name="getMapViewData"
          options={{ label: 'Map' }}
          list={MapView}
          icon={LocationIcon}
        />

        <Resource
          name="getAssetList"
          options={{ label: 'Assets' }}
          list={AssetList}
          show={showAsset}
          icon={AssetIcon}
        />

        <Resource
          name="getDeviceList"
          options={{ label: 'Devices' }}
          list={DeviceList}
          show={showDevice}
          icon={DeviceIcon}
        />

        <Resource name="getListOfCustomers"
          options={{ label: 'Parts' }}
          list={PartsCustomerView}
          show={ShowCustomerAssets}
          //icon={AnalytcisIcon}
        />

        <Resource
          name="getMaintenance"
          options={{ label: 'Maintenance Dashboard' }}
          list={Maintenance}
          icon={MaintenanceHistoryIcon} 
        />
  
        <Resource
          name="getListOfMaintenancePlan"
          options={{ label: 'Maintenance Plan' }}
          show={MaintenancePlanShow}
          list={MaintenancePlanList}
          edit={MaintenancePlanEdit}
          create={MaintenancePlanCreate}
        />  
  
        <Resource
          name="getMaintenanceHistory"
          options={{ label: 'Maintenance History' }}
          list={MaintenanceHistory}
          show={MaintenanceHistoryDetails}
          icon={MaintenanceHistoryIcon} 
        />

        <Resource
          name="getAlerts"
          options={{ label: 'Alerts Dashboard' }}
          list={Alerts}
          icon={AlertDashboard}
        />
  
        <Resource
          name="getAlerstHistory"
          options={{ label: 'Historical Alerts' }}
          list={AlertsHistory}
          icon={HistoryAlertIcon}
        />  
  
        <Resource name="getListOfAlertConfiguration"
          options={{ label: 'Alert Configuration' }}
          list={AlertConfiguration} icon={AlertIcon}
          create={createAlertConfiguration}
          show={showAlertConfiguration}
          edit={editAlertConfiguration}
          icon={AlertConfigIcon}
        />
  
       <Resource name="getPartsStatus"
          options={{ label: 'Parts Dashboard' }}
          list={PartsDashboard}
        //  show={ShowCustomerAssets}
          //icon={AnalytcisIcon}
        />

        <Resource name="getListOfAnalyticsReports"
          options={{ label: 'Analytics' }}
          list={AnalyticsView}
          show={ShowReport}
          icon={AnalytcisIcon}
        />


        <Resource name="getAssetListForReference" />
        <Resource name="getListOfDataPoints" />

        <Resource name="getAssetAlerts" />
        <Resource name="getAssetMaintenance" />

        <Resource name="getListOfAttributes" />
        <Resource name="getAssetCurrentData" />

      </Admin>


    )
  }

}

export default App;

