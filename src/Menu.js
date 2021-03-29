import React from 'react';

const Menu = (props) => {
  const {onClick, menuData, activeMenuItem} = props;
  const handleClick = (value, index) => {
    onClick(value, index);
  }
  return (
    <ul className="App-menu">
      {menuData ? menuData.map((each, index)=>(
        <li key={index}>
          <button onClick={(each)=>handleClick(each,  index)} className={index === activeMenuItem ? 'active' : ''}>{each}</button>
        </li>  
      )) : 'Opppsie'}
    </ul>
  );
};

export default Menu;