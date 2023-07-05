import Drawer from '@mui/material/Drawer';
import React, { useCallback } from 'react';
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
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import { logoutThunk } from '../features/thunkAction/userThunkAction';

const drawerWidth = 100;

export default function Sidebar(): JSX.Element {
  const dispatch = useAppDispatch();
  const logoutHandler = (): void => {
    void dispatch(logoutThunk());
  };
  const currentPet = useAppSelector((state) => state.currentPet);

  const user = useAppSelector((store) => store.user);
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        bgcolor: '#534ED9',
      }}
    >
      {user.status === 'success' && (
        <List>
          <ListItem sx={{ ml: 4 }}>
            <img src="/lapka2.png" width="50" height="50" />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/choice"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <ListItemIcon sx={{ margin: 'auto', ml: 5.5 }}>
              <Person2TwoToneIcon />
            </ListItemIcon>
          </ListItem>
          {currentPet.data !== null && (
            <>
              <ListItem button component={Link} to="/swipe" sx={{ my: 3 }}>
                <ListItemIcon>
                  <SegmentTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Найти пару" />
              </ListItem>
              <ListItem button component={Link} to="/match" sx={{ my: 3 }}>
                <ListItemIcon>
                  <FavoriteTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Пары" />
              </ListItem>
            </>
          )}
          <ListItem button component={Link} to="/" sx={{ position: 'absolute', my: 49 }}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>

            <ListItemText onClick={logoutHandler} primary="Выйти" />
          </ListItem>
        </List>
      )}
    </Drawer>
  );
}
