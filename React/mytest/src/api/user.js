import axios from 'axios';


export const api_login = (req) => {
    const token = localStorage.getItem('honey_token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios({
        headers: {
            'content-type': 'application/json'
        },
        method: 'post',
        url: `http://localhost:3400/api/myroutes/auth`,
        data: {
            email: req.email,
            password: req.password
        }
    });
    
}

export const api_register = (profile) => {
    return axios({
        headers: {
            'content-type': 'application/json'
        },
        method: 'post',
        url: `http://localhost:3400/api/myroutes/regisetr`,
        data: {
            name: profile.Name,
            email: profile.email,
            password: profile.password
        }
    });
  }