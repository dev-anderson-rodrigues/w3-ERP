import axios from 'axios'
// import { useNavigate } from "react-router-dom";

export const API_URL = 'https://json-teste-json-server.vercel.app/'

export const Api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})
