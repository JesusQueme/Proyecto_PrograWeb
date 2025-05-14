import React, { useState } from 'react';

const AuthRegisterForm = ({ onRegister, onSwitchToLogin }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    onRegister(userData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Registrarse
        </button>
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="w-full mt-3 text-blue-600 py-2 px-4 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
        >
          Volver a Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default AuthRegisterForm;