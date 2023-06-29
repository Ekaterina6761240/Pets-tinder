import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChoiсePetPage from './components/pages/ChoiсePetPage';
import PetInfoPage from './components/pages/PetInfoPage';

function App(): JSX.Element {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<PetInfoPage />} />
      </Routes>
    </Container>
  )
}

export default App;
