
import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edituser = () => {

  let [Name,SetName]=useState("")
let [Salary,Setsalary]=useState("")
let [Company,SetCompany]=useState("")
let abc=useNavigate()

let{index}=useParams()
console.log(index);

useEffect(()=>{

  axios.get(`http://localhost:3000/User/${index}`)
  .then((response=>{
    SetName(response.data.Name)
    Setsalary(response.data.Salary)
    SetCompany(response.data.Company)

  })).catch(()=>{
    console.log("Went wrong");
  })
},[])

let nameData=(e)=>{

  SetName(e.target.value)
}

let numberData=(e)=>{

  Setsalary(e.target.value)
}
let companyData=(e)=>{

  SetCompany(e.target.value)
}
let formhandler=(e)=>{

  e.preventDefault()
  let payload={Name,Salary,Company}
  axios.put(`http://localhost:3000/User/${index}`,payload)
  .then(()=>{

    console.log("Data has been updayted");

  }).catch(()=>{

    console.log("NOT Found");
  })
  abc("/user")

}


  return (
    <div id={style.myform} >
  
    <form action="">
      <h3>Edit</h3>
          <label htmlFor="">Name</label>
          <input type="text"  value={Name} onChange={nameData}/>
          <br /><br />
          <label htmlFor="">Salary</label>
          <input type="number" value={Salary} onChange={numberData} />
          <br /><br />
          <label htmlFor="">Company</label>
          <input type="text" value={Company} onChange={companyData}/>
          <br />
          <button onClick={formhandler}>Submit</button>
          </form>
          </div>
  )
}

export default Edituser