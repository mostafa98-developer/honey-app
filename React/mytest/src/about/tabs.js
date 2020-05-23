import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Education from '../resume/educationInfo';
import WorkExp from '../resume/workExpe'
import Skills from '../resume/skills';
import { BasicTextFields } from '../resume/ResumeForm';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SchoolIcon from '@material-ui/icons/School';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    fontSize: 40,
   
    transition:  'transform 2s', /* IE 9 */
    '&:hover': {
        transform:' rotate(360deg)',
   },
   
}, avatar1: {
   marginLeft: "30%"
   
},
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
        className={classes.avatar1}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<PersonPinIcon className={classes.avatar}/>} aria-label="phone" {...a11yProps(0)} />
          <Tab icon={<SchoolIcon className={classes.avatar}/>} aria-label="favorite" {...a11yProps(1)} />
          <Tab icon={<DeveloperModeIcon className={classes.avatar} />} aria-label="person" {...a11yProps(2)} />
          <Tab icon={<WorkOutlineIcon className={classes.avatar} />} aria-label="help" {...a11yProps(3)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BasicTextFields />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Education />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <WorkExp />
      </TabPanel>
     
    </div>
  );
}
