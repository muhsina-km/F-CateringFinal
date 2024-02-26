import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    
    return (
        <div className="sidebar">

            <ul>
                <li className='list-item'> 
                < HomeIcon className='icon' /> 
                < a href="\home">Home</a>
               </li>
                
            </ul>
            <br />
            <div className='list-item'>
                <EditNoteIcon className='icon' fontSize='large'/>Registrations
            </div>
            <ul>
                {/* <a href='/food'><li>Food Details</li></a> */}
                <a href='/package'><li>Food Items</li></a>
            </ul>
            <div className='list-item'>
                <VisibilityIcon className='icon'/> View
            </div>
            <ul>
                {/* <a href="/foodview"><li>Food Details View</li></a> */}
                <a href="/packageview"><li>Food Items View</li></a>
                <a href="/addressview"><li>Customerr details</li></a>
                <a href="/orderview"><li>Order View</li></a>
            </ul>

        </div>
    );
};

export default Sidebar;