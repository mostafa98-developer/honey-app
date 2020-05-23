import React from 'react';
import {Route} from 'react-router-dom';
import {login} from './login/login';
import  AddOrder  from './orders/addOrder';
import AdvancedGridList from './orders/listOfOrders'
import Home from './home';
import {SignUp} from './login/signUp';
export default function PersistentDrawerLeft() {
  

  return (
    <div>
     <Route path="/SignIn"  component={login } exact />
     <Route path="/addOrder"  component={AddOrder } exact />
     <Route path="/Home"  component={Home } exact />
     <Route path="/SignUp"  component={SignUp } exact />
     <Route path="/AdvancedGridList"  component={AdvancedGridList } exact />
    </div>
  );
}