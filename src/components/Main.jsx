import React from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';


import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup" 


import { useState,createContext } from 'react';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';

import { Link } from 'react-router-dom';

const schema=yup.object().shape({
    pickupLocation:yup.string().required(),
    dropoffLocation:yup.string().required(),
    date:yup.string().required(),
    time:yup.string().required(),
    addOns:yup.string().max(150)

})

const customerDetails={
    pickupLocation:"",
    dropoffLocation:"",
    date:new Date(),
    time:"",
    description:""

}
export let details;
export const Main = () => {
    
    const [data,setData]=useState(customerDetails);
    
    
    // const [dropoff,setDropoff]=useState("");
    // const [description,setDescription]=useState("");
    // const [date,setDate]=useState(new Date());
    const [time,setTime]=useState("00:00");

    const {register,handleSubmit,errors}=useForm({
        resolver: yupResolver(schema)
    });

    const submitForm=(data)=>{
        console.log(data)

    }
    const addDetails=()=>{
        return (console.log(data),
        console.log(details)
        )
    }
    
    details=createContext(data)
  return (
    <details.Provider value={details}>
        <div>
            <input 
                type="text"
                onChange={(e)=>{setData({...data,pickupLocation:e.target.value})}} 
                name="pickupLocation" 
                placeholder='Pickup location' 
                />
            
            <form onSubmit={handleSubmit(submitForm)}>
            
            

            <input 
                type="text"
                onChange={(e)=>{setData({...data,dropoffLocation:e.target.value})}}
                name="dropoffLocation" 
                placeholder='Drop-off location'
                
                />

            <DatePicker 
                onChange={(e)=>{setData({...data, time:e})}} 
                value={customerDetails.date} 
                name="date" 
                />

            <TimePicker 
                onChange={(e)=>{setData({...data, time:e})}} 
                value={time} 
                name="time"  
                />
            <textarea 
                name="addOns"
                onChange={(e)=>{setData({...data,description:e.target.value})}}  
                >
            </textarea>

            <button type="submit" onClick={addDetails}>Book</button>
        </form>
        <Link to='Success'>Success page</Link></div>
    </details.Provider>
    
  )
}


