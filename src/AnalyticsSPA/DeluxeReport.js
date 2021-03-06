import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import DeluxeReportSummary from './DeluxeReportSummary'
//import WSUnitParameters from './WSUnitParameters'
import WS_VSD_Charts from './WS_VSD_Charts'
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabsRoot: {
    borderBottom: "1px solid #e8e8e8"
  },
  tabsIndicator: {
    backgroundColor: "#1890ff"
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1
    },
    "&$tabSelected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#40a9ff"
    }
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3
  }
});

class DeluxeReport extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div id="analysisrep" className={classes.root}>
        <div>
          <Tabs
            fullWidth
            centered
            value={value}
            onChange={this.handleChange}
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          >
            <Tab
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Summary"

            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label={"PERIOD DATA - Thirteen Month History"}
            />


            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="PERIOD DATA ()"
            />

          </Tabs>
          <div>
            {value === 0 && <TabContainer>
              <DeluxeReportSummary />
            </TabContainer>}

            {value === 1 && <TabContainer>

              <Grid label="Bar" item xs={8}>
                <Paper>
                  <br />
                  <b> <div className="repBarTitle"> Pressure</div> </b>
                  <WS_VSD_Charts fillColor="#FF6384"/>
                </Paper>
              </Grid>
              <br />
              <Grid label="Bar" item xs={8}>
                <Paper>
                  <br />
                  <b> <div className="repBarTitle"> Temp(F)</div> </b>
                  <WS_VSD_Charts fillColor="#FFCE56"/>
                </Paper>
              </Grid>
              <br />
              <Grid label="Bar" item xs={8}>
                <Paper>
                  <br />
                  <b> <div className="repBarTitle"> Flow(ACFM)</div> </b>
                  <WS_VSD_Charts fillColor="#4BC0C0"/>
                </Paper>
              </Grid>
              <br />
              <Grid label="Bar" item xs={8}>
                <Paper>
                  <br />
                  <b> <div className="repBarTitle"> Power(KW)</div> </b>
                  <WS_VSD_Charts fillColor="#36A2EB"/>
                </Paper>
              </Grid>
            </TabContainer>}
            {value === 2 && <TabContainer>
              <Grid label="Bar" item xs={8}>
                <Paper>
                  <br />
                  <b> <div className="repBarTitle"> Pressure</div> </b>
                  <WS_VSD_Charts fillColor="#FF6384"/>
                </Paper>
              </Grid>
              <br />
              <Grid label="Bar" item xs={8}>
                <Paper>
                  <br />
                  <b> <div className="repBarTitle"> Temp(F)</div> </b>
                  <WS_VSD_Charts fillColor="#FFCE56"/>
                </Paper>
              </Grid>
              <br />
              <Grid label="Bar" item xs={8}>
                <Paper>
                  <br />
                  <b> <div className="repBarTitle"> Flow(ACFM)</div> </b>
                  <WS_VSD_Charts fillColor="#4BC0C0"/>
                </Paper>
              </Grid>
              <br />
              <Grid label="Bar" item xs={8}>
                <Paper>
                  <br />
                  <b> <div className="repBarTitle"> Power(KW)</div> </b>
                  <WS_VSD_Charts fillColor="#36A2EB"/>
                </Paper>
              </Grid>
            </TabContainer>}
          </div>
        </div>
      </div>
    );
  }
}

DeluxeReport.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DeluxeReport);
