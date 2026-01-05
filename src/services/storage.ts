import axios from 'axios';

const STORAGE_API_URL = 'https://storage.comicbookcreator.com';

interface StorageResponse<T> {
  data: T;
  error?: string;
}

interface UploadResponse {
  url: string;
  id: string;
}

interface FileMetadata {
  name: string;
  size: number;
  type: string;
}

const storageApi = axios.create({
  baseURL: STORAGE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const uploadFile = async (file: File): Promise<StorageResponse<UploadResponse>> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await storageApi.post<UploadResponse>('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return { data: response.data };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const getFileMetadata = async (fileId: string): Promise<StorageResponse<FileMetadata>> => {
  try {
    const response = await storageApi.get<FileMetadata>(`/files/${fileId}/metadata`);
    return { data: response.data };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const deleteFile = async (fileId: string): Promise<StorageResponse<null>> => {
  try {
    await storageApi.delete(`/files/${fileId}`);
    return { data: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};