import React, {useState} from 'react'
import Navbar from '../pages/NavBar/NavBar'


const Header = () => {
  const [links, setLinks] = useState([{nombre: 'patrones', url:`productos/patrones`, }, 
                                      {nombre: 'amigurumis', url:`productos/amigurumis`}])
    return (
        <>
          <Navbar links={links}/>  
        </>
    )
}

export default Header
