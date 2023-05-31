import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
const User = () => {
let[content,Setcontent]=useState([])
  useEffect(()=>{

    axios.get("http://localhost:3000/User")
    .then((response)=>{
      console.log("Data Found");
      Setcontent(response.data)

    }).catch(()=>{

      console.log("Data not FOund");
    })

   
  },[])

  let deleteData=(abc)=>{

    axios.delete(`http://localhost:3000/User/${abc}`)

  }
  return (
   <div id={style.homepage}>


    {content.map((x)=>{
      return(

        <div key={x.id}  id={style.cards} >
          
          <table>
          <tr>

            <th colSpan="2"><h5>User {x.id}</h5></th>
          </tr>
          <tr>

            <td>Name</td>
            <td>{x.Name}</td>
          </tr>

          <tr>
            <td>Salary</td>
            <td>{x.Salary}</td>
          </tr>

          <tr>

            <td>Company</td>
            <td>{x.Company}</td>
          </tr>

          <tr>

              <td><Link to={`/edit/${x.id}`}>Edit</ Link></td>
            <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
          </tr>

          </table>
        
        </div>
      )


    })}
   </div>
  )
}

export default User