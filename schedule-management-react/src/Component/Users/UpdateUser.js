import { useState } from "react";
import { useUser } from "../../Context/UserContext";

export default function UpdateUser({ user }) {
  const [data, setData] = useState(user);
  const { updateUser } = useUser();

  return (
    <div>
      <div className='form-control'>
        <input
          type='text'
          placeholder='Enter Room ID'
          className='input'
          value={data.userId}
          onChange={(e) => setData({ ...data, userId: e.target.value })}
        />
        <input
          type='text'
          placeholder='Enter Room Name'
          className='input'
          value={data.userName}
          onChange={(e) => setData({ ...data, userName: e.target.value })}
        />
        <input
          type='text'
          placeholder='Enter Room Name'
          className='input'
          value={data.userEmail}
          onChange={(e) => setData({ ...data, userEmail: e.target.value })}
        />

        <div className='flex-align-center'>
          <button
            className='btn btn-primary mt-1'
            onClick={() => updateUser(data)}
          >
            Update User
          </button>
        </div>
      </div>{" "}
    </div>
  );
}
