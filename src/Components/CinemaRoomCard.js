import React from 'react';
import './CinemaRoomCard.css'; // Importa el archivo CSS

const CinemaRoomCard = ({ room, onClick }) => {
  return (
    <div
      onClick={() => onClick(room)}
      className="cinema-room-card"
    >
      <div className="room-poster-container">
        <img
          src={room.movie.poster}
          alt={room.movie.title}
          className="room-poster-image"
        />
        <div className="poster-gradient" />
        <div className="poster-title-overlay">
          <h3 className="poster-title">{room.movie.title}</h3>
        </div>
      </div>
      <div className="room-details">
        <div className="room-info-top">
          <span className="room-name-tag">{room.name}</span>
          <span className="room-capacity-tag">
            {room.rows}x{room.columns} asientos
          </span>
        </div>
        <div className="room-info-bottom">
          <div className="room-rating">
            <svg className="rating-star" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="rating-value">4.8</span>
          </div>
          <span className="available-seats">
            {room.availableSeats} <span className="available-text">disponibles</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CinemaRoomCard;