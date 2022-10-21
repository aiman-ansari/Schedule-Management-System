import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
const MeetingContext = createContext();
const useMeeting = () => useContext(MeetingContext);
const MeetingContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [meeting, setMeeting] = useState([]);
  useEffect(() => {
    getMeetingByUser();
    getMeetingByRoom();
  }, []);
  const getMeetingByUser = async (user) => {
    const res = await fetch("/api/v1/schedule/get-meetings/user");

    const getUrlParam = res.url + `?userId=${user}`;
    const paramResponse = await fetch(getUrlParam);

    const data = await paramResponse.json();
    setMeeting(data.data);
    if (paramResponse.status === 400) {
      toast.error("The userId is invalid", {
        theme: "colored",
        autoClose: 2000,
      });
    }
  };
  const getMeetingByRoom = async (room) => {
    const res = await fetch("/api/v1/schedule/get-meetings/room");
    const getUrlParam = res.url + `?roomId=${room}`;
    const paramResponse = await fetch(getUrlParam);

    const data = await paramResponse.json();
    setMeeting(data.data);
    if (paramResponse.status == 400) {
      toast.error("The room Id is invalid", {
        theme: "colored",
        autoClose: 2000,
      });
    }
  };
  return (
    <MeetingContext.Provider
      value={{
        open,
        setOpen,
        meeting,
        setMeeting,
        getMeetingByUser,
        getMeetingByRoom,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
};
export { useMeeting, MeetingContextProvider };
