import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/edit/:id" element={<UserForm />} />
      </Routes>
    </Router>
  );
};

export default App;
