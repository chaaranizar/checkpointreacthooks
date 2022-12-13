import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import './moviscard.css'
const Moviescard = ({movie}) => {
  
  return (
    
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
      
      <ReactStars
  count={5}
 value = {movie.rate}
  size={24}
  color2={'#ffd700'}
  edit = {false} 
  />
  <div className='button'>
    <button className='b1'><a  href={movie.trailer} target= {"blanck"}>Trailer</a></button>
    <Link to={`/description/${movie.id}`}><button className='b2'>Description</button></Link>
  </div>
  </Card.Body>
    </Card>
    </div>
  )
}

export default Moviescard