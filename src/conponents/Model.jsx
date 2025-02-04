import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Dummy credentials for validation
    const validEmail = 'test@example.com';
    const validPassword = 'password123';
    
    if (email === validEmail && password === validPassword) {
      console.log('Email:', email);
      console.log('Password:', password);
      alert('Login Successful!');
      setError('');
      onClose(); // Close modal on successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
      <div className='bg-indigo-700 text-center p-5 h-96 w-[500px] rounded shadow-md'>
        <p className='text-xl font-semibold mb-4 mt-6 uppercase text-white'>Please Login Here</p>
        <form className='px-4' onSubmit={handleLogin}>
          {/* Email */}
          <div className='mb-5'>
            <input 
              type='email' 
              name='email' 
              id='email' 
              placeholder='example@gmail.com'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Password */}
          <div className='mb-5'>
            <input 
              type='password' 
              name='password' 
              id='password' 
              placeholder='Enter your password'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Error Message */}
          {error && <p className='text-red-500 mb-3'>{error}</p>}
          {/* Login Button */}
          <div>
            <button type='submit' className='hover:shadow-md rounded-md bg-indigo-600 hover:bg-orange-500 py-3 px-8 text-base font-semibold text-white outline-none'>
              Login
            </button>
          </div>
        </form>
        {/* Close Button */}
        <button onClick={onClose} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-5'>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
