import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from '../Firebase/context'


const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {createUser} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const isInvalid =  password === '' || email === '';
  return (
    <form className="signup-form"onSubmit={handleSubmit}>
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
