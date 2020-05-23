import React, { Component, useState, useEffect } from 'react';
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
import WorkIcon from '@material-ui/icons/Work'; import './resume.css'
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

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

function WorkExp() {

    const classes = useStyle();

    return (
        <Paper className={classes.paper}>
            <h2 className={classes.textHed}>Work Experince <WorkIcon /></h2>
            <hr className={classes.text}></hr><br></br>
            <Grid container spacing={2}>
                <Typography variant="h5" component="h4" className={classes.textHed} >
                    <ul>
                        <li>Software Engineer
                        JUST University
                        Jordan,Irbid
                        Work in my graduation project mean stack web developer
                        (Angular, NoSql MongoDB ,HTML, CSS, Bootstrap, Nodejs,Angular material)</li>

                        <li>Web developer (Trining)
                        Realsoft
                        Work front-back end with framework NodeJs, angular6</li>


                    </ul>
                    <h5>PERSONAL PROJECTS</h5>
                    <ul>
                        <li>Submit job vacancies (jsp ,servlet) (2018)</li>

                        <li>Graduation project (Resume and job match ) (2019)
My graduation project was a simulation of a job search website that suits those looking for a job, such as Indeed, and was developed with a Framework Angular, Nodejs, MongoDB</li>

                        <li>Record order of honey (MERN Stack) (05/2020 – Present)
Develope with nodejs express.js monoDB reactjs</li>
                    </ul>

                </Typography>
            </Grid>
        </Paper >
    );

}
export default WorkExp;

