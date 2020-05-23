import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
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
import { GiHoneypot } from "react-icons/gi";
import { SignUp } from './signUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './login.css'
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import EmojiNatureTwoToneIcon from '@material-ui/icons/EmojiNatureTwoTone';
import { signIn } from '../actions'
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



export const SignIn = ({ isAuth }) => {
  const auth = true;
  const [setInfoState, setState] = React.useState('');


  const classes = useStyles();
  const history = useHistory();
  const mounted = React.useRef();
  let matchToken = "";
  const handelSubmit = (values) => {

    signIn(values, function (response) {

      matchToken = localStorage.getItem('honey_token');
      setState(matchToken);
      if (localStorage.getItem('honey_token')!=null) {
        history.push('/Home');
      }
      
    });
  }
  const _renderErrorIfAny = () => {
    console.log(isAuth);
   
    if (localStorage.getItem('honey_token')==null) {
      return <Alert severity="error">This is an error alert — check it out!</Alert>

    }
  }
  // useEffect(() => {
  //   document.title = 'Honey flower';
  // })
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
     
      <div className={classes.paper}>
     
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
        <h2 className={classes.text}>Sign in into <GiHoneypot className={classes.text1} /> Honey flower</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            password: Yup.string()
              .min(8, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email')
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
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus

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
                <FormControlLabel
                  style={{ color: "white" }}
                  control={<Checkbox value="remember" style={{ color: '#FF8C00' }} />}
                  label="Remember me"
                />
                <Button
                  style={{ backgroundColor: '#FF8C00', color: "white" }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  onClick={handleSubmit}
                // disabled={isSubmitting}
                >
                  Sign In
              </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="#" variant="body2" style={{ color: "#FFF8DC" }}>
                      Forgot password?
              </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/SignUp" variant="body2" style={{ color: "#FFF8DC" }}>
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
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
const mapState = ({ auth }) => {
  return {
    error: auth.error,
    isAuth: auth.isAuth
  };
}
const login = connect(mapState, { signIn })(SignIn);
export { login }