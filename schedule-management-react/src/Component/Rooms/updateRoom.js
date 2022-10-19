import { useState } from "react";
import { useRoom } from "../../Context/RoomContext";

export default function UpdateRoom({ room }) {
  const [data, setData] = useState(room);
  const { updateRoom } = useRoom();

  return (
    <div>
      <div className='form-control'>
        <input
          type='text'
          placeholder='Enter Room ID'
          className='input'
          value={data.roomId}
          onChange={(e) => setData({ ...data, roomId: e.target.value })}
        />
        <input
          type='text'
          placeholder='Enter Room Name'
          className='input'
          value={data.roomName}
          onChange={(e) => setData({ ...data, roomName: e.target.value })}
        />

        <div className='flex-align-center'>
          <button
            className='btn btn-primary mt-1'
            onClick={() => updateRoom(data)}
          >
            Update Room
          </button>
        </div>
      </div>{" "}
    </div>
  );
}
