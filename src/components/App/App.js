import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from '../Landing/Landing';
import SignUp from '../SignUp/SignUp'
import SingInPage from '../SignIn/SignIn';
import Navigation from '../Navigation/Navigation';
import PasswordForgetPage from '../PasswordForget/PasswordForget';
import HomePage from '../Home/Home';
import AccountPage from '../Account/Account';
import AdminPage from '../Admin/Admin';
import { AuthContextProvider } from '../Firebase/context';
import ProtectedRoute from '../ProtectedRoute';


const App = () => {
  return (
    <BrowserRouter>
      <article>
        <AuthContextProvider>
          <h1>FIREBASE</h1>
          <Navigation />
          <hr />
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
