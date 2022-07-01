import React from 'react';
import {Link} from 'react-router-dom';

const SignIn = () => {

  return (
    <article>
      <h1>Sign in to your account</h1>
      <p>Don't have an account yet? <Link to="/signup">SignUp</Link></p>
      <form className="signup-form">
        <input
          name='username'
          value={username}
          onChange={this.onChange}
          type='text'
          placeholder='Full Name'
        />
        <input
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Email Address'
        />
          <input
          name='passwordOne'
          value={passwordOne}
          onChange={this.onChange}
          type='password'
          placeholder='Password'
        />
          <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={this.onChange}
          type='password'
          placeholder='Confirm Password'
        />
        <button
        type='submit'
        disabled={isInvalid}
        >Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    </article>
  )
}

export default SignIn;
