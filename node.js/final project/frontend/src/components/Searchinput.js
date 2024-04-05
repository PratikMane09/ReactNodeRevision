import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';
function Searchinput() {
    const [values,setValues]=useState()
    const navigate=useNavigate()
    function handleSubmit(e)
    {
        e.preventDefault()
        let key=e.target.value
        fetch(`http://localhost:4000/api/search/${key}`).then((resp1)=>{
            resp1.json().then((resp2)=>{
                setValues(resp2)
                navigate('/Search')
            })
        })

    }
  return (
    <div>
      <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={values}
              
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </div>
  )
}

export default Searchinput
