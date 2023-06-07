import React, { useState } from 'react';

function Crud() { 
  const [items, setItems] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 
  const [editIndex, setEditIndex] = useState(null); 

  const addItem = () => { 
    if (inputValue.trim()  !== '') {  
      if (editIndex === null) { 
        setItems([...items, inputValue]);
      } else {                
        const updatedItems = [...items];  
        updatedItems[editIndex] = inputValue; 
        setItems(updatedItems); 
        setEditIndex(null);
      } 
      setInputValue(' ');
    }
  };

  const deleteItem = (index) => { 
    const updatedItems = [...items];  
    updatedItems.splice(index, 1);  
    setItems(updatedItems);
  };

  const editItem = (index) => { 
     setInputValue(items[index]); 
     setEditIndex(index);
  };

  return (
    <div className='container'>
       <h1>CRUD Project</h1>
         <input   
         type="text"  
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
   /> 
    <button onClick={addItem}>{editIndex === null ? 'Add' :'Update'}</button>
     <ul> 
        {items.map((items,index)  => (  
          <li key={index}>  
          {items}
        <button onClick={()  => deleteItem (index)}>Delete</button>
        <button onClick={()  => editItem (index)}>Edit</button>
        </li>
    ))}
    </ul>
    </div>
  );
};

export default Crud;


 