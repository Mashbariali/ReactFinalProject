import React,{useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Col, Container,Row } from 'react-bootstrap'


export default function Ticket() {
    const [data , setData] = useState([])
    useEffect(()=>{
        axios.get(`https://62d43e245112e98e484cd960.mockapi.io/HW`)
        .then(res =>{
            console.log(res.data);
            // setData(res.data[0].title);
            setData(res.data)
        })
      .catch(err =>{
        console.log(err);
      })
    },[])
    const setUpData = (e)=>{
        let {id , name,Date,Number,Location} = e
        localStorage.setItem("id" , id)
        localStorage.setItem("name" , name)
        localStorage.setItem("Date" , Date)
        localStorage.setItem("Number" , Number)
        localStorage.setItem("Location" , Location)

    }
    const getData = ()=>{
        axios.get(`https://62d43e245112e98e484cd960.mockapi.io/HW`)
        .then((getData) =>{
            setData(getData.data)

        })
    }
    const onDelete=(id)=>{
        axios.delete(`https://62d43e245112e98e484cd960.mockapi.io/HW/${id}`)
        .then(()=>{
            getData()

        })

    }
  return (
    <div>
        
        
        <Container>
            <Row md={"3"}>
        {data.map(e=>(
                <Col  >


        <Card className='cards mb-4' style={{ width: '18rem' ,float:'left'}}>
        <Card.Img className='barcode' variant="top" src="data:image/png;base64,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" />
      <Card.Body>
        <Card.Title className='text-dark'>{e.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{e.Location}</Card.Subtitle>
        <Card.Text className='text-dark'>{e.Number}</Card.Text>
        <Card.Text className='text-dark'>{e.Date}</Card.Text>

        
        <button onClick={()=>{onDelete(e.id)}}>Delete</button>
      </Card.Body>
    </Card>

    </Col>
      ))}
    </Row>
    </Container>

    </div>
  )
}

  
