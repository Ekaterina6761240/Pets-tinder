import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/ui/SideBar';
import MatchPage from './components/pages/MatchPage';
import PetInfoPage from './components/pages/PetInfoPage';
import ChoiсePetPage from './components/pages/ChoiсePetPage';
import PetEditPage from './components/pages/PetEditPage';
import PetCabinetPage from './components/pages/PetCabinetPage';

function App(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Routes>
        <Route path="/match" element={<MatchPage />} />
        <Route path="/info" element={<PetInfoPage />} />
        <Route path="/choice" element={<ChoiсePetPage />} />
        <Route path="/edit/:id" element={<PetEditPage />} />
        <Route path="/cabinet" element={<PetCabinetPage />} />
      </Routes>
    </div>
  );
}

export default App;
