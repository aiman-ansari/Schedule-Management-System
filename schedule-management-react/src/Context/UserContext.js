import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const UserContext = createContext();
const useUser = () => useContext(UserContext);
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const res = await axios.get("/api/v1/users/get-all-users");
    if (res.status === 409) {
      alert("OOPS!! something went wrong");
    }
    if (res.status === 200) {
      setUsers(res.data.data);
    }
  };
  console.log("from context", users);
  const deleteUser = async (id) => {
    const res = await axios.delete(`/api/v1/users/${id}`);
    if (res.status === 409) {
      alert("OOPS something went wrong");
    }
    if (res.status === 200) {
      const data = users.filter((item) => item.userId !== res.data.data.userId);
      setUsers(data);
    }
  };
  const updateUser = async (data) => {
    const res = await fetch(`/api/v1/users/${data.userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status === 409) {
      alert("Room exists, change roomId");
    }
    if (res.status === 200) {
      alert("successfully added");
      setOpen(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        open,
        setOpen,
        deleteUser,
        updateUser,
        data,
        setData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { useUser, UserContextProvider };
