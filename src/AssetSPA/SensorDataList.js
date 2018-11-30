import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SensorDataChart from './SensorDataChart'
import { Col, Container, Row } from 'reactstrap';
function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,

};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 800,
    },
});

class SensorDataList extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        console.log(this.props)
        const { classes, theme, data, group } = this.props;
        const { value } = this.state;
        let array = [0, 1, 2]
        return (
            <div id="sensorList">
                <Row>
                    <Col md={2} id="first_grid">
                        <h6>Refer#</h6>
                    </Col>
                    <Col md={6}>
                        <h6>Chart</h6>
                        {/* <SensorDataChart group={group} chartValue={value} /> */}
                    </Col>
                    <Col md={2} id="middle_grid">
                        <Col md={12}>
                            <h6>Chart</h6>
                        </Col>
                        <Col md={12}>
                            <h6>Chart</h6>
                        </Col>
                        <Col md={12}>
                            <h6>Chart</h6>
                        </Col>
                    </Col>
                    <Col md={2} id="last_grid">
                        <h6>Sensor Values</h6>
                    </Col>
                </Row>
            </div>
        );
    }
}

SensorDataList.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SensorDataList);
