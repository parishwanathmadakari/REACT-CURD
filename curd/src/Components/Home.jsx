import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
    <section id={style.nav}>
    <Link to="/">createuser</Link>
    <Link to="/user">User</Link>
    



    </section>

    
  )
}

export default Home