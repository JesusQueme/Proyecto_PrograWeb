import React from 'react';

const LayoutNavbar = ({ user, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer">
          CineReserva
        </h1>
        <div className="flex items-center space-x-4">
          {user && (
            <>
              <span className="hidden md:inline">Hola, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
              >
                Cerrar Sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavbar;