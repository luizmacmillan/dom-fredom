import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import PersonalPhoto from '../assets/images/personal-photo.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#dbdbdb89',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

function Home() {
  const classes = useStyles();
  
  return (
    <div>
      <Avatar alt="Frederico Mello" src={PersonalPhoto} className={classes.large} />
    </div>
  );
};

export default Home;
