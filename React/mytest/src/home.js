import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Clock from './data'
import { GiHoneypot } from "react-icons/gi";
import EmojiNatureTwoToneIcon from '@material-ui/icons/EmojiNatureTwoTone';
import {backimage} from './image/672537.jpg';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
    //     backgroundImage: `url(${require("./image/672537.jpg")})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: '100%',
    //  height: 1000,
    //  marginTop: 20
        
    },
    text: {
        maxWidth: 800,
        marginLeft: 700,
        marginTop: 250,
        color: 'white',
        fontFamily: 'Times New Roman, Times, serif',
        fontSize: 40,
        // backdropFilter: 'blur(5px)'

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        fontSize: 50,
        transform:' rotate(20deg)',
        transition:  'transform 2s', /* IE 9 */
        '&:hover': {
            transform:' rotate(360deg)',
       }
    },
}));

function Home() {
    const classes = useStyles();
    const history = useHistory();
    // if (localStorage.getItem('honey_token')!=null) {
        //window.location.reload();
        return (
            <div className={classes.root}>
            <h1 className={classes.text}><GiHoneypot className={classes.avatar} /> Honey <EmojiNatureTwoToneIcon className={classes.avatar} />flower</h1>
            </div>
        )
        
    //   } else {
    //    return history.push('/SignIn');
    //   }
   
}

export default Home;

