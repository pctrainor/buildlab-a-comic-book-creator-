import axios from 'axios';

const API_BASE_URL = 'https://api.comicbookcreator.com';

interface ApiResponse<T> {
  data: T;
  error?: string;
}

interface Asset {
  id: number;
  name: string;
  type: string;
}

interface User {
  id: number;
  name: string;
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchAssets = async (): Promise<ApiResponse<Asset[]>> => {
  try {
    const response = await api.get<Asset[]>('/assets');
    return { data: response.data };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const fetchUsers = async (): Promise<ApiResponse<User[]>> => {
  try {
    const response = await api.get<User[]>('/users');
    return { data: response.data };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const authenticateUser = async (username: string, password: string): Promise<ApiResponse<{ token: string }>> => {
  try {
    const response = await api.post<{ token: string }>('/auth/login', { username, password });
    return { data: response.data };
  } catch (error) {
    return { data: { token: '' }, error: error.message };
  }
};