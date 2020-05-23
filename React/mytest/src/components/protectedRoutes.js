import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRouteComponent = ({ isAuth, component: Component, ...rest }) => {
    console.log(isAuth);
    if (localStorage.getItem('honey_token')!=null){
        isAuth = true;
    }
    return (
        <Route 
         {...rest}
         render={props => isAuth ? <Component {...props}/>  : <Redirect to='/SignIn'/> }
        />
        
    );
}
 
const mapStateToProps =  ({auth})  => {
    console.log(auth.isAuth)
     return {
        isAuth: auth.isAuth
    };
};

const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteComponent);
export { ProtectedRoute };