import { useState } from 'react';

import api from "../services/api";

function Analyze() {
    const [startupName, setStartupName] = useState("");
    const [idea, setIdea] = useState("");
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            const res = await api.post("/startup/analyze", {
                startupName,
                idea,
            }, {
                headers : {
                    Authorization : `Bearer ${token}`, 

                }
            }
            );
            console.log(res.data);
            setAnalysis(res.data.startup.aiAnalysis);
            console.log(res.data.startup.aiAnalysis);
        } catch (error) {
            console.log(error);
            alert("Analysis Failed");

        } finally {
            setLoading(false);
        }
        };

        
        return (
  <div className="form-card">
    <h1>Analyze Startup Idea</h1>

    <form onSubmit={handleAnalyze}>
      <div>
        <label>Startup Name</label>
        <br />
        <input
          type="text"
          value={startupName}
          onChange={(e) => setStartupName(e.target.value)}
          placeholder="Enter Startup Name"
          required
        />
      </div>

      <br />

      <div>
        <label>Startup Idea</label>
        <br />
        <textarea
          rows="6"
          cols="60"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Describe your startup idea..."
          required
        />
      </div>

      <br />

              <button
                className="primary-btn"
                type="submit"
                disabled={loading}
              >
                {loading ? "Analyzing..." : "Analyze Startup"}
              </button>
    </form>

    {analysis && (
      <div style={{ marginTop: "30px" }}>
        <h2>Analysis Result</h2>

        <p>
          <strong>Score:</strong> {analysis.score}/100
        </p>

        <p>
          <strong>Market Potential:</strong>{" "}
          {analysis.marketPotential}
        </p>

        <p>
          <strong>Verdict:</strong> {analysis.verdict}
        </p>

        <h3>Strengths</h3>
        <ul>
          {analysis.strengths.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Weaknesses</h3>
        <ul>
          {analysis.weaknesses.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Risks</h3>
        <ul>
          {analysis.risks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Revenue Suggestions</h3>
        <ul>
          {analysis.revenueSuggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

    }

    export default Analyze;

