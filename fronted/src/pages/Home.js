import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <div className="container">
      <div className="card">
       <h2>TEST CHANGE</h2>
        <button onClick={() => nav("/login")}>Login</button>
        <button onClick={() => nav("/signup")}>Signup</button>
      </div>
    </div>
  );
}