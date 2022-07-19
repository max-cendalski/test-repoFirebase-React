import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../Firebase/context';

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {signIn} = UserAuth()
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');
    try {
      await signIn(email,password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log('ERROR',e.message)
    }
  }

  const isInvalid = email === '' || password === '';
  return (
    <article>
      <h1>Sign in to your account</h1>
      <p>Don't have an account yet? <Link to="/signup">SignUp</Link></p>
      <form onSubmit={handleSubmit} className="signup-form">
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
        >
        Sign In</button>
        {error && <p>{error.message}</p>}
      </form>

    </article>
  )
}

export default SignIn;
