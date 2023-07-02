import React from 'react';
import { Dialog, DialogContent, Button } from '@mui/material';
import Confetti from 'react-confetti';

function CongratulationsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}): JSX.Element {
  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <div
          style={{
            position: 'relative',
            background: 'radial-gradient(circle at right, #ffe5e5 11% 8%, #dbfff9 90% 85%)',
          }}
        >
          <DialogContent style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Kanit, sans-serif', fontSize: '20px' }}>Взаимный лайк 🎉</h2>
            <p style={{ fontFamily: 'Kanit, sans-serif', fontSize: '15px'}}>Начни переписку</p>
            <Button onClick={onClose}>Написать</Button>
          </DialogContent>
        </div>
      </Dialog>
      {open && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </>
  );
}

export default CongratulationsModal;
