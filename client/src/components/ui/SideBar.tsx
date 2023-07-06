import Drawer from '@mui/material/Drawer';
import React, { useCallback, useState } from 'react';
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
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import { logoutThunk } from '../features/thunkAction/userThunkAction';

const drawerWidth = 180;

export default function Sidebar(): JSX.Element {
  const dispatch = useAppDispatch();

  const [sidebarOpen, setSidebarOpen] = useState(true); // Состояние для отслеживания открытости/закрытости боковой панели

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prevOpen) => !prevOpen); // Функция для изменения состояния открытости/закрытости боковой панели
  }, []);

  const logoutHandler = (): void => {
    void dispatch(logoutThunk());
  };
  const currentPet = useAppSelector((state) => state.currentPet);

  const user = useAppSelector((store) => store.user);
  return (
    <>
      {user.status === 'success' && (
        <Drawer
          variant="permanent"
          anchor="left"
          open={sidebarOpen} // Передача состояния открытости/закрытости в компонент Drawer
          sx={{
            width: sidebarOpen ? drawerWidth : 90,
            flexShrink: 0,
            transition: 'width 0.2s',
            '& .MuiDrawer-paper': {
              width: sidebarOpen ? drawerWidth : 30,
              boxSizing: 'border-box',
              bgcolor: '#fcc444',
              // transition: 'width 0.2s',
              overflowX: 'hidden',
            },
          }}
        >
          {user.status === 'success' && sidebarOpen ? (
            <>
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
              <IconButton
                onClick={toggleSidebar} // Обработчик клика для скрытия/раскрытия боковой панели
                sx={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  zIndex: 1,
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
            </>
          ) : (
            <IconButton
              onClick={toggleSidebar} // Обработчик клика для скрытия/раскрытия боковой панели
              sx={{
                position: 'absolute',
                top: '0',
                right: '0',
                zIndex: 1,
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          )}
        </Drawer>
      )}
    </>
  );
}

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import Toolbar from '@mui/material/Toolbar';

// const drawerWidth = 240;

// export default function ResponsiveDrawer():JSX.Element {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = ():void => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//     </div>
//   );

//   return (
//     <Box>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="start"
//           onClick={handleDrawerToggle}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             position: 'fixed',
//             bottom: '16px',
//             right: '16px',
//           }}
//         >
//           {mobileOpen ? '<' : '>'}
//         </IconButton>
//       </Box>
//   );
// }
