import React, { useState } from 'react';

function Add_Member() {
    const [user, setUser] = useState({
      username: '',
      email: '',
      password: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Submitted user:', user);
      setUser({
        username: '',
        email: '',
        password: ''
      });
    };
  
    return (
      <form onSubmit={handleSubmit} className="form-container">
        <label className="form-label">
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">Submit</button>
      </form>
    );
  };
  

  

export default Add_Member