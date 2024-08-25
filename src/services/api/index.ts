import axios from 'axios'
// import { useNavigate } from "react-router-dom";

export const API_URL = 'http://localhost:5000/'

export const Api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})
