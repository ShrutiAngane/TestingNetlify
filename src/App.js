import { useEffect } from "react";
import './index.css';

function App() {
  useEffect(()=>{
    let unordered=document.getElementById('language')
    let body=[]
    async function fetchData(){
      const response=await fetch('/.netlify/functions/GetLanguage')
      body=response.data.languages
      for (let i=0;i<body.length;i++) {
          let li = document.createElement("li");
          li.innerText = body[i].name;
          unordered.appendChild(li);
        }
    }
    fetchData();
  },[])
  return (
    <>
    <div className="container">
      <ul id="language"></ul>
    </div>
    </>
  );
}

export default App;
