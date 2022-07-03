import React from 'react'
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
import ProtectedRoute from '../ProtectedRoute';




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
          <Route exact path = '/landing' element={<LandingPage />} />
          <Route exact path = '/pw-forget' element={<PasswordForgetPage />} />
          <Route
            path = '/account'
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />
          <Route exact path = '/admin' element={<AdminPage />} />
          <Route exact path = '/home' element={<HomePage />} />
        </Routes>
        </AuthContextProvider>

      </article>
    </BrowserRouter>
  )
}

export default App
