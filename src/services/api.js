import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const getApi = async (path) => {
  try {
    const result = await axios.get(baseURL + path, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteApi = async (path) => {
  try {
    const result = await axios.delete(baseURL + path, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postApi = async (path, body) => {
  try {
    const result = await axios.post(baseURL + path, body);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
