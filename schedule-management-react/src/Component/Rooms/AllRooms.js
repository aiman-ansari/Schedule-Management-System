import { useRoom } from "../../Context/RoomContext";

export default function AllRooms() {
  const { rooms, setOpen, open, setRooms, deleteRoom, setData, data } =
    useRoom();

  const editRoom = (item) => {
    setOpen(true);
    setData(item);
  };
  return (
    <div>
      {rooms !== null && rooms.length > 0 ? (
        <table className='table'>
          <tr className='table-row-heading'>
            <td className='table-heading'>No</td>
            <td className='table-heading'>Room ID</td>
            <td className='table-heading'>Room Name</td>
            <td className='table-heading'>Operations</td>
          </tr>
          {rooms.map((item, i) => (
            <tr className='table-row' key={i}>
              <td>{i + 1}</td>
              <td>{item.roomId}</td>
              <td>{item.roomName}</td>
              <td>
                <div className='operations'>
                  <button className='bg-primary' onClick={() => editRoom(item)}>
                    <i className='bi bi-heart'></i>
                  </button>
                  <button
                    className='bg-secondary'
                    onClick={() => deleteRoom(item.roomId)}
                  >
                    <i className='bi bi-trash'></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <h4>NO rooms found</h4>
      )}
    </div>
  );
}
