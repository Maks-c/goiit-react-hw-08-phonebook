import AppBar from './AppBar';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { authOperations, authSelectors } from '../Redux/auth';
import Header from './Header';
//================mui
import Container from '@mui/material/Container';

import PrivateRout from './PrivateRout';
import PublicRout from './PublicRout';

const HomePage = lazy(() => import('../Pages/HomePage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage'));
const PhonebookPage = lazy(() => import('../Pages/PhonebookPage'));


export const App = () => {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  console.log('isFetchingCurrentUser:', isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (<Container fixed sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      {isFetchingCurrentUser ? (<h1>React Skeleton</h1>) : (<>
        <Header/>
        <AppBar />
        <Suspense fallback={<p>'Upload...'</p>}>
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
        </Suspense>
      </>)}
    </Container>
  );
};
