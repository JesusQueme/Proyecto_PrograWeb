import React, { useState } from 'react';

const AdminUserList = ({ users, onDeactivate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Gestión de Usuarios</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar usuarios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-4">Nombre</th>
              <th className="text-left py-2 px-4">Email</th>
              <th className="text-left py-2 px-4">Rol</th>
              <th className="text-left py-2 px-4">Estado</th>
              <th className="text-left py-2 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${user.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {user.active ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => onDeactivate(user.id)}
                    className={`px-3 py-1 rounded-lg text-sm ${user.active ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                    disabled={!user.active}
                  >
                    {user.active ? 'Desactivar' : 'Desactivado'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUserList;