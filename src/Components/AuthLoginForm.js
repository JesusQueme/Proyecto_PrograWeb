import React, { useState } from 'react';
import './AuthLoginForm.css';
const AuthLoginForm = ({ onLogin, onSwitchToRegister }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className='login-container'>
      <div className='login-background'>
        <div className='login-overlay'></div>
      </div>

      <div className='login-decorator-1'></div>
      <div className='login-decorator-2'></div>

      <div className='login-card'>
        <div className='login-header'>
          <h1 className='login-header-title'>CineReserva</h1>
          <p className='login-header-subtitle'>La mejor experiencia en reservas de cine</p>
        </div>

        <form onSubmit={handleSubmit} className='login-form'>
          <div className='form-group'>
            <label className='form-label'>Correo Electrónico</label>
            <div className='input-container'>
              <svg className='input-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="form-input"
                onFocus={(e) => e.target.classList.add('form-input-focus')}
                onBlur={(e) => e.target.classList.remove('form-input-focus')}
              />
            </div>
          </div>

          <div className='form-group'>
            <label className='form-label'>Contraseña</label>
            <div className='input-container'>
              <svg className='input-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className='form-input'
                onFocus={(e) => e.target.classList.add('form-input-focus')}
                onBlur={(e) => e.target.classList.remove('form-input-focus')}
              />
            </div>
          </div>

          <div className='form-options' >
            <div className='remember-me'>
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className='remember-me-checkbox'
              />
              <label htmlFor="remember-me" className='form-label remember-me-label'>Recordar sesión</label>
            </div>
            <a href="#" className='forgot-password'
              onMouseEnter={(e) => e.target.classList.add('forgot-password-hover')}
              onMouseLeave={(e) => e.target.classList.remove('forgot-password-hover')}>¿Olvidaste tu contraseña?</a>
          </div>

          <button
            type="submit"
            className='login-button'
            onMouseEnter={(e) => e.target.classList.add('login-button-hover')}
            onMouseLeave={(e) => e.target.classList.remove('login-button-hover')}
          >
            Ingresar
          </button>
        </form>

        <div className="login-footer">
          <p>¿No tienes una cuenta? <button
            onClick={onSwitchToRegister}
            className="register-button"
            onMouseEnter={(e) => e.target.classList.add('register-button-hover')}
            onMouseLeave={(e) => e.target.classList.remove('register-button-hover')}
          >Regístrate aquí</button></p>
        </div>
      </div>
    </div>
  );
};

export default AuthLoginForm;
