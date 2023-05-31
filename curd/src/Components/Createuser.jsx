import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Createuser = () => {
let [Name,SetName]=useState("")
let [Salary,Setsalary]=useState("")
let [Company,SetCompany]=useState("")
let abc=useNavigate()
let Namedata=(e)=>{

    SetName(e.target.value)
}
let Salarydata=(e)=>{

    Setsalary(e.target.value)
}

let Companydata=(e)=>{

    SetCompany(e.target.value)
}
let formHandle=(e)=>{

    e.preventDefault()
    let payload={Name,Salary,Company}
    axios.post("http://localhost:3000/User",payload)
    .then(()=>{

        console.log("Data has been uploded");
    })
    .catch(()=>{

       console.log("Something went wrong");

    })
    abc("/user")
  
}


  return (

   <div id={style.myform} >
  
  <form action="">
        <label htmlFor="">Name</label>
        <input type="text"  value={Name} onChange={Namedata}/>
        <br /><br />
        <label htmlFor="">Salary</label>
        <input type="number" value={Salary} onChange={Salarydata} />
        <br /><br />
        <label htmlFor="">Company</label>
        <input type="text" value={Company} onChange={Companydata}/>
        <br />
        <button onClick={formHandle}>Submit</button>

        </form>

        </div>
  )
}

export default Createuser