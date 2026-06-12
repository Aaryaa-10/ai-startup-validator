import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function StartupDetails() {
  const { id } = useParams();

  const [startup, setStartup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStartup();
  }, []);

  const fetchStartup = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get(`/startup/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStartup(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load startup");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!startup) {
    return <h2>Startup not found</h2>;
  }

  const analysis = startup.aiAnalysis;

  return (
    <div className="container">
      <Link to="/dashboard">
        <button>← Back to Dashboard</button>
      </Link>
      <div className="details-card">
      <h1>{startup.startupName}</h1>

      <p>
        <strong>Score:</strong> {analysis.score}/100
      </p>

      <p>
        <strong>Market Potential:</strong>
      </p>
      <p>{analysis.marketPotential}</p>

      <p>
        <strong>Verdict:</strong>
      </p>
      <p>{analysis.verdict}</p>

      <h2>Strengths</h2>
      <ul>
        {analysis.strengths.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Weaknesses</h2>
      <ul>
        {analysis.weaknesses.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Risks</h2>
      <ul>
        {analysis.risks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Revenue Suggestions</h2>
      <ul>
        {analysis.revenueSuggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default StartupDetails;