import React from 'react';
import { useHistory, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Box,
 } from '@material-ui/core';
 import CopyrightIcon from '@material-ui/icons/Copyright';

 const useStyles = makeStyles((theme) => ({
  root: {
    width: '12rem',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Rock Salt, cursive',
    fontWeight: 'bold',
    padding: theme.spacing(1.5, 1.5, 0, 1.5),
    textAlign: 'center',
    fontSize: '20px',
    marginBottom: '5px'
  },
  subTitle: {
    fontFamily: 'Roboto, sans-serif',
    padding: theme.spacing(0, 1.5, 1,5, 1.5),
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '700',
  },
  divider: {
    margin: theme.spacing(2, 1),
  },
  navLink: {
    textDecoration: 'none',
  },
  selected: {
    borderLeft: '4px solid #FF6400',
    color: '#FF6400',
  },
  unselected: {
    borderLeft: '4px solid #FFFFFF',
    color: '#000'
  },
  bottom: {
    position: 'absolute',
    bottom: '2px',
    width: '100%',
  },
  copyright: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: '700',
    "& svg": {
      marginLeft: '20px'
    }
  },
}));

const SideBar = ({ toggleDrawer, setToggleDrawer }) => {
  const history = useHistory();
  const classes = useStyles();

  const list = () => (
    <div
      role="presentation"
      className={ classes.root }
      onClick={() => setToggleDrawer(false)}
      onKeyDown={() => setToggleDrawer(false)}
    >
        <Typography variant="h4" className={ classes.title }>
          Dom Fredom
        </Typography>
        <Typography variant="h5" className={ classes.subTitle }>
          Detalhamento
        </Typography>
        <Divider className={ classes.divider } />
        <List>
          <Link to="/home" className={ classes.navLink }>
            <ListItem
              button
              className={ history.location.pathname.includes('home') ? classes.selected : classes.unselected }>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to="/services" className={ classes.navLink }>
            <ListItem
              button
              className={
                history.location.pathname.includes('services') ? classes.selected : classes.unselected
              }>
              <ListItemText primary="Serviços" />
            </ListItem>
          </Link>
          <Link to="/projects" className={ classes.navLink }>
            <ListItem
              button
              className={
                history.location.pathname.includes('projects') ? classes.selected : classes.unselected
              }>
              <ListItemText primary="Projetos" />
            </ListItem>
          </Link>
          <Link to="/contacts" className={ classes.navLink }>
            <ListItem
              button
              className={
                history.location.pathname.includes('contacts') ? classes.selected : classes.unselected
              }>
              <ListItemText primary="Contatos" />
            </ListItem>
          </Link>
          <Link to="/about" className={ classes.navLink }>
            <ListItem
              button
              className={
                history.location.pathname.includes('about') ? classes.selected : classes.unselected
              }>
              <ListItemText primary="Sobre" />
            </ListItem>
          </Link>
          <Link to="/faq" className={ classes.navLink }>
            <ListItem
              button
              className={
                history.location.pathname.includes('faq') ? classes.selected : classes.unselected
              }>
                <ListItemText primary="FAQ" />
              </ListItem>
          </Link>
        </List>
        <Divider className={ classes.divider } />
        <Box className={ classes.bottom }>
          <Typography className={ classes.copyright }>
            Dom Fredom 2021
            <CopyrightIcon fontSize="small" />
          </Typography>
        </Box>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <SwipeableDrawer
          anchor="left"
          open={toggleDrawer}
          onClose={() => setToggleDrawer(false)}
          onOpen={() => setToggleDrawer(true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default SideBar;
