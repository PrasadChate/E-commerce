import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    use: null,
    token: "",
  });
  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslink-disable-next-line
  }, []); //at 1st we have written auth in []  bcoz of that our site is running in loop and taking time to load thats why we removes it
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
// custom hook : all hooks start with use
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
