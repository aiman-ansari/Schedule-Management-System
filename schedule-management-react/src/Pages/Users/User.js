import AddUser from "../../Component/Users/AddUser";
import AllUsers from "../../Component/Users/AllUsers";
import UpdateUser from "../../Component/Users/UpdateUser";
import { useUser } from "../../Context/UserContext";
import "./User.css";
export default function User() {
  const { data, open } = useUser();
  return (
    <div>
      {open ? (
        <UpdateUser user={data} />
      ) : (
        <>
          <div className='room-container'>
            <AddUser />
          </div>
          <AllUsers />
        </>
      )}
    </div>
  );
}
