import React from 'react';
import './LayoutNavbar.css'; // Importa el archivo CSS

const LayoutNavbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-indigo-200 transition-colors">
          CineReserva <span className="text-yellow-300">PRO</span>
        </h1>
        {user && (
          <div className="flex items-center space-x-6">
            <span className="hidden md:inline text-lg font-medium bg-white bg-opacity-20 px-4 py-1 rounded-full">
              👋 Hola, {user.name}
            </span>
            <button
              onClick={onLogout}
              className="bg-white text-indigo-600 hover:bg-indigo-100 px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Salir
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LayoutNavbar;