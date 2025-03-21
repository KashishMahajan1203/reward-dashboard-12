import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you can add your authentication logic (e.g., API call)
   // Call the login function from context
    navigate('/login'); // Redirect to the dashboard after login
};

  return <button  onClick={handleLogout}>Logout</button>;
};

export default Logout;
