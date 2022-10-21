import axios from "axios";
import { useState } from "react";
import { useMeeting } from "../../Context/MeetingContext";

export default function SearchByRoom() {
  const [room, setRoom] = useState("");
  const [isError, setIsError] = useState(false);
  const { getMeetingByRoom } = useMeeting();
  const getMeeting = (e, room) => {
    e.preventDefault();
    if (room !== "") {
      getMeetingByRoom(room);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };
  return (
    <div className='search-section'>
      <div className='inputs'>
        <input
          type='text'
          placeholder='Enter room ID'
          className='search'
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        {isError && <p className='text-danger'>Please fill field</p>}
      </div>
      <button
        className='btn btn-secondary'
        onClick={(e) => getMeeting(e, room)}
      >
        Search Room
      </button>
    </div>
  );
}
