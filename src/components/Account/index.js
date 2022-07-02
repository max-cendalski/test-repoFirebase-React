import React from 'react';
import { UserAuth } from '../Firebase/context';

const Account = () => {
  const {user, logout} = UserAuth()
  console.log('userv',user)
  return (
    <div>
      <h1>Account</h1>
      <p>User Email: {user && user.email}</p>
      <button>Logout</button>
  </div>
  )
}



export default Account;
