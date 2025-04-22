import axios from 'axios';
import { toast } from 'react-toastify';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const token = localStorage.getItem('authToken');

export const userRegisterService = async (data) => {
  try {
    const response = await axios.post(backendUrl + '/auth/register', data);

    return response.data;
  } catch (error) {
    return error.response?.data || { message: 'An error occurred' };
  }
};

export const userLoginService = async ({ data, setIsLoginOpen }) => {
  try {
    const response = await axios.post(`${backendUrl}/auth/login`, data);

    if (response.data?.success) {
      // Save decoded data (or just the parts you need)
      localStorage.setItem('userData', JSON.stringify(response?.data));

      toast.success('Success');
      setIsLoginOpen(false);
    }

    return response.data;
  } catch (error) {
    // toast.error(error.response?.data?.message || 'An error occurred');
    return error.response?.data || { message: 'An error occurred' };
  }
};

export const userGetData = async () => {
  try {
    const { data } = await axios.get(backendUrl + '/user/data');
    console.log(data, 'this is getauthdata response');

    if (data?.success) {
      localStorage.setItem('userData', data?.userData);
    } else {
      toast.error(data?.message);
    }

    return data;
  } catch (error) {
    toast.success(error.response?.data?.message);

    return error.response?.data || { message: 'An error occurred' };
  }
};

export const getAuthState = async () => {
  try {
    const { data } = await axios.get(`${backendUrl}/auth/is-auth`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (data.success) {
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const verificationOtp = async () => {
  try {
    const response = await axios.post(`${backendUrl}/auth/send-verify-otp`);

    return response.data;
  } catch (error) {
    return error.response?.data || { message: 'An error occurred' };
  }
};

export const verifyAccountPostMethod = async ({ otp }) => {
  try {
    const response = await axios.post(`${backendUrl}/auth/verify-account`, {
      otp,
    });

    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || 'An error occurred');
    return error.response?.data || { message: 'An error occurred' };
  }
};
