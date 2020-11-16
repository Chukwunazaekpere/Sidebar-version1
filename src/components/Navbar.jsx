import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'

import { SidebarData } from './data/SidebarData';
import * as AiIcons from 'react-icons/ai';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


    return (
        <div>
            <span className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </span>

            <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu' }>
                <div className='nav-menu-items'>
                    <section className='navbar-toggle' onClick={showSidebar}>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </section>
                </div>
                <div>
                    {
                        SidebarData.map( (item, index) => 
                        <div key={index}  className={item.list_item_style}>
                                <Link to={item.title} onClick={showSidebar}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                        </div>
                        )
                    }
                </div>
            </nav>

        </div>
    )
}

export default Navbar
