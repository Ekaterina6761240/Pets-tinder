import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/ui/SideBar';
import MatchPage from './components/pages/MatchPage';
import PetInfoPage from './components/pages/PetInfoPage';

function App(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Routes>
        <Route path="/" element={<MatchPage />} />
        <Route path="/info" element={<PetInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
