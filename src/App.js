import React, { useState } from 'react';
import './App.css'




function App() {
    const [newItem, setNewItem] = useState("");

    function addItem() {
      console.log(newItem)
    }
  return (
    <>
      <h1>Todo App</h1>
      <input type="text" placeholder='Add Item...' value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button onClick={() => addItem()}>Add</button>

      <ul>
        <li>list a</li>
        <li>list b</li>
        <li>list c</li>
      </ul>

    </>
  );
}

export default App;
