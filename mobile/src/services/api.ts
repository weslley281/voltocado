import axios from "axios";

const username = 'voltocado';
const password = 'voltocado';

const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

export const api = axios.create({
  baseURL: "http://192.168.11.235:8080/api", // URL base do servidor
    timeout: 10000, // Tempo limite de 10 segundos
  headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});