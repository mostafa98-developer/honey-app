import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'react-quill/dist/quill.snow.css'; // ES6
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill'; // ES6
import SchoolIcon from '@material-ui/icons/School';
import './resume.css'
import Typography from '@material-ui/core/Typography';


const useStyle = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
    height: 800
  },
  text: {
    border:  'solid',
    borderBlockColor: '#3f51b5;'
  },
  textHed: {
    color: '#3f51b5',
    fontFamily: '"Times New Roman", Times, serif'
  }
}));

function Education() {

  const [selectedDate, setSelectedDate] = useState(new Date('1990-08-18T21:11:54'));
  const classe = useStyle();
  const handleDateChang = (date) => {
    setSelectedDate(date);
  };
  return (
    <Paper className={classe.paper}>
      <h2 className={classe.textHed}>Education Information <SchoolIcon /></h2>
      <hr className={classe.text}></hr><br></br>
      <Grid container spacing={2}>
        <Typography variant="h5" component="h4" className={classe.textHed}>
          Software Engineering at
          Jordan University of Science and Technology,
          Irbid, Ir Bachelor of Science,
      </Typography>
      </Grid>
    </Paper >
  );

}

export default Education;
