import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Firebase/context';
import Todos from '../Todos/Todos'
import { getStorage, ref } from 'firebase/storage';

const Account = () => {
 const storage = getStorage()
  const storageRef = ref(storage)


  const {user, logout} = UserAuth()
  const navigate = useNavigate()

  const picRef = ref(storageRef, 'George11.jpg')


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
    <article className='account-container'>
      <h1>Account</h1>
      <p>User Email: {user && user.email}</p>
      <img src={picRef} alt="George"></img>
      <button onClick={handleLogout}>Logout</button>
      <hr />
      <Todos />
  </article>
  )
}

export default Account;
