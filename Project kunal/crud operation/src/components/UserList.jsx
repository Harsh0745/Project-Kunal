import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUsers, deleteUser } from "../services/api";
import "../styles.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchUsers();
  }, [page]);

  useEffect(() => {
    if (location.state?.updatedUser) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === location.state.id
            ? { ...user, ...location.state.updatedUser }
            : user
        )
      );
    }
  }, [location]);

  const fetchUsers = async () => {
    const data = await getUsers(page);
    setUsers(data.data);
  };

  const handleEdit = (user) => {
    navigate(`/edit/${user.id}`, { state: user });
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id); // Send delete request
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container">
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img src={user.avatar} alt="User Avatar" />
          <div className="user-info">
            <p>
              {user.first_name} {user.last_name}
            </p>
          </div>
          <button className="btn-primary" onClick={() => handleEdit(user)}>
            Edit
          </button>
          <button className="btn-danger" onClick={() => handleDelete(user)}>
            Delete
          </button>
        </div>
      ))}
      <div className="pagination">
        <button
          className="btn-secondary"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button className="btn-secondary" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
