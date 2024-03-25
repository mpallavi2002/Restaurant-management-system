import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MenuList() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('/api/menu')
      .then(res => setMenuItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
