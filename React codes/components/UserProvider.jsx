import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const predefinedUsers = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" }
];

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("sessionUser");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (username, password) => {
    const validUser = predefinedUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (validUser) {
      localStorage.setItem("sessionUser", username);
      setUser(username);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("sessionUser");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}