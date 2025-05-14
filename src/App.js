import React, { useState, useEffect } from 'react';
import AuthLoginForm from './Components/AuthLoginForm';
import AuthRegisterForm from './Components/AuthRegisterForm';
import LayoutNavbar from './Components/LayoutNavbar';
import CinemaRoomGrid from './Components/CinemaRoomGrid';
import SeatSelection from './Components/SeatSelection';
import ReservationModal from './Components/ReservationModal';
import AdminRoomForm from './Components/AdminRoomForm';
import AdminUserList from './Components/AdminUserList';
import { mockUsers, mockRooms, mockReservations } from './mock/data';

const App = () => {
  const [currentView, setCurrentView] = useState('login');
  const [user, setUser] = useState(null);
  const [rooms, setRooms] = useState(mockRooms);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [showRoomForm, setShowRoomForm] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);
  const [users, setUsers] = useState(mockUsers);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Simulate token validation
      const userData = mockUsers.find(u => u.token === token);
      if (userData) {
        setUser(userData);
        setCurrentView(userData.role === 'admin' ? 'admin' : 'rooms');
      }
    }
  }, []);

  const handleLogin = (credentials) => {
    // Simulate API call
    const user = mockUsers.find(u => 
      u.email === credentials.email && 
      u.password === credentials.password && 
      u.active
    );
    
    if (user) {
      const token = `fake-jwt-token-${Date.now()}`;
      localStorage.setItem('token', token);
      setUser({ ...user, token });
      setCurrentView(user.role === 'admin' ? 'admin' : 'rooms');
    } else {
      alert('Credenciales incorrectas o usuario inactivo');
    }
  };

  const handleRegister = (userData) => {
    const newUser = {
      id: `user-${Date.now()}`,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: 'client',
      active: true,
      token: `fake-jwt-token-${Date.now()}`
    };
    
    setUsers([...users, newUser]);
    localStorage.setItem('token', newUser.token);
    setUser(newUser);
    setCurrentView('rooms');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setCurrentView('login');
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setCurrentView('seats');
  };

  const handleSeatSelect = (seats) => {
    setSelectedSeats(seats);
  };

  const handleReservationConfirm = (reservationData) => {
    const newReservation = {
      id: `res-${Date.now()}`,
      roomId: reservationData.roomId,
      userId: user.id,
      seats: reservationData.seats,
      date: reservationData.date,
      paymentInfo: reservationData.paymentInfo
    };
    
    // Update room available seats
    const updatedRooms = rooms.map(room => {
      if (room.id === reservationData.roomId) {
        return {
          ...room,
          availableSeats: room.availableSeats - reservationData.seats.length
        };
      }
      return room;
    });
    
    setRooms(updatedRooms);
    setShowReservationModal(false);
    setCurrentView('rooms');
    alert('Reservación exitosa! Se ha generado tu código QR.');
  };

  const handleRoomSubmit = (roomData) => {
    if (editingRoom) {
      const updatedRooms = rooms.map(room => 
        room.id === editingRoom.id ? { ...roomData, id: room.id } : room
      );
      setRooms(updatedRooms);
    } else {
      const newRoom = {
        ...roomData,
        id: `room-${Date.now()}`,
        availableSeats: roomData.rows * roomData.columns
      };
      setRooms([...rooms, newRoom]);
    }
    setShowRoomForm(false);
    setEditingRoom(null);
  };

  const handleDeactivateUser = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, active: false } : user
    ));
  };

  const getReservedSeats = () => {
    if (!selectedRoom) return [];
    return mockReservations
      .filter(res => 
        res.roomId === selectedRoom.id && 
        res.date.toDateString() === selectedDate.toDateString()
      )
      .flatMap(res => res.seats);
  };

  const renderView = () => {
    switch (currentView) {
      case 'login':
        return (
          <AuthLoginForm 
            onLogin={handleLogin} 
            onSwitchToRegister={() => setCurrentView('register')} 
          />
        );
      case 'register':
        return (
          <AuthRegisterForm 
            onRegister={handleRegister} 
            onSwitchToLogin={() => setCurrentView('login')} 
          />
        );
      case 'rooms':
        return (
          <CinemaRoomGrid 
            rooms={rooms} 
            onRoomSelect={handleRoomSelect} 
          />
        );
      case 'seats':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Selección de Asientos</h2>
              <div>
                <label className="mr-2">Fecha:</label>
                <input
                  type="date"
                  value={selectedDate.toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  min={new Date().toISOString().split('T')[0]}
                  max={new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                  className="px-3 py-1 border rounded"
                />
              </div>
            </div>
            <SeatSelection
              rows={selectedRoom.rows}
              columns={selectedRoom.columns}
              reservedSeats={getReservedSeats()}
              onSeatSelect={handleSeatSelect}
            />
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  if (selectedSeats.length > 0) {
                    setShowReservationModal(true);
                  } else {
                    alert('Por favor selecciona al menos un asiento');
                  }
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Reservar Asientos
              </button>
              <button
                onClick={() => setCurrentView('rooms')}
                className="ml-3 px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Volver
              </button>
            </div>
          </div>
        );
      case 'admin':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Panel de Administración</h2>
              <div className="space-x-3">
                <button
                  onClick={() => setShowRoomForm(true)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Crear Sala
                </button>
                <button
                  onClick={() => setCurrentView('userManagement')}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Gestionar Usuarios
                </button>
              </div>
            </div>
            <CinemaRoomGrid 
              rooms={rooms} 
              onRoomSelect={(room) => {
                setEditingRoom(room);
                setShowRoomForm(true);
              }} 
            />
          </div>
        );
      case 'userManagement':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Gestión de Usuarios</h2>
              <button
                onClick={() => setCurrentView('admin')}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Volver al Panel
              </button>
            </div>
            <AdminUserList 
              users={users} 
              onDeactivate={handleDeactivateUser} 
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {user && <LayoutNavbar user={user} onLogout={handleLogout} />}
      <main className="py-8">
        {renderView()}
      </main>
      
      {showReservationModal && (
        <ReservationModal
          isOpen={showReservationModal}
          onClose={() => setShowReservationModal(false)}
          onConfirm={handleReservationConfirm}
          selectedSeats={selectedSeats}
          room={selectedRoom}
          selectedDate={selectedDate}
        />
      )}
      
      {showRoomForm && (
        <AdminRoomForm
          room={editingRoom}
          onSubmit={handleRoomSubmit}
          onCancel={() => {
            setShowRoomForm(false);
            setEditingRoom(null);
          }}
        />
      )}
    </div>
  );
};

export default App;