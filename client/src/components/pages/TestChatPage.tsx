import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Message from './Message';
import { useAppSelector } from '../features/redux/reduxHooks';
import useWsHook from '../features/Hooks/useWsHooks';

const CenteredPaper = styled(Paper)`
  margin: 20px auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  width: 400px;
`;

const FullHeightPaper = styled(Paper)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  height: calc(100vh - 200px);
  overflow: hidden;
`;

export default function TestChatPage(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  const { id } = useParams<{ id: string }>();
  const messages = useAppSelector((state) => state.ws.messages);
  const wsStatus = useAppSelector((state) => state.ws.status);
  console.log(messages[0]?.user?.id);
  const userInSession = Number(id);

  const submitChatHandler = useWsHook(id);

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h5" style={{ color: wsStatus ? 'green' : 'red' }}>
            Private Chat
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FullHeightPaper>
            <List style={{ overflowY: 'scroll' }}>
              <AnimatePresence>
                {messages?.map((el: any) => (
                  <motion.div
                    key={el.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <ListItem
                      style={{
                        justifyContent: el.user.id !== userInSession ? 'flex-end' : 'flex-start',
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent={el.user.id !== userInSession ? 'flex-end' : 'flex-start'}
                      >
                        <Chip
                          label={el.message}
                          color={el.user.id !== userInSession ? 'primary' : undefined}
                        />
                      </Stack>
                    </ListItem>
                  </motion.div>
                ))}
              </AnimatePresence>
            </List>
          </FullHeightPaper>
        </Grid>
        <Grid item xs={12}>
          <CenteredPaper>
            <Message submitChatHandler={submitChatHandler} />
          </CenteredPaper>
        </Grid>
      </Grid>
    </div>
  );
}
