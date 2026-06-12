import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function Dashboard() {
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useContext(AuthContext);
const navigate = useNavigate();

  useEffect(() => {
    fetchHistory();
  }, []);


  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/startup/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStartups(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load startup history");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await api.delete(`/startup/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setStartups(
      startups.filter(
        (startup) => startup._id !== id
      )
    );

    alert("Startup deleted successfully");
  } catch (error) {
    console.log(error);
    alert("Delete failed");
  }
};

const handleLogout = () => {
  logout();
  navigate("/login");
};

  return (
    <div className="container">
    
      <Link to="/analyze">
        <button className="primary-btn">
          + Analyze New Startup
        </button>
      </Link>

      <hr />
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <h1>Dashboard</h1>

  <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
    Logout
  </button>
</div>

      <h2>Your Previous Analyses</h2>

      {loading ? (
        <p>Loading...</p>
      ) : startups.length === 0 ? (
        <p>No startup analyses found.</p>
      ) : (
        startups.map((startup) => (
          <div
            key={startup._id}
            className="startup-card"
          >
            <h3 className="text-2xl font-bold text-teal-700 mb-3 hover:text-pink-500 transition duration-300" >{startup.startupName}</h3>

           

            <div className="score-badge">
              Score: {startup.aiAnalysis?.score}/100
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
              }}
            >
              <Link to={`/startup/${startup._id}`}>
                <button className="secondary-btn">
                  View Details
                </button>
              </Link>

              <button
                className="delete-btn"
                onClick={() => handleDelete(startup._id)}
              >
                <MdDelete />
              </button>
            </div>

            
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;