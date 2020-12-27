import React, {useState} from 'react'
import Navbar from '../pages/NavBar/NavBar'

const header = () => {
  const [links, setLinks] = useState(['caterogia', 'cuenta'])
    return (
        <>
          <Navbar links={links}/>  
        </>
    )
}

export default header
