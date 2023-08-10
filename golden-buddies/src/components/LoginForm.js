import React, { useState } from 'react';


function LoginForm() {
  const [userFormData, setUserFormData] = useState({
    email: '',
    password: '',
  });

  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    if (userFormData.email === 'correct@email.com' && userFormData.password === 'correctpassword') {
      // Perform successful login action
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div>
      {showAlert && (
        <div className='alert alert-danger'>
          Something went wrong with your login credentials!
        </div>
      )}
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <div className='invalid-feedback'>Email is required!</div>
        </div>

        <div className='mb-3'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <div className='invalid-feedback'>Password is required!</div>
        </div>
        <button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
