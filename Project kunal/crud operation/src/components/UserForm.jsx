import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../services/api";
import "../styles.css";

const UserForm = () => {
  const location = useLocation();
  const user = location.state;
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = { first_name: firstName, last_name: lastName, email };
      const response = await updateUser(user.id, updatedUser);

      if (response.status === 200) {
        navigate("/users", { state: { updatedUser, id: user.id } });
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="container">
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button className="btn-primary" type="submit">Update</button>
        <button className="btn-secondary" onClick={() => navigate("/users")}>Cancel</button>
      </form>
    </div>
  );
};

export default UserForm;
