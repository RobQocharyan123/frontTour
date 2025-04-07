import axios from "axios";
import { toast } from "react-toastify";

export const userRegisterService = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/auth/register",
      data
    );

    return response.data;
  } catch (error) {
    return error.response?.data || { message: "An error occurred" };
  }
};

export const userLoginService = async ({ data, setIsLoginOpen }) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/auth/login",
      data
    );

    if (response.data?.success) {
      localStorage.setItem("authToken", response.data?.token);

      toast.success("Success");
      setIsLoginOpen(false);
    }
    return response.data;
  } catch (error) {
    return error.response?.data || { message: "An error occurred" };
  }
};
