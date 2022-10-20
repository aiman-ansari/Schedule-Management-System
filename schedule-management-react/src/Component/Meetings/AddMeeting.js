import { useState } from "react";
import { toast } from "react-toastify";
import { useMeeting } from "../../Context/MeetingContext";
export default function AddMeeting() {
  const [userId, setUserId] = useState("");
  const [roomId, setRoomId] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [guestUser, setGuestUser] = useState([]);

  const [isError, setIsError] = useState(false);
  const { setOpen } = useMeeting();
  const addMeeting = async () => {
    if (
      userId !== "" &&
      roomId !== "" &&
      meetingDate !== "" &&
      startTime !== "" &&
      endTime !== "" &&
      guestUser !== ""
    ) {
      setIsError(false);
      try {
        const res = await fetch("/api/v1/schedule/create-meeting", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            roomId: roomId,
            meetingDate: meetingDate,
            startTime: startTime,
            endTime: endTime,
            guestUsers: [guestUser],
          }),
        });
        console.log(res);
        if (res.status === 400) {
          toast.error(`User: ${guestUser} is not available at this time`, {
            theme: "colored",
            autoClose: 2000,
          });
        }
        if (res.status === 200) {
          setOpen(false);
          toast.success("Successfully Added", {
            theme: "colored",
            autoClose: 2000,
          });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setIsError(true);
    }
  };
  return (
    <div className='form-control'>
      <label for='userId'>User ID :</label>
      <input
        type='text'
        placeholder='1234'
        className='input'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <label for='userName'>Room ID :</label>

      <input
        type='text'
        placeholder='room12'
        className='input'
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <label for='email'>Meeting Date :</label>

      <input
        type='date'
        placeholder='10-10-2022'
        className='input'
        value={meetingDate}
        onChange={(e) => setMeetingDate(e.target.value)}
      />
      <label for='email'>Start Time :</label>

      <input
        type='time'
        className='input'
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <label for='email'>End Time :</label>

      <input
        type='time'
        className='input'
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <label for='email'>Guest User :</label>

      <input
        type='text'
        placeholder='johndoe'
        className='input'
        value={guestUser}
        onChange={(e) => setGuestUser(e.target.value)}
      />
      {isError && <p className='text-danger'>Please fill all the fields</p>}
      <div className='flex-align-center'>
        <button className='btn btn-primary mt-1 pd--5' onClick={addMeeting}>
          Schedule Meeting
        </button>
      </div>
    </div>
  );
}
