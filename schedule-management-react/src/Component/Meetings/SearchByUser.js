import axios from "axios";
import { useState } from "react";
import { useMeeting } from "../../Context/MeetingContext";

export default function SearchByUser() {
  const [user, setUser] = useState("");
  const [isError, setIsError] = useState(false);
  const { getMeetingByUser } = useMeeting();

  const getMeeting = (e, room) => {
    if (user !== "") {
      getMeetingByUser(room);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };
  return (
    <div className='search-section'>
      <input
        type='text'
        placeholder='Enter user ID'
        className='search'
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      {isError && <p className='text-danger'>Please fill field</p>}

      <button
        className='btn btn-secondary'
        onClick={(e) => getMeeting(e, user)}
      >
        Search User
      </button>
    </div>
  );
}
