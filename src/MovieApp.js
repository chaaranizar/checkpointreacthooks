import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbars from './Components/Navbars'
import App from './App'
import Contactus from './pages/Contactus'
import Description from './pages/Description'
import Error from './pages/Error'
import { moviesData } from './Components/Data'

const MovieApp = () => {
    const [movies, setMovies] = useState (moviesData)
    const add = (newMovies) => {
      setMovies ([...movies, newMovies])
    }
  return (
    <div>
        <Navbars/>
        <Routes>
            <Route exact path='/' element = {<App />}/>
            <Route  path='/Contactus' element = {<Contactus/>}/>
            <Route  path='/description/:id' element = {<Description movies = {movies}/>}/>
            <Route  path='/*' element = {<Error/>}/>
        </Routes>
    </div>
  )
}

export default MovieApp
