import React, { useState } from 'react';
import './SeatSelection.css'; // Asegúrate de tener este archivo CSS

const SeatSelection = ({ rows, columns, reservedSeats, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (row, column) => {
    const seatId = `${String.fromCharCode(65 + row)}${column + 1}`; // Corrección aquí
    if (reservedSeats.includes(seatId)) {
      return;
    }

    setSelectedSeats(prev => {
      const newSelected = prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId];
      onSeatSelect(newSelected);
      return newSelected;
    });
  };

  const getSeatClassName = (row, column) => {
    const seatId = `${String.fromCharCode(65 + row)}${column + 1}`; // Corrección aquí
    if (reservedSeats.includes(seatId)) {
      return 'seat occupied';
    }
    if (selectedSeats.includes(seatId)) {
      return 'seat selected';
    }
    return 'seat available';
  };

  return (
    <div className="seat-selection-container">
      <h2>Selección de Asientos</h2>
      <div className="legend">
        <div className="indicator available"></div><span>Disponible</span>
        <div className="indicator selected"></div><span>Seleccionado</span>
        <div className="indicator occupied"></div><span>Ocupado</span>
      </div>
      <div className="screen">Pantalla</div>
      <div className="seat-grid" style={{ gridTemplateColumns: `repeat(${columns}, 30px)` }}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`seat ${getSeatClassName(rowIndex, colIndex)}`}
              onClick={() => handleSeatClick(rowIndex, colIndex)}
            >
              {String.fromCharCode(65 + rowIndex)}{colIndex + 1}
            </div>
          ))
        ))}
      </div>
      {selectedSeats.length > 0 && (
        <div className="selected-info">
          Asientos seleccionados: {selectedSeats.join(', ')}
        </div>
      )}
      {/* Botón para confirmar selección */}
    </div>
  );
};

export default SeatSelection;