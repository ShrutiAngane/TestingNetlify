import { useEffect } from "react";
import './index.css';

function App() {
  useEffect(()=>{
    let unordered=document.getElementById('language')
    let body=[]
    const options = {
      method: 'GET',
      headers: {
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '83570e0c38mshe677cb2814bdd31p1700c7jsn3be794f96e9f',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      }
    };
    
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=en', options)
      .then(response => response.json())
      .then(response => {
        body=response.data.languages
        console.log(body[0])
        for (let i=0;i<body.length;i++) {
          let li = document.createElement("li");
          li.innerText = body[i].name;
          unordered.appendChild(li);
    }})
      .catch(err => console.error(err));

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
