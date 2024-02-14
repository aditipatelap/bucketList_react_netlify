import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content  from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  // [] because in starting when localStorage had not been initialized 
  // then it will create an localStorage of empty list.
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');
  
  // useEffect runs when any changes occur in it's dependency
  // useEffect is async
  // console.log("before")
  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items])
  // console.log("after")

  const handleAddItem = (item) => {
    const id = items.length ? items[items.length-1].id +1 : 1;
    // console.log(item);
    // console.log(item.length);
    const myNewItem = {id, checked: false, name:item};
    const newListItems = [...items, myNewItem];
    setItems(newListItems);
  }

  const handleCheck = (id) => {
      const newListItems = items.map((item) => item.id === id ?
      // {...item} is used to create a new object with all the properties of the current item. 
      {...item, checked: !item.checked} : item);
      setItems(newListItems);
  };

  const handleDelete = (id) => {
      const newListItems = items.filter((item) => item.id !== id);
      setItems(newListItems);
  };

  const handleNewItem = (e) => {
    // e(event) and newItem(value) are by default passed to the function implicitly 
      // prevent from refreshing the page
      e.preventDefault();

      if(!newItem){
        return;
      }
      //add new item
      handleAddItem(newItem);
      // this will remove submitted value and make it clear.
      setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleNewItem={handleNewItem}
      />
      <SearchItem
          searchItem={searchItem}
          setSearchItem={setSearchItem}
      />
      <Content
          // items = {items.filter((item) => {
          //   const filterItems = ((item.name).toLowerCase()).includes(searchItem.toLowerCase());
          //   return filterItems;
          // })}
          // another method to write above code is
          items = {items.filter((item) => (
            ((item.name).toLowerCase()).includes(searchItem.toLowerCase())
          ))}
          // setItems is not used in content.js file so no need to send this.
          // setItems = {setItems}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
      />
      <Footer
        totalNoItems = {items.length}
      />
    </div>
  );
}

export default App;
