import {useEffect, useState, useMemo} from 'react';
import List from './List';
import Menu from './Menu';
import deathStar from './death-star.svg';
import './App.css';


function App() {
  const [data, setData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [activeMenuItem, setactiveMenuItem] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('people');

  //using fetch api here as it's a simple call. didn't see the use for axios or similar libraries
  const fetchMenu = () => (
    fetch('https://swapi.dev/api/')
    .then(response => response.json())
    .then(data => {
      setMenuData(Object.keys(data));
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  );

  const fetchData = (param) => {
      setLoading(true);
      fetch('https://swapi.dev/api/' + param)
      .then(response => response.json())
      .then(data => {
        setData(data.results)
        setLoading(false);
        console.log('fetched')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const updateCategory = (param) => {
    setActiveCategory(param);
  }

  const handleOnClick = (e, index) => {
    updateCategory(e.target.textContent);
    setactiveMenuItem(index);
  }
  
  // memoizing call so it doesn't re-render the component that was just rendered for the active category
  useMemo(() => fetchData(activeCategory), [activeCategory]);

  useEffect(()=>{
    fetchMenu();
  }, []);

  
  return (
    <div className="App">
      <img src={deathStar} className="planet" />
      <h1>Star Wars knowledge</h1>
      {/* command + control + spacebar opens up the emoji keyboard 😉 */}
      <h2>Everything you always wanted to know 🤓</h2>
      <Menu menuData={menuData} activeMenuItem={activeMenuItem} onClick={(event, index) => handleOnClick(event, index)} />
      {loading ? 'Loading...' : <List data={data} />}
    </div>
  );
}

export default App;
