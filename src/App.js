import react,{useState,useEffect} from 'react';
import './App.css';
import Header  from './components/Header';
import Recipes from './components/Recipes';
import Axios from 'axios';
import Footer from './components/Footer';
function App() {
  const [search,setSearch] = useState("rice");
  const [recipie,setRecipie]  = useState([]);
  const APP_ID = "64960fb0";
  const APP_KEY = "1aa1cba054f7dd93c403164806c12d6c";
  const onInputChange = (e) =>{
    // console.log(e.target.value);
    setSearch(e.target.value);
  }
  useEffect(()=>{
    getRecipes();
    console.log("usEffect");
  },[]);
  const getRecipes = async() =>{
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipie(res.data.hits);
    console.log(res.data.hits);
  }
  // getRecipes();
  return (
    <div className="App">
      <Header
      search={search}
      onSearch ={onInputChange}
      getRecipes ={getRecipes} />
      <div className="recipe_container">
        <Recipes
        recipie={recipie}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
