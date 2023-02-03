import "./assets/styles/App.css";
import SearchBar from "./components/SearchBar.js";
import ImageList from './components/ImageList.js';
import searchImages from './api';
import { useState } from "react";


function App() {
    const [images, setImages] = useState([]);
    const [count, setCount] = useState(0);
    const handleSubmit = async (e) => {
        const res = await searchImages(e); // We have to use await because searchImages returns a promise, so we have to wait for it to resolve
        setImages(res);
        console.log(res);
    }
    // Here we use the useState hook to create a state variable called count and a function to update it called setCount
    
    
    // 
    const countLetters = (e) => {
        setCount(e.length);
    }



  return (
    <div className="App">
      <div className="container-lg text-center p-10">
        <h1 className="font-bold text-2xl">Find your image</h1>
        <SearchBar onSubmit={handleSubmit} onTyping={countLetters} />
        <p>You wrote {count} letters</p>
        <ImageList images={images} />
      </div>
    </div>
  );
}

export default App;
