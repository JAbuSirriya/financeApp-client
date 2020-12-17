export const isLoggedIn = () => localStorage.getItem('token');

export const authToken = () => `Bearer ${localStorage.getItem('token')}`;