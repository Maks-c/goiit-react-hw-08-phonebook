import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { authOperations, authSelectors } from '../../redux/auth';
import Header from '../Header/Header';

import Container from '@mui/material/Container';

import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';
import HomePage from '../../Pages/HomePage';

const RegisterPage = lazy(() => import('../../Pages/RegisterPage'));
const LoginPage = lazy(() => import('../../Pages/LoginPage'));
const PhonebookPage = lazy(() => import('../../Pages/PhonebookPage'));

export const App = () => {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container fixed sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      {isFetchingCurrentUser ? (
        <h3>React Skeleton</h3>
      ) : (
        <>
          <Header />
          <Suspense fallback={<p>'Upload...'</p>}>
            <Routes>
              <Route
                index
                element={
                  <PublicRoute navigateTo="/contacts" restricted>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <PublicRoute navigateTo="/contacts" restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />

              <Route
                path="/login"
                element={
                  <PublicRoute navigateTo="/contacts" restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute navigateTo="/login">
                    <PhonebookPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
};
