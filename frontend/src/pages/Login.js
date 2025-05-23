import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import '../styles/LoginAndRegister.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleAuth = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    navigate('/dashboard');
  } catch (err) {
    setError(err.message);
  }
};

  return (
    <div className="login-and-register-container">
        <div className="login-and-register-card">
          <h2 className="login-and-register-title">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-and-register-input"
            />
           <div className="password-wrapper">
                <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-and-register-input"
                />
                <span
                className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
                >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>
            {error && <p className="login-and-register-error">{error}</p>}
            <button
              type="submit"
              className={`login-and-register-button ${isHover ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Login
            </button>
          </form>
          <div> or </div>
          <button
            type="button"
            onClick={handleGoogleAuth}
            className="google-auth-button"
            >
            Continue with <FcGoogle size={20} />
           </button>


          <p className="login-and-register-switch-text">
            Don't have an account?{' '}
            <span onClick={() => navigate('/register')} className="login-and-register-link">
              Register here
            </span>
          </p>
      </div>
    </div>
  );
};

export default Login;
