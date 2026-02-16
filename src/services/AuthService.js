import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/auth`;

export const AuthService = {
  login: async (email, password) => {
    const res = await axios.post(`${BASE_URL}/login`, { email, password });
    const { token } = res.data;
    localStorage.setItem('token', token);
    return token;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getToken: () => localStorage.getItem('token'),

  isLoggedIn: () => !!localStorage.getItem('token')
};
