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




const App = () => {

  return (
    <BrowserRouter>
      <article>
      <h1>FIREBASE</h1>
        <Navigation />
        <hr />
        <Routes>
          <Route exact path={ROUTES.LANDING} element={<LandingPage />} />
          <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route exact path={ROUTES.SIGN_IN} element={<SingInPage />} />
          <Route exact path={ROUTES.PASSWORD_FORGET} element={<PasswordForgetPage />} />
          <Route exact path={ROUTES.ACCOUNT} element={<AccountPage />} />
          <Route exact path={ROUTES.ADMIN} element={<AdminPage />} />
          <Route exact path={ROUTES.HOME} element={<HomePage />} />
        </Routes>
      </article>
    </BrowserRouter>
  )
}

export default App
