import React,{useState} from 'react';

//material-ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';


export default function SignUp(props) {
  const classes = useStyles();

  const [data, setData] = useState({nom:'', prenom:'', email:'', password:'', role: 'user'})
  //**********technicien */
  const handlechange = (e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }
 
  /************************/
  console.log(data)


  function onCreatePost(e) {
          e.preventDefault();
          axios.post('http://localhost:3012/api/register', data)
            .then((response) => {
              console.log(response.data)
            });
          props.history.push('/Login')
    }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="nom"
                name="nom"
                variant="outlined"
                required
                fullWidth
                id="nom"
                label="Nom"
                autoFocus
                onChange={handlechange}
              />

            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="prenom"
                label="Prenom" //Département
                name="prenom"
                autoComplete="prenom"
                onChange={handlechange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handlechange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlechange}
              />
            </Grid>
            <Grid item xs={12}>
            <InputLabel id="label" item xs={12}>User type</InputLabel>
            <Select name="role" onChange={handlechange} labelId="label" id="select" style={{width: '100%'}}>
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="technicien">Technicien</MenuItem>
            </Select>
            </Grid>
          </Grid>

          {/*  Sign Up as a Employee? */}
              {/* <Grid container justify="flex-end">
              <Grid item>
                <Link href="/test" variant="body2">
                Sign Up as a Employee?
                </Link>
              </Grid>
            </Grid> */}





          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onCreatePost}>
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/Login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

//***********style ui */

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
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
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));