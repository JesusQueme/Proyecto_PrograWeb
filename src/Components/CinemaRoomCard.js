import React from 'react';

const CinemaRoomCard = ({ room, onClick }) => {
  return (
    <div 
      onClick={() => onClick(room)}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={room.movie.poster} 
          alt={room.movie.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-xl font-bold text-white truncate">{room.movie.title}</h3>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
            {room.name}
          </span>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {room.rows}x{room.columns} asientos
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-600">4.8</span>
          </div>
          <span className="text-lg font-bold text-gray-900">
            {room.availableSeats} <span className="text-sm font-normal text-gray-500">disponibles</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CinemaRoomCard;