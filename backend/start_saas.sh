#!/bin/bash

echo "🔥 Iniciando setup do SaaS no Termux..."

# Atualiza Termux
pkg update -y && pkg upgrade -y

# Instala Node, npm e wget
pkg install nodejs-lts npm wget git -y

# Frontend setup
echo "📦 Criando frontend React (Vite)..."
mkdir -p ~/vitrine-saas/frontend/dashboard
cd ~/vitrine-saas/frontend/dashboard

# Inicializa npm e instala Vite + React
npm init -y
npm install react react-dom firebase vite
npm install --save-dev @vitejs/plugin-react

# Cria estrutura de pastas
mkdir -p src/assets src/components src/pages

# Baixa bandeira do Brasil
wget https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg -O src/assets/brasil.png

# App.jsx
cat > src/App.jsx <<EOL
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
EOL

# Loading.jsx
cat > src/components/Loading.jsx <<EOL
import { useEffect, useState } from "react";
import brasilFlag from "../assets/brasil.png";

export default function Loading({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if(prev >= 100) { clearInterval(interval); onFinish(); return 100; }
        return prev + 2.5;
      });
    }, 100);
  }, []);

  return (
    <div style={{
      width:"100vw",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      backgroundImage:\`url(\${brasilFlag})\`,
      backgroundSize:"cover",
      backgroundPosition:"center",
      color:"white"
    }}>
      <img src={brasilFlag} alt="Logo Brasil" style={{width:"100px", marginBottom:"20px"}} />
      <h2>PROGRESSO</h2>
      <div style={{width:"80%", height:"20px", backgroundColor:"#444", borderRadius:"10px", overflow:"hidden"}}>
        <div style={{width:\`\${progress}%\`, height:"100%", backgroundColor:"#FFD700", transition:"width 0.1s"}} />
      </div>
      <span style={{marginTop:"10px"}}>{Math.round(progress)}%</span>
    </div>
  );
}
EOL

# Login.jsx
cat > src/pages/Login.jsx <<EOL
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Login({ onLogin }) {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      onLogin(result.user);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div style={{
      width:"100vw",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      backgroundColor:"#1c1c1c",
      backgroundImage:"url(/src/assets/brasil.png)",
      backgroundSize:"cover",
      color:"white"
    }}>
      <h1 style={{marginBottom:"30px"}}>Dashboard SaaS</h1>
      <button onClick={handleGoogleLogin} style={{padding:"10px 20px", fontSize:"18px", backgroundColor:"#FFD700", border:"none", borderRadius:"10px", cursor:"pointer", color:"#1c1c1c"}}>
        Entrar com Google
      </button>
    </div>
  );
}
EOL

# Dashboard.jsx
cat > src/pages/Dashboard.jsx <<EOL
import { useState } from "react";

export default function Dashboard() {
  const [links] = useState([
    { name:"Produto 1", url:"https://encurtador.com/produto1" },
    { name:"Produto 2", url:"https://encurtador.com/produto2" }
  ]);

  return (
    <div style={{
      display:"flex",
      flexDirection:"row",
      width:"100vw",
      height:"100vh",
      backgroundColor:"#121212",
      color:"white"
    }}>
      <div style={{width:"250px", backgroundColor:"#1c1c1c", padding:"20px", display:"flex", flexDirection:"column"}}>
        <h2>Painel SaaS</h2>
        <h3>Produtos</h3>
        <ul>
          {links.map(l=> <li key={l.url}><a href={l.url} target="_blank" style={{color:"#FFD700"}}>{l.name}</a></li>)}
        </ul>
      </div>
      <div style={{flex:1, padding:"30px"}}>
        <h1>Dashboard Profissional</h1>
        <p>Visualização em modo paisagem, pronta para vendas SaaS.</p>
      </div>
    </div>
  );
}
EOL

# Firebase.js
cat > src/firebase.js <<EOL
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
EOL

# Backend setup
echo "⚡ Criando backend Node.js..."
mkdir -p ~/vitrine-saas/backend/utils ~/vitrine-saas/backend/webhook
cd ~/vitrine-saas/backend

cat > package.json <<EOL
{
  "name": "backend",
  "type": "module",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "mercadopago": "^2.6.0",
    "stripe": "^12.10.0",
    "jsonwebtoken": "^9.0.0"
  },
  "scripts": {
    "start": "node server.js"
  }
}
EOL

cat > server.js <<EOL
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req,res)=>res.send("Backend rodando"));
app.listen(3001, ()=>console.log("Backend rodando na porta 3001"));
EOL

# Instala backend
npm install express cors mercadopago stripe jsonwebtoken

# Cloudflare tunnel
pkg install cloudflared -y

echo "✅ Setup completo! Para rodar frontend:"
echo "cd ~/vitrine-saas/frontend/dashboard && npm run dev"
echo "✅ Backend:"
echo "cd ~/vitrine-saas/backend && node server.js"
echo "🌐 Cloudflare Tunnel (opcional): cloudflared tunnel --url http://localhost:5173"
