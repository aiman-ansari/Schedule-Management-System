import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import AddMeeting from "../../Component/Meetings/AddMeeting";
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
            <div className='section'>
              <p>List of all meeting</p>
              <button className='btn btn-primary' onClick={() => setOpen(true)}>
                Add Meeting
              </button>
            </div>

            {/* <AllRooms /> */}
          </>
        )}
      </div>{" "}
      <ToastContainer />
    </div>
  );
}
