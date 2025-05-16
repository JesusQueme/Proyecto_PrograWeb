import React from 'react';
import CinemaRoomCard from './CinemaRoomCard';
import './CinemaRoomGrid.css'; // Importa el archivo CSS

const CinemaRoomGrid = ({ rooms, onRoomSelect }) => {
  return (
    <div className="cinema-room-grid"> {/* Contenedor principal */}
      <h2 className="grid-title">Peliculas Disponibles</h2>
      {rooms.length === 0 ? (
        <p className="grid-empty-message">No hay salas disponibles en este momento.</p>
      ) : (
        <div className="room-grid"> {/* Contenedor de la cuadrícula de salas */}
          {rooms.map(room => (
            <CinemaRoomCard
              key={room.id}
              room={room}
              onClick={onRoomSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CinemaRoomGrid;