import React, {useState} from 'react'
import Navbar from '../pages/NavBar/NavBar'

const Header = () => {
  const [links, setLinks] = useState(['productos', 'cuenta'])
    return (
        <>
          <Navbar links={links}/>  
        </>
    )
}

export default Header
