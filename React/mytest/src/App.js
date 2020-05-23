import React from 'react';
import logo from './logo.svg';
import { SimpleDialog, SimpleDialogDemo } from './resume/resume';
import { SimpleTabs } from './tabs';
import MaterialUIPickers from './data';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';
import Navebare from './navebare/navebare'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Container from '@material-ui/core/Container';
import Clock from './data';
import { Route, Switch } from 'react-router-dom';
import { login } from './login/login';
import {SignUp} from './login/signUp';
import  AddOrder  from './orders/addOrder';
import AdvancedGridList from './orders/listOfOrders'
import Home from './home';
import PersistentDrawerLeft from './test11'
import { ProtectedRoute } from './components/protectedRoutes';
import ScrollableTabsButtonPrevent from './about/tabs';
function App() {

  return (
    <div className="App"> 
    {/* <ScrollableTabsButtonPrevent /> */}
      <Navebare />
     
        <Switch>
          <ProtectedRoute path="/" component={Home} exact />
          <ProtectedRoute path="/addOrder"  component={AddOrder } exact />
          <ProtectedRoute path="/orderList"  component={AdvancedGridList } exact />
        </Switch>
        <Route path="/SignIn"  component={login } exact />
        <Route path="/SignUp"  component={SignUp } exact />
        <Route path="/Home"  component={Home } exact />
        <Route path="/about"  component={ScrollableTabsButtonPrevent } exact />

      {/* <Clock style={{display: 'inline-block'}}/> */}

      {/* <SimpleDialog />
        <SimpleDialogDemo /> */}

      {/* <SimpleMap /> */}
      {/* <PersistentDrawerLeft /> */}

    </div>
  );
}

export default App;
