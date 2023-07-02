import { Avatar, Chip } from '@mui/material';
import React from 'react';
import type { MessageType } from '../../Types/MessageType';

type MessageTypeProps = {
  message: MessageType;
};
export default function Message({ message }: MessageTypeProps): JSX.Element {
  return (
    <Chip
      sx={{ m: 1 }}
      avatar={<Avatar alt="Natacha" />}
      label={message.message}
      variant="outlined"
    />
  );
}
