import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaRobot } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

function Navbar() {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-orange-100 shadow-md px-8 py-4 flex justify-between items-center">
    
      <h2>
  <FaRobot style={{ marginRight: "8px" }} />
  AI Startup Validator
</h2>

      {isAuthenticated && (
  <div className="flex items-center gap-6">
    <Link
      to="/"
      style={{ marginRight: "15px" }}
    >
      <FaHome />
    </Link>

    <Link
      to="/dashboard"
      style={{ marginRight: "15px" }}
    >
      Dashboard
    </Link>

    <Link
      to="/analyze"
      style={{ marginRight: "15px" }}
    >
      Analyze
    </Link>

    <button onClick={handleLogout} 
     className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
      Logout
    </button>
  </div>
)}
    </nav>
  );
}

export default Navbar;