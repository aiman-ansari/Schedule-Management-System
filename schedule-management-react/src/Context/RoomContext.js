import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const RoomContext = createContext();
const useRoom = () => useContext(RoomContext);
const RoomContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    getRooms();
  }, []);
  const getRooms = async () => {
    const res = await axios.get("/api/v1/room/get-all-rooms");
    console.log(res);
    if (res.status === 409) {
      alert("OOPS!! something went wrong");
    }
    if (res.status === 200) {
      setRooms(res.data.data);
    }
  };
  const deleteRoom = async (id) => {
    const res = await axios.delete(`/api/v1/room/${id}`);
    if (res.status === 409) {
      alert("OOPS something went wrong");
    }
    if (res.status === 200) {
      const data = rooms.filter((item) => item.roomId !== res.data.data.roomId);
      setRooms(data);
    }
  };
  const updateRoom = async (data) => {
    const res = await fetch(`/api/v1/room/${data.roomId}`, {
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
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
export { useRoom, RoomContextProvider };
