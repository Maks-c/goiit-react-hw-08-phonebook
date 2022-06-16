import AppBar from './AppBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import PhonebookPage from '../Pages/PhonebookPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperations, authSelectors } from '../redux/auth';
import PrivateRout from './PrivateRout';
import PublicRout from './PublicRout';

export const App = () => {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  console.log('isFetchingCurrentUser:', isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div>
        <AppBar />

        <Routes>
          <Route index path='/' element={<HomePage />} />

          <Route path='/register' element={
            <PublicRout navigateTo='/contacts' restricted>
              <RegisterPage />
            </PublicRout>}
          />

          <Route path='/login' element={
            <PublicRout navigateTo='/contacts' restricted>
              <LoginPage />
            </PublicRout>}
          />

          <Route
            path='/contacts'
            element={
              <PrivateRout navigateTo='/login'>
                <PhonebookPage />
              </PrivateRout>}
          />
        </Routes>
      </div>)
  );
};
