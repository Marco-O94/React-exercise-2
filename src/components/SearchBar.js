
import { useState } from 'react';
function SearchBar({ onSubmit, onTyping }) {

    const [searchTerm, setSearchTerm] = useState(''); // If we want to reset the search term, we can use this state variable
    
    // This piece of code is fired when the user types something in the search bar
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        // We can call the onTyping function that we passed as a prop to this component
        onTyping(event.target.value);
    };
    // This piece of code is fired when the user submits the form
    const handleFormSubmit = (event) => {
        event.preventDefault();
            onSubmit(searchTerm); // or we can use event.target[0].value
      
    };
    return (
        <form onSubmit={handleFormSubmit}>
        <input  type="search" value={searchTerm} onChange={handleChange} className="w-1/2 p-2 rounded-lg shadow-md border border-stone-400 mt-5" />
        </form>
    );
}

export default SearchBar;