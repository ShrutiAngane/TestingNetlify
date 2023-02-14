import { useEffect } from "react";
import './index.css';

function App() {
  useEffect(async()=>{
    let unordered=document.getElementById('language')
    let body=[]
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'Accept-Encoding': 'application/gzip',
    //     'X-RapidAPI-Key': process.env.REACT_APP_TESTING_API,
    //     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    //   }
    // };
    
   const response=await fetch('/.netlify/functions/GetLanguage')
   body=response.data.languages
   for (let i=0;i<body.length;i++) {
      let li = document.createElement("li");
      li.innerText = body[i].name;
      unordered.appendChild(li);
    }
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
