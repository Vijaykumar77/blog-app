import React from 'react';
import "./NavBlog.css";
import HambergerDrawer from './HambergerDrawer'


const NavBlog = ({ setCategory }) => {
    return (
        <div className='nav'>
            
      <div className='icon'>

        <HambergerDrawer setCategory={setCategory} />  
        
      </div>
     <img style={{cursor:"pointer"}} className='top' src='./images.png' alt='Hi im not rendered'/>

        </div>
    )
}

export default NavBlog
