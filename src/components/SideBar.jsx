import React from 'react';
import {
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemText,
 } from '@material-ui/core';

const SideBar = ({ toggleDrawer, setToggleDrawer }) => {
  const list = () => (
    <div
      role="presentation"
      onClick={() => setToggleDrawer(false)}
      onKeyDown={() => setToggleDrawer(false)}
    >
      <List>
        {['Serviços', 'Contato', 'Portfólio', 'FAQ'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
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
