import { Link } from "react-router-dom";

function Home() {
   const isLoggedIn = localStorage.getItem("token");
  return (
    <div className="hero" >
      <h1>AI Startup Validator</h1>

      <p style={{ fontSize: "18px", marginTop: "20px" }}>
        Validate your startup ideas using AI before investing
        your time, money, and effort.
      </p>

      <div className="hero-buttons">
  <Link to={isLoggedIn ? "/dashboard" : "/register"}>
    <button className="secondary-btn">
      Get Started
    </button>
  </Link>

  <Link to="/login">
    <button className="secondary-btn">
      Login
    </button>
  </Link>
</div>

      <div className="features-card">
        <h2>Features</h2>

        <ul
          className="feature-item"
        >
          <li> AI Startup Analysis</li>
          <li> Startup Score (0-100)</li>
          <li> Market Potential Evaluation</li>
          <li> Revenue Suggestions</li>
          <li> Risk Assessment</li>
          <li> Analysis History Tracking</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;