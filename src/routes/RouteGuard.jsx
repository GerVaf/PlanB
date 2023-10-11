import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RouteGuard = ({ children }) => {
  const token = Cookies.get("token");
  useEffect(() => {
    // Function to refresh the token
    const refreshToken = async () => {
      try {
        const response = await axios.get(
          "https://walrus-app-irtfc.ondigitalocean.app/auth/refresh",
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        // console.log(response);
        const newToken = response?.data?.data?.access_token;
        // console.log(newToken)
        if (newToken) {
          Cookies.set("token", newToken);
        }
      } catch (error) {
        console.error("Token refresh failed:", error);
      }
    };

    if (token) {
      refreshToken();
    }
  }, []);
  const accData = useSelector((state) => state?.user?.user_info?.data);
  // console.log(accData);

  if (token || accData?.active === false) return children;
  else return <Navigate to="/login" />;
};

export default RouteGuard;
