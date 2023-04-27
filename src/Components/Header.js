import React,{useState} from 'react'
import logo from "../../src/logo.png"
import {Link} from 'react-router-dom'
import {ImSearch} from 'react-icons/im'



const Header=()=> {
  const [state,setState]=useState(false);
  const showDropdown=()=>{
    setState(true);
  }
  const hideDropdown=()=>{
    setState(false);
  }


  return (
    <nav className='header'>
        <img src={logo} alt='logo'/>
<div>
    <Link to="/tvshows" >TV Shows </Link>
    <Link to="/tvshows">Movies</Link>
    <Link to="/tvshows">Recently Added</Link>
    <Link to="/tvshows" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>{state?<ul onMouseEnter={showDropdown}><li>music</li><li>shows</li><li>moments</li></ul>:null}
    >My List</Link>

    
</div>
<ImSearch/>
    </nav>
  )
}

export default Header