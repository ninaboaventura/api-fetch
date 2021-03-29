import React from 'react';

const List = (props) => {
  const { data } = props;
  return (
    <ul>
      {data ? data.map((each, index)=>(
      <li key={index}>
        {/* "films" data come back with "title" instead of "name" */}
        <h3>{each.name ? each.name : each.title}</h3>
      </li>
      )): 'Uh Oh'} 
      </ul>
  );
};

export default List;