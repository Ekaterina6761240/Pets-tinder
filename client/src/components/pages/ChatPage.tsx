import { Box, Button, CardMedia, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import Message from '../ui/Message';

import type { MessageType } from '../Types/MessageType';

export default function ChatPage(): JSX.Element {

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Stack direction="column" spacing={2}>
          <Button variant="text" onClick={clickHandler}>
            <ArrowBackIosTwoToneIcon />{' '}
          </Button>
        </Stack>
        <Stack direction="column" spacing={2}>
          <CardMedia
            component="img"
            sx={{
              display: 'flex',
              borderRadius: 8,
              objectFit: 'cover',
              padding: '120px solid #FF0000',
              width: 130,
              height: 130,
            }}
            height="100"
            image="https://avatars.dzeninfra.ru/get-zen_doc/1246934/pub_5b9a5b8c341cd400abd07c2c_5b9a5bb69d8b2a00aa9e1ba1/scale_1200"
          />
        </Stack>
        <Stack direction="column" spacing={2}>
          {messages.map((el) => (
            <Stack direction="row" spacing={2}>
              <Message key={el.id} message={el} />
            </Stack>
          ))}
        </Stack>{' '}
      </Stack>
      <Stack direction="column" spacing={2}>
        <Box
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Написать"
            variant="outlined"
            name="message"
            sx={{ flex: 1 }}
          />
          <Button variant="text">
            <SendIcon />
          </Button>
        </Box>
      </Stack>
    </div>
  );
}
