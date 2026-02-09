import { useState } from "react";
import Loading from "./components/Loading.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [user, setUser] = useState(null);

  if(!loadingFinished) return <Loading onFinish={()=>setLoadingFinished(true)} />
  if(!user) return <Login onLogin={setUser} />
  return <Dashboard />
}
