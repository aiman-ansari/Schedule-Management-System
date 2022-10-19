import axios from "axios";
import { useEffect, useState } from "react";
import UpdateRoom from "./updateRoom";

export default function AllRooms() {
  const [rooms, setRooms] = useState(null);
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);
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
    console.log("delete", res.data.data);
    const data = rooms.filter((item) => item.roomId !== res.data.data.roomId);
    console.log("rest", data);
    setRooms(data);
  };
  const editRoom = (item) => {
    console.log("item", item);
    setOpen(true);
    setData(item);
  };
  return (
    <div>
      {open ? (
        <UpdateRoom room={data} setOpen={setOpen} />
      ) : rooms !== null && rooms.length > 0 ? (
        <table className='table'>
          <tr className='table-row-heading'>
            <td className='table-heading'>No</td>
            <td className='table-heading'>Room ID</td>
            <td className='table-heading'>Room Name</td>
            <td className='table-heading'>Operations</td>
          </tr>
          {rooms.map((item, i) => (
            <tr className='table-row' key={i}>
              <td>{i + 1}</td>
              <td>{item.roomId}</td>
              <td>{item.roomName}</td>
              <td>
                <div className='operations'>
                  <button className='bg-primary' onClick={() => editRoom(item)}>
                    <i className='bi bi-heart'></i>
                  </button>
                  <button
                    className='bg-secondary'
                    onClick={() => deleteRoom(item.roomId)}
                  >
                    <i className='bi bi-trash'></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <h4>NO rooms found</h4>
      )}
    </div>
  );
}
