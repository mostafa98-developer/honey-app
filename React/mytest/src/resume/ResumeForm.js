import React, { setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import "./resume.css";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import me from '../image/me.jpg';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(40),
    height: theme.spacing(50),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 600,
    height: 1000
  },
  text: {
    border:  'solid',
    borderBlockColor: '#3f51b5;'
  },
  Button: {
    marginTop: 10,
    marginLeft: 20
  },
  textHed: {
    color: "#3f51b5",
    fontFamily: '"Times New Roman", Times, serif'
  }
}));

export function BasicTextFields() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <h2 className={classes.textHed}>
        Contact Information <PersonPinIcon />
      </h2>
      <hr className={classes.text}></hr>
      <br></br>
      <Grid container spacing={2}>
        <Avatar alt="Remy Sharp" variant="square" src={me} className={classes.large} />
        <Typography variant="h5" component="h4" className={classes.textHed} >
          Name : Mostafa almomani<br />
          Major: Software engineering<br />
          email: mostafaalmomani896@yahoo.com<br />
          phone: 0792249795<br />
          LinkedIn: linkedin.com/in/se-mostafa-almomani-3b0384184 <br />
          BirthDate: 5/1/1998<br />
          <p><strong> Good in software development as well and I worked with personal experience and self-learning for 2 years
          in developing web applications and I aspire to learn everything new in the world of software and building
          websites</strong> </p>
        </Typography>
      </Grid>
    </Paper>
  );
}
