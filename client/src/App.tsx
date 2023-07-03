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
import SideBar from './components/ui/SideBar';
import MatchPage from './components/pages/MatchPage';
import PetInfoPage from './components/pages/PetInfoPage';
import PetEditPage from './components/pages/PetEditPage';
import PetCabinetPage from './components/pages/PetCabinetPage';
import CardSwipePage from './components/pages/CardSwipePage';
import './index.css';
import ChoiсePetPage from './components/pages/ChoiсePetPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    void dispatch(userCheckThunk());
  }, []);

  return (
    <div>
      <SideBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="auth/:type" element={<AuthPage />} />
        {/* <Route element={<PrivateRoute isAllowed={user.status !== 'guest'} redirectTo="/" />}> */}
          <Route path="app/choice" element={<CardSwipePage />} />
          <Route path="app/match" element={<MatchList />} />
          <Route path="/match/:id" element={<MatchPage />} />
          <Route path="/info" element={<PetInfoPage />} />
          <Route path="/edit/:id" element={<PetEditPage />} />
          <Route path="/cabinet/:id" element={<PetCabinetPage />} />
          <Route path="/choice" element={<ChoiсePetPage />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
