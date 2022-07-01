import React,{Component} from 'react';
import {Link, withRouter } from 'react-router-dom';
import { useState } from 'react';

import {withFirebase} from '../Firebase'
import * as ROUTES from '../../constants/routes';




const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit= (e) => {

}

    const isInvalid =  password === '' || email === '' || username === '';
    return (
      <form className="signup-form"onSubmit={handleSubmit}>
        <input
          name='username'
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          type='text'
          placeholder='Full Name'
        />
        <input
          name='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type='text'
          placeholder='Email Address'
        />
          <input
          name='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <button
        type='submit'
        disabled={isInvalid}
        >Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    )
}



export default SignUp;

/*
  onSubmit = e => {
    const {username, email, passwordOne} = this.state
    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      this.setState({...INITIAL_STATE})
      this.props.history.push(ROUTES.HOME)
    })
    .catch(error => {
      this.setState({error})
    })
    e.prevent.default()``
  } */


   /*   onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  } */
