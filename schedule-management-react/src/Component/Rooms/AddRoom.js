import axios from "axios";
import { useState } from "react";
import { useRoom } from "../../Context/RoomContext";
export default function AddRoom() {
  const [roomId, setRoomId] = useState("");
  const [roomName, setRoomName] = useState("");
  const [isError, setIsError] = useState(false);
  const { setOpenAddroom } = useRoom();
  const addRoom = async () => {
    if (roomId !== "" && roomName !== "") {
      setIsError(false);
      const res = await fetch("/api/v1/room/add-room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roomId: roomId,
          roomName: roomName,
        }),
      });
      if (res.status === 409) {
        alert("Room exists, change roomId");
      }
      if (res.status === 200) {
        alert("successfully added");
        setOpenAddroom(false);
      }
    } else {
      setIsError(true);
    }
  };
  return (
    <div>
      <div className='form-control'>
        <label for='roomId'>Room ID :</label>
        <input
          type='text'
          placeholder='r1'
          className='input'
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <label for='roomId'>Room Name :</label>

        <input
          type='text'
          placeholder='room1'
          className='input'
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        {isError && <p className='text-danger'>Please fill all the fields</p>}
        <div className='flex-align-center'>
          <button className='btn btn-primary mt-1' onClick={addRoom}>
            Add Room
          </button>
        </div>
      </div>
    </div>
  );
}
