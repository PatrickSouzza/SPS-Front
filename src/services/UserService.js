import axios from "axios";
import { AuthService } from "./AuthService";

const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/users`;

class UserService {
  getAuthHeader() {
    const token = AuthService.getToken();
    return { headers: { Authorization: `Bearer ${token}` } };
  }

  async list() {
    const res = await axios.get(BASE_URL, this.getAuthHeader());
    return res.data.data; 
  }

  async get(id) {
    const res = await axios.get(`${BASE_URL}/${id}`, this.getAuthHeader());
    return res.data.data;
  }

  async create(data) {
    const res = await axios.post(BASE_URL, data, this.getAuthHeader());
    return res.data.data;
  }

  async update(id, data) {
    const res = await axios.put(`${BASE_URL}/${id}`, data, this.getAuthHeader());
    return res.data.data;
  }

  async delete(id) {
    const res = await axios.delete(`${BASE_URL}/${id}`, this.getAuthHeader());
    return res.data.data;
  }
}

export default new UserService();