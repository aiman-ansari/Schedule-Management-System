import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const RoomContext = createContext();
const useRoom = () => useContext(RoomContext);
const RoomContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");
  const [openAddroom, setOpenAddroom] = useState(false);

  useEffect(() => {
    getRooms();
  }, [rooms]);
  const getRooms = async () => {
    try {
      const res = await axios.get("/api/v1/room/get-all-rooms");

      if (res.status === 200) {
        setRooms(res.data.data);
      }
    } catch (err) {
      if (err.status === 409) {
        alert("OOPS!! something went wrong");
      }
    }
  };
  const deleteRoom = async (id) => {
    try {
      const res = await axios.delete(`/api/v1/room/${id}`);

      if (res.status === 200) {
        const data = rooms.filter(
          (item) => item.roomId !== res.data.data.roomId
        );
        setRooms(data);
        toast.error("Room deleted", {
          theme: "colored",
          autoClose: 2000,
        });
      }
    } catch (err) {
      if (err.status === 409) {
        toast.error("No room found", {
          theme: "colored",
          autoClose: 2000,
        });
      }
    }
  };
  const updateRoom = async (data) => {
    try {
      const res = await fetch(`/api/v1/room/${data.roomId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        setOpen(false);
        toast.info("Room updated successfully", {
          theme: "colored",
          autoClose: 2000,
        });
      }
    } catch (err) {
      if (err.response.status === 409) {
        alert("Couldn't update room");
      }
    }
  };
  return (
    <RoomContext.Provider
      value={{
        rooms,
        setRooms,
        open,
        setOpen,
        deleteRoom,
        updateRoom,
        data,
        setData,
        openAddroom,
        setOpenAddroom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
export { useRoom, RoomContextProvider };
