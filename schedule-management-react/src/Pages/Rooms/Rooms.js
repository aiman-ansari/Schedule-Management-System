import AddRoom from "./AddRoom";
import AllRooms from "./AllRooms";
import "./Rooms.css";

export default function Rooms() {
  return (
    <div>
      <div className='room-container'>
        <AddRoom />
      </div>
      <AllRooms />
    </div>
  );
}
