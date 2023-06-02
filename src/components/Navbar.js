import React from 'react'
import "../style/Navbar.css"

export default function Navbar() {
  return (
    <div className='nav'>
        <div className='left-nav'>QuaDB Movies</div>
        <div className='right-nav'>
            <button className='btn-nav'>SignUp</button>
        </div>
    </div>
  )
}
