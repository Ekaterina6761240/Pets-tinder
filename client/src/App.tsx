import React from 'react';
import SideBar from './components/ui/SideBar';
import MatchPage from './components/pages/MatchPage';
        import { Route, Routes } from 'react-router-dom';
        import PetInfoPage from './components/pages/PetInfoPage';

function App(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Routes>
      <Route path="/match" element={<MatchPage />} />
        <Route path="/info" element={<PetInfoPage />} />
      </Routes>
    </div>
  );

export default App;
