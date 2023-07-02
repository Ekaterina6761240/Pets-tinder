import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './components/features/reduxHooks';
import { userCheckThunk } from './components/features/thunkAction/userThunkAction';
import MainPage from './components/pages/MainPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AuthPage from './components/pages/authPage/AuthPage';
import PrivateRoute from './components/HOC/PrivateRoute';
import ChoiсePetPage from './components/pages/ChoiсePetPage'
import MatchList from './components/ui/MatchList';
import './index.css'

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    void dispatch(userCheckThunk());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<PrivateRoute isAllowed={Boolean(user)} redirectTo="/app/choice" />}>
          <Route path="/auth/:type" element={<AuthPage />} />
        </Route>
        <Route path="/auth/:type" element={<AuthPage />} />
        <Route element={<PrivateRoute isAllowed={Boolean(user)} redirectTo="/" />}>
          <Route path="app/choice" element={<ChoiсePetPage />} />
          <Route path="app/match" element={<MatchList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
