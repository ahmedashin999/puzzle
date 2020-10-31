import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CountDown from './CountDown';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function UserInfo() {
  const classes = useStyles();
  const onSubmit=(e)=>{  
   e.preventDefault();
   return <CountDown/>
  }

  return (
    <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Enter your name" />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    </form>
  );
}
