import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import styles from './AuthForm.module.css';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '', // Only used for signup
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  //Function to call the backend to authenticate the user
  const authenticateUser = async (username, password) => {
    try {
      // http://localhost:5000/
        const response = await fetch('http://localhost:5001/', { // Adjust the URL for your backend API
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

    

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log(1);
        return 'Login successful';
      } else {
        console.log(2);
        return data.mssg || 'An error occurred';
      }
    } catch (error) {
      console.error('Error:', error);
      return 'An error occurred. Please try again EXCEPTION.';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const result = await authenticateUser(formData.username, formData.password);

    // navigate('/random-duck');
    if (result === 'Login successful') {
      navigate('/random-duck'); // Navigate to the next page on success
    } else {
      setErrorMessage(result); // Display error message from the backend
    }
  };

  return (
    <div className={styles.authForm}>
      <button className={styles.closeButton} onClick={onClose}>
        Close
      </button>
      <form onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  );
};

// Add PropTypes validation
AuthForm.propTypes = {
  onClose: PropTypes.func.isRequired, // Validate that `onClose` is a required function
};


export default AuthForm;






// const testAuthenticateUser = async () => {
//   const testCases = [
//     { username: "maya tam", password: "1234", expected: "Login successful" }, // Valid case
//     { username: "maya tam", password: "wrongPassword", expected: "Incorrect password" }, // Invalid password
//     { username: "nonExistentUser", password: "1234", expected: "User not found" }, // Non-existent user
//   ];

//   for (const { username, password, expected } of testCases) {
//     console.log(`Testing with username: ${username}, password: ${password}`);
//     try {
//       const response = await fetch('http://localhost:5000/', { // Adjust the URL as necessary
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();
//       const result = response.ok ? 'Login successful' : data.mssg || 'Error';

//       console.log(`Expected: ${expected}, Got: ${result}`);
//       console.log(result === expected ? '✅ Test passed' : '❌ Test failed');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
// };

// testAuthenticateUser();