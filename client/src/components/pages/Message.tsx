import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import type { WsFormType } from '../Types/wsTypes';

export type MessageTypeProps = {
  submitChatHandler: (e: WsFormType) => void;
};

export default function Message({ submitChatHandler }: MessageTypeProps): JSX.Element {
  return (
    <div className="messageBlock" style={{ display: 'flex', flexDirection: 'row' }}>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
        component="form"
        onSubmit={submitChatHandler}
      >
        <TextField
          fullWidth
          label="message"
          id="fullWidth"
          type="text"
          className="user-message"
          name="message"
        />
      </Box>
      <Button variant="text" type="submit" style={{ padding: '0px' }}>
        <SendIcon />
      </Button>
    </div>
  );
}
