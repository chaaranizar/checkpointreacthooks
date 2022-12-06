import React from 'react'
import { Form } from 'react-bootstrap'
import ReactStars from 'react-stars'

const Filtermovie = ({inputSearch, setInputSearch, inputRate, setInputRate}) => {
  return (
    <div>
        <div>
        <Form.Control type="text" placeholder="Search Movie" 
        onChange = {(e) => setInputSearch(e.target.value)}
        value = {inputSearch}
        />
        </div>
        <div>
<ReactStars
count={5}
onChange={setInputRate}
size={24}
color2={'#ffd700'}
value = {inputRate}
/>,
</div>
    </div>
  )
}

export default Filtermovie