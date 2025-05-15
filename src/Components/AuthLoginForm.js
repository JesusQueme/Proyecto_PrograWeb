import React, { useState } from 'react';
import './AuthLoginForm.css';
const AuthLoginForm = ({ onLogin, onSwitchToRegister }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  /* const styles = {
     container: {
       minHeight: '100vh',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       position: 'relative',
       overflow: 'hidden',
       backgroundColor: '#111'
     },
     background: {
       position: 'absolute',
       top: 0,
       left: 0,
       right: 0,
       bottom: 0,
       //backgroundImage: 'url(https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0J8Jg2JipYIkKhaEN0eCX7zGogwrU3sn8TcHm)',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       filter: 'blur(2px)'
     },
     overlay: {
       position: 'absolute',
       top: 0,
       left: 0,
       right: 0,
       bottom: 0,
       backgroundColor: 'rgba(0, 0, 0, 0.6)'
     },
     card: {
       position: 'relative',
       width: '100%',
       maxWidth: '28rem',
       margin: '0 1rem',
       padding: '2.5rem',
       backgroundColor: 'rgba(255, 255, 255, 0.1)',
       backdropFilter: 'blur(10px)',
       borderRadius: '1rem',
       border: '1px solid rgba(255, 255, 255, 0.2)',
       boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
     },
     header: {
       textAlign: 'center',
       marginBottom: '2.5rem'
     },
     headerTitle: {
       fontSize: '2.25rem',
       fontWeight: 700,
       color: 'white',
       marginBottom: '0.5rem'
     },
     headerSubtitle: {
       color: '#d1d5db'
     },
     form: {
       display: 'flex',
       flexDirection: 'column',
       gap: '1.5rem'
     },
     formGroup: {
       display: 'flex',
       flexDirection: 'column',
       gap: '0.5rem'
     },
     label: {
       fontSize: '0.875rem',
       fontWeight: 500,
       color: '#e5e7eb'
     },
     inputContainer: {
       position: 'relative'
     },
     inputIcon: {
       position: 'absolute',
       left: '0.75rem',
       top: '50%',
       transform: 'translateY(-50%)',
       height: '1.25rem',
       width: '1.25rem',
       color: '#9ca3af'
     },
     input: {
       width: '100%',
       padding: '0.75rem 0.75rem 0.75rem 2.5rem',
       backgroundColor: 'rgba(255, 255, 255, 0.1)',
       border: '1px solid rgba(255, 255, 255, 0.2)',
       borderRadius: '0.5rem',
       color: 'white',
       fontSize: '1rem',
       transition: 'all 0.2s'
     },
     inputFocus: {
       outline: 'none',
       borderColor: '#3b82f6',
       boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)'
     },
     formOptions: {
       display: 'flex',
       justifyContent: 'space-between',
       alignItems: 'center'
     },
     rememberMe: {
       display: 'flex',
       alignItems: 'center',
       gap: '0.5rem'
     },
     checkbox: {
       height: '1rem',
       width: '1rem',
       borderRadius: '.25rem'
     },
     forgotPassword: {
       fontSize: '0.875rem',
       fontWeight: 500,
       color: '#93c5fd',
       textDecoration: 'none'
     },
     forgotPasswordHover: {
       color: '#60a5fa'
     },
     button: {
       width: '100%',
       padding: '0.75rem',
       background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
       color: 'white',
       fontSize: '1.125rem',
       fontWeight: 500,
       border: 'none',
       borderRadius: '0.5rem',
       cursor: 'pointer',
       transition: 'all 0.3s'
     },
     buttonHover: {
       background: 'linear-gradient(to right, #2563eb, #7c3aed)',
       transform: 'scale(1.02)'
     },
     footer: {
       marginTop: '1.5rem',
       textAlign: 'center',
       fontSize: '0.875rem',
       color: '#d1d5db'
     },
     footerButton: {
       background: 'none',
       border: 'none',
       fontWeight: 500,
       color: '#93c5fd',
       cursor: 'pointer',
       padding: 0
     },
     footerButtonHover: {
       color: '#60a5fa'
     },
     decorator1: {
       position: 'absolute',
       top: '5rem',
       left: '5rem',
       width: '8rem',
       height: '8rem',
       borderRadius: '50%',
       backgroundColor: '#3b82f6',
       opacity: 0.2,
       filter: 'blur(40px)'
     },
     decorator2: {
       position: 'absolute',
       bottom: '5rem',
       right: '5rem',
       width: '10rem',
       height: '10rem',
       borderRadius: '50%',
       backgroundColor: '#8b5cf6',
       opacity: 0.2,
       filter: 'blur(40px)'
     }
   };*/

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
