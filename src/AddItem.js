import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleNewItem }) => {
  // it will use to re-focus the 'add item' input box again
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleNewItem}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            autoFocus
            ref={inputRef}
            autoComplete='off'
            id='addItem'
            type="text" 
            placeholder='add item'
            required
            value={newItem}
            // it will reflect on component in backend on the time
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'
            // it will re-focus the 'add item' again and make button uncolored
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem
