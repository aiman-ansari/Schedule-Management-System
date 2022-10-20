import { useRoom } from "../../Context/RoomContext";
import AddRoom from "../../Component/Rooms/AddRoom";
import AllRooms from "../../Component/Rooms/AllRooms";
import "./Rooms.css";
import UpdateRoom from "../../Component/Rooms/updateRoom";
import { ToastContainer } from "react-toastify";
export default function Rooms() {
  const { data, open, openAddroom, setOpenAddroom } = useRoom();
  return (
    <div>
      {open ? (
        <UpdateRoom user={data} />
      ) : (
        <div className='mt-2'>
          {openAddroom ? (
            <div className='room-container'>
              <AddRoom />
            </div>
          ) : (
            <>
              <div className='section'>
                <p>List of all rooms</p>
                <button
                  className='btn btn-primary'
                  onClick={() => setOpenAddroom(true)}
                >
                  Add Room
                </button>
              </div>

              <AllRooms />
            </>
          )}
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
