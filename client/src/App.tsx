import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import SideBar from './components/ui/SideBar';
import MatchPage from './components/pages/MatchPage';
import PetInfoPage from './components/pages/PetInfoPage';

function App(): JSX.Element {
  return (
    <Container style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Routes>
        <Route path="/match/:id" element={<MatchPage />} />
        <Route path="/info" element={<PetInfoPage />} />
      </Routes>
    </Container>
  );
}

export default App;
