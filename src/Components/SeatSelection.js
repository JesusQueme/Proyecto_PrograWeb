import React, { useState } from 'react';

const SeatSelection = ({ rows, columns, reservedSeats, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (row, column) => {
    const seatId = `${row}-${column}`;
    if (reservedSeats.includes(seatId)) return;

    setSelectedSeats(prev => {
      const newSelected = prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId];
      onSeatSelect(newSelected);
      return newSelected;
    });
  };

  const getSeatColor = (row, column) => {
    const seatId = `${row}-${column}`;
    if (reservedSeats.includes(seatId)) return 'bg-gray-400 cursor-not-allowed';
    if (selectedSeats.includes(seatId)) return 'bg-green-500';
    return 'bg-blue-500 hover:bg-blue-600 cursor-pointer';
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">
        <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
        <span className="mr-4">Disponible</span>
        <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
        <span className="mr-4">Seleccionado</span>
        <div className="w-4 h-4 bg-gray-400 rounded-full mr-2"></div>
        <span>Ocupado</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-2 text-lg font-semibold">Pantalla</div>
        <div className="w-full h-2 bg-gray-300 mb-6 rounded-full"></div>
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            Array.from({ length: columns }).map((_, colIndex) => (
              <div 
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleSeatClick(rowIndex, colIndex)}
                className={`w-8 h-8 rounded-md flex items-center justify-center text-white ${getSeatColor(rowIndex, colIndex)} transition-colors`}
              >
                {String.fromCharCode(65 + rowIndex)}{colIndex + 1}
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;