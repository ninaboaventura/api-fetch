import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
      setData(data.results)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);
  return (
    <div className="App">
      {data && data.map((person)=>(
        <p>{person.name}</p>
      ))}
    </div>
  );
}

export default App;
