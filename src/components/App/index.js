import React from 'react'
import * as ROUTES from '../../constants/routes'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from '../Landing';
import SignUpPage from '../SignUp'
import SingInPage from '../SignIn';
import Navigation from '../Navigation';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';




const App = () => {

  return (
    <Router>
      <article>
        <Navigation />
        <hr />
        <Routes>
          <Route exact path={ROUTES.LANDING} element={<LandingPage />} />
          <Route exact path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route exact path={ROUTES.SIGN_IN} element={<SingInPage />} />
          <Route exact path={ROUTES.PASSWORD_FORGET} element={<PasswordForgetPage />} />
          <Route exact path={ROUTES.ACCOUNT} element={<AccountPage />} />
          <Route exact path={ROUTES.ADMIN} element={<AdminPage />} />
          <Route exact path={ROUTES.HOME} element={<HomePage />} />
        </Routes>

      </article>
    </Router>
  )
}

export default App
