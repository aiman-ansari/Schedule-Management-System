import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import AddMeeting from "../../Component/Meetings/AddMeeting";
import GetMeeting from "../../Component/Meetings/getMeeting";
import SearchByRoom from "../../Component/Meetings/SearchByRoom";
import SearchByUser from "../../Component/Meetings/SearchByUser";
import { useMeeting } from "../../Context/MeetingContext";
import "./Meeting.css";
export default function Meeting() {
  const { open, setOpen } = useMeeting();
  return (
    <div>
      <div className='mt-2'>
        {open ? (
          <div className='container'>
            <AddMeeting />
          </div>
        ) : (
          <>
            <div className='input-section'>
              <SearchByUser />
              <SearchByRoom />
              <button className='btn btn-primary' onClick={() => setOpen(true)}>
                Add Meeting
              </button>
            </div>
            <div>
              <GetMeeting />
            </div>
          </>
        )}
      </div>{" "}
      <ToastContainer />
    </div>
  );
}
