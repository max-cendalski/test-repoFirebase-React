import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {FirebaseContext} from '../Firebase'
import * as Routes from '../../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

const SignUpPage = () => (
  <article>
    <h1>SignUp</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </article>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {...INITIAL_STATE}
  }
  onSubmit = e => {
    const {username, email, passwordOne} = this.state
    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      this.setState({...INITIAL_STATE})
    })
    .catch(error => {
      this.setState({error})
    })
    e.prevent.default()

  }
   onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
   render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';
    return (
        <form onSubmit={this.onSubmit}>
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
    )
   }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={Routes.SIGN_UP}>Sign Up</Link>
  </p>
)

export default SignUpPage;

export {SignUpForm, SignUpLink}
