import React, { Component } from "react";
import clsx from 'clsx';
import { connect } from 'react-redux';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import Clock from "../data";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import HomeIcon from '@material-ui/icons/Home';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import "./navebare.css";
import { SignIn } from '../login/login';
import { App } from '../App';
import { SimpleTabs } from '../tabs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { GiHoneypot } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { logUserOut } from '../actions';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // position: 'static',
    width: "100%",
  },
  text: {
    color: 'white',

  },
  text1: {
    color: 'white',
    transform: ' rotate(20deg)',
    transition: 'transform 2s', /* IE 9 */
    '&:hover': {
      transform: ' rotate(360deg)',
    }
  },
  appBar: {

    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  butt: {
    marginLeft: '1299px',
    color: 'white',
    fontSize: 20,
    position: "static"
    // fontFamily : "Times New Roman', Times, serif"
  },
  icon: {
    color: "white",
    fontSize: 25

  }
}));

export default function ButtonAppBar({ isAuth }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const logOutButton = () => {
    logUserOut();
    window.location.reload();
  }
  const Returnname = () => {

    // const [state, dispatch] = useStore();
    console.log(isAuth);

    if (localStorage.getItem('honey_token') != null) {
      return (
        <Button className={classes.butt} onClick={logOutButton}>Logout <Link to="/SignIn" ><FiLogIn className={classes.icon} /></Link></Button >
      )
    }
    return (
      <Button className={classes.butt}>Sign in <Link to="/SignIn" ><FiLogIn className={classes.icon} /></Link></Button >
    )
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <AppBar position="relative" style={{ backgroundColor: '#FF8C00' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <h2 className={classes.text}><Link to="/Home" className={classes.text1}><GiHoneypot className={classes.text1} /></Link> Honey flower</h2>
          {Returnname()}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {localStorage.getItem('honey_token') != null ?
          <List>
            <Link to="/addOrder">
              <ListItem button >
                <ListItemIcon> <AddBoxSharpIcon /> </ListItemIcon>
                <ListItemText primary={"اضافة طلب"} />
              </ListItem>
            </Link>
            <Link to="/orderList">
              <ListItem button >
                <ListItemIcon> <ListAltIcon /> </ListItemIcon>
                <ListItemText primary={"قائمة الطلبات"} />
              </ListItem>
            </Link>
          </List> : <Link to="/about"><ListItem button ><ListItemIcon> <AccountBoxIcon /> </ListItemIcon>
            <ListItemText primary={"about me"} /> </ListItem></Link>
        }

        <Divider />
      </Drawer>
    </div>
  );
}
const mapStateToProps = ({ auth }) => {
  return {
    isAuth: auth.isAuth
  };
};
const navebareConnect = connect(mapStateToProps)(ButtonAppBar);
export { navebareConnect }
