import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import Hero from './icons/Hero';
import SideBar from './SideBar';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#dbdbdb89',
    height: '100vh',
    flexGrow: 1,
  },
  toolbar: {
    flexGrow: 1,
    minHeight: 128,
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(5),
  },
  hero: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSearch: {
    width: '100%',
    background: 'white',
    borderTop: '5px solid white',
    transition: '2s',
    '& .MuiInputBase-input': {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    '& .MuiInputLabel-root': {
      paddingLeft: theme.spacing(3),
      fontWeight: '700',
    },
  }
}));
  
const TopBar = () => {
  const classes = useStyles();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setToggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box
            className={classes.hero}
            align="center"
          >
            <Hero height='100px' width='100px' />
          </Box>
          <IconButton
            edge="end"
            aria-label="search"
            color="inherit"
            onClick={() => setToggleSearch(!toggleSearch)}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      { toggleSearch && <TextField onBlur={() => setToggleSearch(false)} className={ classes.inputSearch } id="outlined-search" label="Busque o serviço desejado..." type="search" /> }
      <SideBar toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
    </div>
  );
};

export default TopBar;
