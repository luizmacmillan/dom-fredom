import React from 'react';
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
import { useHistory, Link } from "react-router-dom";
 import CopyrightIcon from '@material-ui/icons/Copyright';

 const useStyles = makeStyles((theme) => ({
  root: {
    width: '12rem',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Fuggles, cursive',
    fontWeight: 'bold',
    padding: theme.spacing(1.5, 1.5, 0, 1.5),
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Fuggles, cursive',
    padding: theme.spacing(0, 1.5, 1,5, 1.5),
    textAlign: 'center',
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
    textAlign: 'center',
  },
}));

const SideBar = ({ toggleDrawer, setToggleDrawer }) => {
  const history = useHistory();
  const classes = useStyles();
  const sideBarLinksData = [
    ["home", "Início"],
    ["services", "Serviços"],
    ["gallery", "Galeria de fotos"],
    ["contact", "Contato"],
    ["about", "Sobre nós"],
    ["faq", "Perguntas frequentes"],
    ["testimonials", "Depoimentos"],
    ["partners", "Parcerias"],
    ["bookIn", "Agende seu horário"]
  ];

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
          {sideBarLinksData.map(linkItem => {
            return(
              <Link to={ `/${linkItem[0]}` } className={ classes.navLink }>
                <ListItem
                  button
                  className={
                    history.location.pathname.includes(linkItem[0]) ? classes.selected : classes.unselected
                  }
                >
                  <ListItemText primary={ linkItem[1] } />
                </ListItem>
              </Link>
            );
          })}
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
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default SideBar;
