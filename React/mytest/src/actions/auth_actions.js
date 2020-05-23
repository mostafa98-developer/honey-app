import { PROFILE_FEATCHED, AUTH_FAILED, AUTH_SUCCESS,USER_LOGGED_OUT } from '../actions/types';
import { api_login, apitFetchProfile ,api_register} from '../api/user';
import setAuthHeader from '../api/setAuthHeader';

import axios from 'axios';

export const signIn = (request_data,callback) => {
    console.log(request_data.email)
    const req =  api_login(request_data)
    .then((response) => { console.log(response.data)
      localStorage.setItem("id",response.data.userId)
        success(response.data.token) 
        onLodingSignIn()  
        callback(response.data);
        }).catch((error) => { Error(error) });

    // console.log("signIn here")
    // return async dispatch => {
    //     try{
    //        const {data} = await axios.post("http://localhost:3400/api/myroutes/auth", request_data)
    //        console.log(data);
    //     }catch(e){
    //         console.log(e.response.data);
    //     }
    // }
}
export const logUserOut = () => {
  localStorage.clear();
  delete axios.defaults.headers.common['Authorization'] 
  return { type: USER_LOGGED_OUT };
};

export const onLodingSignIn = () => {
    return dispatch => {
      try {
        const token = localStorage.getItem('honey_token');
        if (token === null || token === 'undefined') {
          return dispatch(Error('You need to login '));
        }
         setAuthHeader(token);
        // dispatch(getUserProfile());
        dispatch(success(token));
      } catch (e) {
        console.error(e);
      }
    };
  };
export const register = (data,callback) =>{
  const req = api_register(data).then(response => {
    console.log(response.data.message)
    callback(response.data.message)
  }).catch(e => {console.log(e)});
}
const success = (token) => {
    localStorage.setItem('honey_token', token);
    return { type: AUTH_SUCCESS }
}

const Error = (error) => {
    return { type: AUTH_FAILED, payload: error }
}