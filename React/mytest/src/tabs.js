import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { BasicTextFields } from './resume/ResumeForm';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import SchoolIcon from '@material-ui/icons/School';
import Button from '@material-ui/core/Button';
import Education from './resume/educationInfo'
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import WorkExp from './resume/workExpe'
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import Skills from './resume/skills';
import Form from './data';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: '#87e0f8'

  },
  Button: {
    marginTop: 10
  },
}));

export function SimpleTabs() {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const a11yPropss = (_index) => {
    a11yProps(_index);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Contact Information" icon={<PersonPinIcon />} {...a11yProps(0)} />
          <Tab label="Education Information" icon={<SchoolIcon />} {...a11yProps(1)} />
          <Tab label="Work Experience" icon={<WorkOutlineIcon />} {...a11yProps(2)} />
          <Tab label="Skills" icon={<DeveloperModeIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BasicTextFields />
        <Button variant="contained" color="primary" click={a11yPropss(1)} className={classes.Button}>
          Save & Next
      </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Education />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WorkExp />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Skills />
      </TabPanel>
    </div>
  );
}
