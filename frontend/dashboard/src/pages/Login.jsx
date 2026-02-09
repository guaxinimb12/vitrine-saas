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
