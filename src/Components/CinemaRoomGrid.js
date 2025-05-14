import React from 'react';
import CinemaRoomCard from './CinemaRoomCard';

const CinemaRoomGrid = ({ rooms, onRoomSelect }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Salas Disponibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {rooms.map(room => (
          <CinemaRoomCard 
            key={room.id} 
            room={room} 
            onClick={onRoomSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default CinemaRoomGrid;