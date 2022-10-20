import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UserContext = createContext();
const useUser = () => useContext(UserContext);
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");
  const [openAdduser, setOpenAdduser] = useState(false);
  useEffect(() => {
    getUsers();
  }, [users]);
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/v1/users/get-all-users");
      if (res.status === 200) {
        setUsers(res.data.data);
      }
    } catch (err) {
      if (err.status === 409) {
        alert("OOPS!! something went wrong");
      }
    }
  };
  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`/api/v1/users/${id}`);
      if (res.status === 200) {
        const data = users.filter(
          (item) => item.userId !== res.data.data.userId
        );

        setUsers(data);
        toast.error("User deleted", {
          theme: "colored",
          autoClose: 2000,
        });
      }
    } catch (e) {
      if (e.status === 409) {
        alert("OOPS something went wrong");
      }
    }
  };
  const updateUser = async (data) => {
    try {
      const res = await fetch(`/api/v1/users/${data.userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        toast.info("User Updated successfully", {
          theme: "colored",
          autoClose: 2000,
        });
        setOpen(false);
      }
    } catch (err) {
      if (err.status === 409) {
        toast.error("Couldn't be able to update use details", {
          theme: "colored",
          autoClose: 2000,
        });
      }
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
        openAdduser,
        setOpenAdduser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { useUser, UserContextProvider };
