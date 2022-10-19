import { useState } from "react";

export default function UpdateRoom({ room, setOpen }) {
  const [data, setData] = useState(room);
  const updateUser = async (id) => {
    const res = await fetch(`/api/v1/room/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status === 409) {
      alert("Room exists, change roomId");
    }
    if (res.status === 200) {
      alert("successfully added");
      setOpen(false);
    }
  };
  return (
    <div>
      <div className='form-control'>
        <input
          type='text'
          placeholder='Enter your user Id'
          className='input'
          value={data.roomId}
          onChange={(e) => setData({ ...data, roomId: e.target.value })}
        />
        <input
          type='text'
          placeholder='Enter your username'
          className='input'
          value={data.roomName}
          onChange={(e) => setData({ ...data, roomName: e.target.value })}
        />

        <div className='flex-align-center'>
          <button
            className='btn btn-primary mt-1'
            onClick={() => updateUser(room.roomId)}
          >
            Update Room
          </button>
        </div>
      </div>{" "}
    </div>
  );
}
