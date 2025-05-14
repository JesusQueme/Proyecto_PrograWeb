export const mockUsers = [
  {
    id: 'user-1',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
    active: true,
    token: 'fake-jwt-token-admin'
  },
  {
    id: 'user-2',
    name: 'Regular User',
    email: 'user@example.com',
    password: 'user123',
    role: 'client',
    active: true,
    token: 'fake-jwt-token-user'
  }
];

export const mockRooms = [
  {
    id: 'room-1',
    name: 'Sala Premium',
    movie: {
      title: 'Avengers: Endgame',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'
    },
    rows: 8,
    columns: 10,
    availableSeats: 80
  },
  {
    id: 'room-2',
    name: 'Sala 3D',
    movie: {
      title: 'Spider-Man: No Way Home',
      poster: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg'
    },
    rows: 6,
    columns: 8,
    availableSeats: 48
  }
];

export const mockReservations = [
  {
    id: 'res-1',
    roomId: 'room-1',
    userId: 'user-2',
    seats: ['0-0', '0-1', '1-0'],
    date: new Date(Date.now() + 24 * 60 * 60 * 1000),
    paymentInfo: {
      cardNumber: '   1234',
      cardName: 'Regular User',
      expiry: '12/25',
      cvv: '123'
    }
  }
];