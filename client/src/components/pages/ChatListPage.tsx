import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ChatListPage(): JSX.Element {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    axios('http://localhost:3001/match').then((res) => setUser(res.data));
  }, []);

  const clickHandler = (e, userID) => {
    e.preventDefault();
    navigate(`/chat/${userID}`);
  };
  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {user?.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user?.name}`;
        return (
          <ListItem
            key={user?.id}
            secondaryAction={
              <Button variant="text" onClick={(e) => clickHandler(e, user.id)}>
                Написать
              </Button>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText id={labelId} primary={`${user?.name + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
