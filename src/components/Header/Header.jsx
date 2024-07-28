import React from 'react'
import {Link} from 'react-scroll'
import './Header.css'

// react scroll package
const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
            <h1>Develop<span>er</span></h1>
        </div>
        <div className='header_right'>
            <Link to='about' smooth={true} duration={500}>
            <h4>
                About Me
            </h4>
            </Link>
            <Link to='skills' smooth={true} duration={500} >
                <h4>
                    Skills
                </h4>
            </Link>
            <Link to='projects' smooth={true} duration={500} >
                <h4>
                    Projects
                </h4>
            </Link>
            <Link to='exp' smooth={true} duration={500} >
                <h4>
                    Experience
                </h4>
            </Link>
            <Link to='contact' smooth={true} duration={500} >
                <h4>
                    Contact
                </h4>
            </Link>
            <h4 className='header_rightButton'>
                <a href='https://github.com/jegannathan-mp' target='_blank' rel="noopener noreferrer">Join With Me</a>
            </h4>
        </div>
    </div>
  )
}

export default Header