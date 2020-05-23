import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FontAwesome from 'react-fontawesome'
import { FaUserSecret } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import EmojiNatureTwoToneIcon from '@material-ui/icons/EmojiNatureTwoTone';
import { GiHoneypot } from "react-icons/gi";
import { register } from '../actions/auth_actions';
import './login.css'
import { useHistory } from 'react-router-dom';


function Copyright() {
    return (
        <Typography variant="body2" style={{ color: "	#D3D3D3" }} align="center">
            {'Copyright © '}
            <Link style={{ color: "	#D3D3D3" }} to="/Home">
                <EmojiNatureTwoToneIcon /> ALMOMANI GROUP
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backdropFilter: 'blur(5px)'

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    text: {
        color: "white"
    },
    text1: {
        color: "white",
        transform: ' rotate(20deg)',
        transition: 'transform 2s', /* IE 9 */
        '&:hover': {
            transform: ' rotate(360deg)',
        }
    }
}));




export function SignUp() {
    const classes = useStyles();
    const history = useHistory();
    const handelSubmit = (values) => {
        console.log(values);
        register(values, function (response) {
            if (response.match('saved profil'))
            history.push('/SignIn');
        })
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <FaUserPlus />
                </Avatar>

                <h2 className={classes.text}> <GiHoneypot className={classes.text1} /> Honey flower</h2>
                <h2>Create Account</h2>
                <Formik
                    initialValues={{ email: "", password: "", Name: "" }}
                    validationSchema={Yup.object().shape({
                        password: Yup.string()
                            .min(8, 'Too Short!')
                            .max(50, 'Too Long!')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email')
                            .required('Required'),
                        Name: Yup.string()
                            .required('Required'),
                    })}
                    onSubmit={handelSubmit}
                >
                    {({
                        handleChange, handleSubmit, isSubmitting, isValid, handleBlur, errors, touched
                    }) => (
                            <form className={classes.form} noValidate>
                                <TextField
                                    invalid="false"
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Name"
                                    label="Name"
                                    name="Name"
                                    autoComplete="Name"
                                    autoFocus
                                    InputLabelProps={{
                                        style: { color: 'white' },
                                    }}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.Name && touched.Name ? <div style={{ color: "red", fontSize: 20 }}>{errors.Name}</div> : null}
                                <TextField
                                    invalid="false"
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    InputLabelProps={{
                                        style: { color: 'white' },
                                    }}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? <div style={{ color: "red", fontSize: 20 }}>{errors.email}</div> : null}
                                <TextField
                                    invalid="false"
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    InputLabelProps={{
                                        style: { color: 'white' },
                                    }}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password ? <div style={{ color: "red", fontSize: 20 }}>{errors.password}</div> : null}

                                <Button
                                    style={{ backgroundColor: '#FF8C00', color: "white" }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                    onClick={handleSubmit}
                                // disabled={isSubmitting}
                                >
                                    Sign Up
          </Button>
                            </form>
                        )}
                </Formik>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
