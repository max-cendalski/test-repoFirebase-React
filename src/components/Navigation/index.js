import React from 'react';
import {useNavigate,Link} from 'react-router-dom'
import { UserAuth } from '../Firebase/context';


const Navigation = () => {
  const navigate = useNavigate()
  const {user, logout} = UserAuth()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/signin')
      console.log('You are logged out')
    } catch(e) {
      console.log(e.message)
    }
  }

  return (
    <article>
        <ul>
          <li>
            <Link to = '/signin'>Sign In</Link>
          </li>
          <li>
            <Link to = '/landing'>Landing</Link>
          </li>
          <li>
            <Link to = '/home'>Home</Link>
          </li>
          <li>
            <Link to = '/account'>Account</Link>
          </li>
          <li>
            <Link to = '/admin'>Admin</Link>
          </li>
          <li>
            <Link to = '/tasks'>Tasks</Link>
          </li>
        </ul>
        {
          user && <button onClick={handleLogout}>Logout</button>
        }
      </article>
  )
}


export default Navigation;
