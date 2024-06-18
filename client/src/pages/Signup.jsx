import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
      <Link to="/login">← Go to Login</Link>

      <h2 className='center'>Sign Up</h2>
      <p className='center'>Please enter the following information to create your account</p>

      <div className='center-input'> 
      <form onSubmit={handleFormSubmit}>
        <div> 

          <label htmlFor="firstName" className='center'>First Name:</label>
          <br />
          <input
            className='input'
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <br/>
        <div>
          <label htmlFor="lastName" className='center-input'>Last Name:</label>
          <input
            className='input'
            placeholder="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email" className='center-input'>Email:</label>
          <input
            className='input'
            placeholder="example@email.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="pwd" className='center-input'>Password (must be 8 characters or more):</label>
          <input
            className='input'
            placeholder="********"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="center-input">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Signup;
