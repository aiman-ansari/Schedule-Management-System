import { createContext, useContext, useState } from "react";

const MeetingContext = createContext();
const useMeeting = () => useContext(MeetingContext);
const MeetingContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <MeetingContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
};
export { useMeeting, MeetingContextProvider };
