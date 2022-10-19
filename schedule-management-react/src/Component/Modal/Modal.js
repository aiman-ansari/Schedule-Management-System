import { useState } from "react";
import axios from "axios";
export default function Modal({ user }) {
  const [open, setOpen] = useState();
  const [userId, setUserId] = useState(user.userId);
  const [userName, setUserName] = useState(user.userName);
  const [email, setEmail] = useState(user.userEmail);
  const [data, setData] = useState(user);

  console.log("userName", data);
  console.log(user);
  const updateUser = async (id) => {
    const { userId, userName, userEmail } = data;
    const res = await axios.put(`/api/v1/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        userName: userName,
        userEmail: userEmail,
      }),
    });

    console.log("updated", res.data);
  };
  return (
    <div className='form-control'>
      <input
        type='text'
        placeholder='Enter your user Id'
        className='input'
        value={data.userId}
        onChange={(e) => setData({ ...data, userId: e.target.value })}
      />
      <input
        type='text'
        placeholder='Enter your username'
        className='input'
        value={data.userName}
        onChange={(e) => setData({ ...data, userName: e.target.value })}
      />
      <input
        type='text'
        placeholder='Enter your email'
        className='input'
        value={data.userEmail}
        onChange={(e) => setData({ ...data, userEmail: e.target.value })}
      />
      <div className='flex-align-center'>
        <button
          className='btn btn-primary mt-1'
          onClick={() => updateUser(data.userId)}
        >
          Update
        </button>
      </div>
    </div>
  );
}
