import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContent = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null);

  // ✅ Fetch user info from backend
  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/data", {
        withCredentials: true,
      });
  
      if (data.success) {
        setUserData(data.userData);
        setIsLoggedin(true);
        return data.userData; // ✅ Return the user object
      } else {
        toast.error(data.message);
        setIsLoggedin(false);
        return null;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch user data");
      setIsLoggedin(false);
      return null;
    }
  };
  

  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData,
  };

  return (
    <AppContent.Provider value={value}>
      {props.children}
    </AppContent.Provider>
  );
};
