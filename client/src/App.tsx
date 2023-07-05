import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './components/features/redux/reduxHooks';
import { userCheckThunk } from './components/features/thunkAction/userThunkAction';
import MainPage from './components/pages/MainPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AuthPage from './components/pages/authPage/AuthPage';
import PrivateRoute from './components/HOC/PrivateRoute';
import MatchList from './components/ui/MatchList';
import MatchPage from './components/pages/MatchPage';
import PetInfoPage from './components/pages/PetInfoPage';
import PetEditPage from './components/pages/PetEditPage';
import PetCabinetPage from './components/pages/PetCabinetPage';
import CardSwipePage from './components/pages/CardSwipePage';
import VariationsPage from './components/pages/VariationsPage';
import './index.css';
import ChoiсePetPage from './components/pages/ChoiсePetPage';
import AppSpinner from './components/ui/PetSpinner';
import Sidebar from './components/ui/SideBar';
import OverPetProfil from './components/pages/OverPetProfil';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    void dispatch(userCheckThunk());
  }, []);
  const currentPet = useAppSelector((state) => state.currentPet);
  console.log(currentPet);

  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="auth/:type" element={<AuthPage />} />

        <Route element={<PrivateRoute isAllowed={user.status !== 'guest'} redirectTo="/choice" />}>
          <Route path="/swipe" element={<CardSwipePage />} />
          <Route path="/profile" element={<OverPetProfil />} />

          <Route path="app/match" element={<MatchList />} />
          <Route path="/match" element={<MatchPage />} />
          <Route path="/info" element={<PetInfoPage />} />
          <Route path="/edit/:id" element={<PetEditPage />} />
          <Route path="/cabinet" element={<PetCabinetPage />} />
          <Route path="/variations" element={<VariationsPage />} />
          <Route path="/choice" element={<ChoiсePetPage />} />
          <Route path="/spinner" element={<AppSpinner />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
