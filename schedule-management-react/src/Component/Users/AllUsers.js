import { useUser } from "../../Context/UserContext";

export default function AllUsers() {
  const { users, setOpen, deleteUser, setData } = useUser();
  const editUser = (item) => {
    setOpen(true);
    setData(item);
  };

  return (
    <div>
      {users !== null && users.length > 0 ? (
        <table className='user-table'>
          <tr className='table-row-heading'>
            <td className='table-heading'>No</td>
            <td className='table-heading'>User ID</td>
            <td className='table-heading'>User Name</td>
            <td className='table-heading'>Email</td>

            <td className='table-heading'>Operations</td>
          </tr>
          {users.map((item, i) => (
            <tr className='table-row' key={i}>
              <td>{i + 1}</td>
              <td>{item.userId}</td>
              <td>{item.userName}</td>
              <td>{item.userEmail}</td>

              <td>
                <div className='operations'>
                  <button className='bg-primary' onClick={() => editUser(item)}>
                    <i className='bi bi-pencil-square'></i>
                  </button>
                  <button
                    className='bg-secondary'
                    onClick={() => deleteUser(item.userId)}
                  >
                    <i className='bi bi-trash'></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <h4>No user found</h4>
      )}
    </div>
  );
}
