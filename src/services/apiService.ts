import api from './axiosConfig';

export const fetchData = async <T>(
  url: string,
  requiresAuth = false,
): Promise<T> => {
  try {
    const response = await api.get<T>(url, {
      headers: {requiresAuth},
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postData = async <T, U>(
  url: string,
  data: U,
  requiresAuth = false,
): Promise<T> => {
  try {
    const response = await api.post<T>(url, data, {
      headers: {requiresAuth},
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putData = async <T, U>(
  url: string,
  data: U,
  requiresAuth = false,
): Promise<T> => {
  try {
    const response = await api.put<T>(url, data, {
      headers: {requiresAuth},
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async <T>(
  url: string,
  requiresAuth = false,
): Promise<T> => {
  try {
    const response = await api.delete<T>(url, {
      headers: {requiresAuth},
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
