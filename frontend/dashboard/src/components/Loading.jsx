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
      backgroundImage:`url(${brasilFlag})`,
      backgroundSize:"cover",
      backgroundPosition:"center",
      color:"white"
    }}>
      <img src={brasilFlag} alt="Logo Brasil" style={{width:"100px", marginBottom:"20px"}} />
      <h2>PROGRESSO</h2>
      <div style={{width:"80%", height:"20px", backgroundColor:"#444", borderRadius:"10px", overflow:"hidden"}}>
        <div style={{width:`${progress}%`, height:"100%", backgroundColor:"#FFD700", transition:"width 0.1s"}} />
      </div>
      <span style={{marginTop:"10px"}}>{Math.round(progress)}%</span>
    </div>
  );
}
