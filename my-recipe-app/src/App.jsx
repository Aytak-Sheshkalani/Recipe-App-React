import React from 'react'
import { useEffect,useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const[recipes,setRecipes] = useState([]);
  const[search,setSearch] = useState("");
  const [query, setQuery] = useState('');

  useEffect(() => { 
    getRecipes ();
  }, [query]);

  const getRecipes = async () => {
    const APP_ID='21c51be8';
    const APP_KEY='340573cdb35244696e468aa014cdbd82';
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch =e=>{
    e.preventDefault();
    setQuery(search);
    // setSearch("");
  }

  return (
  
    <div className='App'>
      <h1>Aldo Recipe App</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updateSearch}></input>
        <button className='search-button' type="submit">
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe=>(<Recipe prop1={recipe} key={recipe.recipe.label}/>))}
      

        {/* {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))} */}
      </div>      
    </div>
    
  );  
};

export default App;
