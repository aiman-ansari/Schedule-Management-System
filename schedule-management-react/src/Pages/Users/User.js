import { useState } from "react";
import AddUser from "../../Component/Users/AddUser";
import AllUsers from "../../Component/Users/AllUsers";
import UpdateUser from "../../Component/Users/UpdateUser";
import { useUser } from "../../Context/UserContext";
import { ToastContainer } from "react-toastify";
import "./User.css";
export default function User() {
  const { data, open, openAdduser, setOpenAdduser } = useUser();
  return (
    <div>
      {open ? (
        <UpdateUser user={data} />
      ) : (
        <div className='container'>
          {openAdduser ? (
            <div className='room-container'>
              <AddUser />
            </div>
          ) : (
            <div className='section'>
              <p>List of all users</p>
              <button
                className='btn btn-primary'
                onClick={() => setOpenAdduser(true)}
              >
                Add User
              </button>
            </div>
          )}
          <AllUsers />
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
