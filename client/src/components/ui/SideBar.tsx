import Drawer from '@mui/material/Drawer';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import SegmentTwoToneIcon from '@mui/icons-material/SegmentTwoTone';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 100;

export default function Sidebar(): JSX.Element {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        bgcolor: 'rgba(220, 200, 180, 0.8)',
      }}
    >
      <List>
        <img src="/lapka2.png" width="50" height="50" />

        <ListItem button component={Link} to="/1" sx={{ display: 'flex', alignItems: 'center' }}>
          <ListItemIcon sx={{ margin: 'auto', ml: 5.5 }}>
            <Person2TwoToneIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button component={Link} to="/2" sx={{ my: 3 }}>
          <ListItemIcon>
            <SegmentTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Анкеты" />
        </ListItem>
        <ListItem button component={Link} to="/3" sx={{ my: 3 }}>
          <ListItemIcon>
            <FavoriteTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Лайки" />
        </ListItem>
        <ListItem button component={Link} to="/3" sx={{ my: 3 }}>
          <ListItemIcon>
            <ChatTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Чаты" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/3"
          sx={{ position: 'absolute', bottom: -455, posimy: 3 }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Выйти" />
        </ListItem>
      </List>
    </Drawer>
  );
}
