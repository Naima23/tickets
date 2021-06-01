//material-ui
import React , {useState}  from  'react';
// import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

axios.defaults.withCredentials = true

export default function Home(props) {

        // const history = useHistory();
        
        const [data, setData] = useState({email:'', password:''})

        //**********technicien * 

        const handlechange = (e)=>{
              setData({...data, [e.target.name]: e.target.value})  
            }
              console.log(data)


        const oncklic = async (e)=>{
            e.preventDefault()
           
              const res = await axios.post('http://localhost:3012/api/login',data,{ withCredentials: true }) // to passing of cookies, we use the withCredentials
              if(res){
               if(res.data.isAuth && res.data.role === 'admin') props.history.push('/Admin')
               if(res.data.isAuth && res.data.role === 'user') props.history.push('/User')
               if(res.data.isAuth && res.data.role === 'technicien') props.history.push('/Technicien')
             }
              
        }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handlechange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlechange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={oncklic}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}


// function Copyright() {
//         return (
//           <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//               Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//           </Typography>
//         );
//       }
      
      const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
      }));