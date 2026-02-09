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
