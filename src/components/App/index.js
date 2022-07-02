import React from 'react'
import * as ROUTES from '../../constants/routes'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from '../Landing';
import SignUp from '../SignUp'
import SingInPage from '../SignIn';
import Navigation from '../Navigation';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import { AuthContextProvider } from '../Firebase/context';




const App = () => {

  return (
    <BrowserRouter>
      <article>
      <h1>FIREBASE</h1>
        <Navigation />
        <hr />
        <AuthContextProvider>
          <Routes>
          <Route exact path = '/' element={<LandingPage />} />
          <Route exact path = '/signup' element={<SignUp />} />
          <Route exact path = '/signin' element={<SingInPage />} />
          <Route exact path = '/pw-forget' element={<PasswordForgetPage />} />
          <Route exact path = '/account' element={<AccountPage />} />
          <Route exact path = '/admin' element={<AdminPage />} />
          <Route exact path = '/home' element={<HomePage />} />
        </Routes>
        </AuthContextProvider>

      </article>
    </BrowserRouter>
  )
}

export default App

export const LANDING = '/';
export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const HOME = '/home';
export const ACCOUNT = '/account';
export const ADMIN = '/admin';
export const PASSWORD_FORGET = '/pw-forget';
