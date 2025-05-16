import React, { useState } from 'react';
import './ReservationModal.css';
const ReservationModal = ({
    isOpen,
    onClose,
    onConfirm,
    selectedSeats,
    room,
    selectedDate
}) => {
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        cardName: '',
        expiry: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm({
            roomId: room.id,
            seats: selectedSeats,
            date: selectedDate,
            paymentInfo
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Confirmar Reservación</h2>
                <div className="mb-4">
                    <p className="font-semibold">{room.movie.title}</p>
                    <p >{room.name} - {selectedDate.toLocaleDateString()}</p>
                    <p className="mt-2">Asientos: {selectedSeats.join(', ')}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Número de Tarjeta</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={paymentInfo.cardNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="1234 5678 9012 3456"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Nombre en Tarjeta</label>
                        <input
                            type="text"
                            name="cardName"
                            value={paymentInfo.cardName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="Nombre como aparece en la tarjeta"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col"> {/* Contenedor para Vencimiento */}
        <label className="block text-gray-700 mb-2">Vencimiento</label>
        <input
            type="text"
            name="expiry"
            value={paymentInfo.expiry}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="MM/AA"
            required
        />
    </div>
    <div className="flex flex-col"> {/* Contenedor para CVV */}
        <label className="block text-gray-700 mb-2">CVV</label>
        <input
            type="text"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="123"
            required
        />
    </div>
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Confirmar Pago
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReservationModal;