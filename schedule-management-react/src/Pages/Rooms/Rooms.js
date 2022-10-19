import { useRoom } from "../../Context/RoomContext";
import AddRoom from "../../Component/Rooms/AddRoom";
import AllRooms from "../../Component/Rooms/AllRooms";
import "./Rooms.css";
import UpdateRoom from "../../Component/Rooms/updateRoom";

export default function Rooms() {
  const { data, open } = useRoom();
  return (
    <div>
      {open ? (
        <UpdateRoom room={data} />
      ) : (
        <>
          <div className='room-container'>
            <AddRoom />
          </div>
          <AllRooms />
        </>
      )}
    </div>
  );
}
