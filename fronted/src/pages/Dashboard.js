import axios from "axios";
import { useState } from "react";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const upload = async () => {
    const form = new FormData();
    form.append("resume", file);

    const res = await axios.post("http://localhost:5000/upload", form);
    setResult(res.data);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Dashboard</h2>
        <input type="file" onChange={e => setFile(e.target.files[0])}/>
        <button onClick={upload}>Analyze</button>

        {result && (
          <div>
            <h3>Score: {result.score}</h3>
            <ul>
              {result.reasons.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}