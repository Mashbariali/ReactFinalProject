import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import './Style.css'
import Test from './Video/Diving2.mp4'

export default function TicketReservation()  {
      const nav = useNavigate() 
      const [name , setName] = useState('')
      const [Date , setDate] = useState('')
      const [Number , setNumber] = useState('')
      const [Location , setLocation] = useState('')
  
      const postData = ()=>{
          axios.post(`https://62d43e245112e98e484cd960.mockapi.io/HW`,{name,Date,Number,Location}
          ).then(res=>{console.log(res);
          nav("/Ticket")
          })
          .catch(err =>{
              console.log(err);
            })
  
  
        }
  
  
    return (
      <div><video loop autoPlay muted  className='Video'>

      <source         
        src={Test} type="video/mp4"/> 
        height= {"500px"}

    </video>
      <div className='form'>
        <h1>Ticket booking</h1>
        
          <input className='input'placeholder='Name' onChange={(e)=>{setName(e.target.value)}}></input>
          <br></br>
          <input className='input'type="tel" placeholder='Mobile Number'onChange={(e)=>{setNumber(e.target.value)}}></input>
          <br></br>
          
          <select className='input2'placeholder='Location' onChange={(e)=>{setLocation(e.target.value)}}>
          <option value="..... ">....... </option>
            <option value="Jeddah ">Jeddah </option>
            <option value="Dammam">Dammam</option>
            <option value="Khobar ">Khobar </option>
          </select>
          <br></br>
          <input className='input2'type="datetime-local"onChange={(e)=>{setDate(e.target.value)}}></input>
          <br></br>
          <button className='input2' onClick={postData}>Send</button>
          
  
      </div>
      </div>
      
    )
  }
  
