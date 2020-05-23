import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import './resume.css'
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill'; // ES6
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
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
        border: 'solid',
        borderBlockColor: '#3f51b5;'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    textHed: {
        color: '#3f51b5',

        fontFamily: '"Times New Roman", Times, serif'
    }
}));

export default function Skills() {

    const classes = useStyles();
   
    return (
        <Paper className={classes.paper}>
            <h2 className={classes.textHed}>Skills <DeveloperModeIcon /></h2>
            <hr className={classes.text}></hr><br></br>
            <Grid container spacing={2}>
                <Typography variant="h5" component="h4" className={classes.textHed} >
                   <ul>
                       <li>Work with Nodejs Framework</li>
                       <li> Express.js</li>
                       <li>Good practice Object-Oriented Programming (OOP)</li>
                       <li>FULL-Stack Web Development</li>
                       <li>HTML</li>
                       <li>Javascript</li>
                       <li>CSS</li>
                       <li>NoSql MongoDB</li>
                       <li>Angular2+, React.js</li>
                       <li>programming language (c++, java, c#)</li>
                       <li>spring boot</li>
                       <li>sql</li>
                       <li>Good practice in the Software Development Life Cycle
(SDLC)</li>
                   </ul>
                </Typography>
            </Grid>
        </Paper >
    );

}


