import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };



  return (
    <div className="container my-1">
      <Link to="/signup">← Go to Signup</Link>

      <h2 className='center'>Log in</h2>
      <p className='center'>Log into your account to start shopping!</p>

      <div> </div>
      <div className='center-input'>
        <form onSubmit={handleFormSubmit}>
          <div>

            <label htmlFor="email" className='center'>Enter your email address: </label>
            <br />
            <input
              className='center-input'
              placeholder="example@email.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}

            />
          </div>

          <br />

          <div>

            <label htmlFor="pwd" className='center'>Enter your password:</label>

            <input
              className='center-input'
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <br />
          {error ? (
            <div>
              <p className="error-text">Incorrect credentials</p>
            </div>
          ) : null}
          <div className="center-input">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Login;