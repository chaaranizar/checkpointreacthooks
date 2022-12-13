import React, { useState } from 'react';
import './App.css';
import Addmovie from './Components/Addmovie';
import {moviesData} from './Components/Data'
import Filtermovie from './Components/Filtermovie';
import Movielist from './Components/Movielist';

function App() {
  const [movies, setMovies] = useState (moviesData)
  const add = (newMovies) => {
    setMovies ([...movies, newMovies])
  }
  const [inputSearch, setInputSearch] = useState("");
  const [inputRate, setInputRate] = useState(0);
  return (
    <div className="App">
      <Filtermovie inputSearch = {inputSearch} setInputSearch = {setInputSearch} inputRate = {inputRate} setInputRate ={setInputRate}/>
    <Movielist movies = {movies} inputSearch = {inputSearch} inputRate ={inputRate}/>
    <Addmovie add = {add}/>
   
    </div>
  );
}

export default App;
