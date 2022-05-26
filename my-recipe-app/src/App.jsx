import { useEffect,useState } from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => {

  const[recipes,setRecipes] = useState([]);

  useEffect(() => { 
    getRecipes ();
  }, []);

  const getRecipes = async () => {
    const APP_ID='21c51be8';
    const APP_KEY='340573cdb35244696e468aa014cdbd82';
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=egg&app_id=${APP_ID}&app_key=${APP_KEY}`);
    
    const data = await response.json();
    console.log('data',data);
    setRecipes(data.hits);
    // console.log(data.hits);
  };

    return (
      <div className='App'>
        <h1>Aldo Recipe App</h1>
        <form className='search-form'>
          <input className='search-bar' type="text"></input>
          <button className='search-button' type="submit">
            Search
          </button>
        </form>
        {recipes.map(recipe=>(<Recipe prop1={recipe} key={recipe.recipe.label}/>))}
      </div>
    );
};

export default App;
