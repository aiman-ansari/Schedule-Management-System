import { useState } from "react";
import { useUser } from "../../Context/UserContext";
import { toast } from "react-toastify";
export default function AddUser() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const { setOpenAdduser } = useUser();
  const addUser = async () => {
    if (userId !== "" && userName !== "" && userEmail !== "") {
      setIsError(false);
      const res = await fetch("/api/v1/users/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          userName: userName,
          userEmail: userEmail,
        }),
      });
      if (res.status === 409) {
        alert("Room exists, change userId");
      }
      if (res.status === 200) {
        setOpenAdduser(false);
        toast.success("Successfully Added", {
          theme: "colored",
          autoClose: 2000,
        });
      }
    } else {
      setIsError(true);
    }
  };
  return (
    <div>
      <div className='form-control'>
        <label for='userId'>User ID :</label>
        <input
          type='text'
          placeholder='1234'
          className='input'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <label for='userName'>User Name :</label>

        <input
          type='text'
          placeholder='johndoe'
          className='input'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label for='email'>Email :</label>

        <input
          type='text'
          placeholder='johndoe@gmail.com'
          className='input'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        {isError && <p className='text-danger'>Please fill all the fields</p>}
        <div className='flex-align-center'>
          <button className='btn btn-primary mt-1' onClick={addUser}>
            Add Room
          </button>
        </div>
      </div>
    </div>
  );
}
