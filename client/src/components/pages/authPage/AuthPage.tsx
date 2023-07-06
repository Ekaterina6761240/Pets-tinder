import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ReCAPTCHA from 'react-google-recaptcha';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useFormHook from '../../features/Hooks/authFormHooks';

export default function AuthPage(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const { regHandler, loginHandler, reCapchaHandler, disabled, type } = useFormHook();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{ '& > :not(style)': { m: 1 } }}
        component="form"
        onSubmit={type === 'reg' ? regHandler : loginHandler}
      >
        <FormControl variant="standard">
          <Link href="/" underline="none">
            <ArrowBackIosIcon />
          </Link>
          {type === 'reg' && (
            <Stack direction="column" spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField label="name" variant="standard" type="text" name="name" value={input} />
              </Box>
            </Stack>
          )}
          <Stack direction="column" spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AlternateEmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField label="email" variant="standard" type="email" name="email" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField label="password" variant="standard" type="password" name="password" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ReCAPTCHA
                sitekey="6LcVdHImAAAAANSNii7Zg0fi4zPqOT4M_BlHWjCY"
                onChange={(value: string | null) => reCapchaHandler(value || '')}
                style={{
                  paddingBottom: '10px',
                  display: 'inline-block',
                  transform: 'scale(0.85)',
                  transformOrigin: '0 0',
                }}
              />
            </Box>
          </Stack>
          {type === 'reg' ? (
            <Button
              variant="outlined"
              size="large"
              style={{ borderRadius: '10px', width: '300px', margin: '10px' }}
              disabled={disabled}
              type="submit"
            >
              Зарегистрироваться
            </Button>
          ) : (
            <Button
              variant="outlined"
              size="large"
              style={{ borderRadius: '10px', width: '300px', margin: '10px' }}
              disabled={disabled}
              type="submit"
            >
              Войти
            </Button>
          )}
        </FormControl>
      </Box>
    </div>
  );
}
