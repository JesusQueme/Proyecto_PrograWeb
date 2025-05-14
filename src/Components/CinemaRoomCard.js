import React from 'react';

const CinemaRoomCard = ({ room, onClick }) => {
  return (
    <div 
      onClick={() => onClick(room)}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={room.movie.poster} 
          alt={room.movie.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{room.movie.title}</h3>
        <p className="text-gray-600 mb-2">{room.name}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {room.availableSeats} asientos disponibles
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {room.rows}x{room.columns}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CinemaRoomCard;