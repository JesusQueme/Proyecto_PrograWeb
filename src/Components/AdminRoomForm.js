import React, { useState } from 'react';
import './AdminRoomForm.css'; // Importa el archivo CSS

const AdminRoomForm = ({ room, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(room || {
    name: '',
    movie: {
      title: '',
      poster: ''
    },
    rows: 0,
    columns: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('movie.')) {
      const movieField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        movie: {
          ...prev.movie,
          [movieField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">
        {room ? 'Editar Sala' : 'Crear Nueva Sala'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Nombre de la Sala</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Título de la Película</label>
            <input
              type="text"
              name="movie.title"
              value={formData.movie.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">URL del Póster</label>
          <input
            type="url"
            name="movie.poster"
            value={formData.movie.poster}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-2">Filas</label>
            <input
              type="number"
              name="rows"
              value={formData.rows}
              onChange={handleChange}
              min="1"
              max="20"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Columnas</label>
            <input
              type="number"
              name="columns"
              value={formData.columns}
              onChange={handleChange}
              min="1"
              max="30"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {room ? 'Actualizar' : 'Crear'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminRoomForm;