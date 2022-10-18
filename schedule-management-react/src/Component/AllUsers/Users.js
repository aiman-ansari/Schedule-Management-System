import { useEffect, useState } from "react";
import axios from "axios";
import "./Users.css";
export default function Users() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const res = await axios.get("/api/v1/users/get-all-users");
    const data = res.data;
    setUser(data.data);
  };
  console.log("users", user);
  return (
    <div>
      <h4>List of All users</h4>
      <table className='table w-auto'>
        <thead className='thead-dark'>
          <tr>
            <th className='pt-3 pb-3' scope='col'>
              No
            </th>
            <th className='pt-3 pb-3 ' scope='col'>
              User ID
            </th>
            <th className='pt-3 pb-3' scope='col'>
              User Name
            </th>
            <th className='pt-3 pb-3' scope='col'>
              User Email
            </th>
            <th className='pt-3 pb-3' scope='col'>
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {user !== null ? (
            user.map((item, i) => (
              <tr>
                <td className='pt-3 pb-3'>{i + 1}</td>
                <td className='pt-3 pb-3'>{item.userId}</td>
                <td className='pt-3 pb-3'>{item.userName}</td>
                <td className='pt-3 pb-3'>{item.userEmail}</td>
                <td className='pt-3 pb-3'>
                  <div className='btn-operations'>
                    <button className='btn-primary'>
                      <i className='bi bi-pencil-fill'></i>
                    </button>
                    <button className='btn-secondary'>
                      <i className='bi bi-trash-fill'></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
}
