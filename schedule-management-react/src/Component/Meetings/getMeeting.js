import { useMeeting } from "../../Context/MeetingContext";

export default function GetMeeting() {
  const { meeting } = useMeeting();
  return (
    <div className='mt-3'>
      {meeting !== undefined && meeting.length > 0 ? (
        <table className='table'>
          <tr className='table-row-heading'>
            <td className='table-heading'>No</td>
            <td className='table-heading'>Hostuser ID</td>
            <td className='table-heading'>Room ID</td>
            <td className='table-heading'>Date</td>
            <td className='table-heading'>Start Time</td>
            <td className='table-heading'>End Time</td>
          </tr>
          {meeting.map((item, i) => (
            <tr className='table-row' key={i}>
              <td>{i + 1}</td>
              <td>{item.hostUserId}</td>
              <td>{item.roomId}</td>
              <td>{item.meetingDate.slice(0, 10)}</td>
              <td>{item.startTime.slice(11, 16)}</td>
              <td>{item.endTime.slice(11, 16)}</td>
            </tr>
          ))}
        </table>
      ) : (
        <h4>No meeting found</h4>
      )}{" "}
    </div>
  );
}
