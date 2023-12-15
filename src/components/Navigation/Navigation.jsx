import { useEffect } from 'react';
import style from './Navigation.module.scss'
import { NavLink } from 'react-router-dom';

export const Navigation = () => {

    return (
        <nav className={style.navStyle}>
          <div>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'white' : 'silver', textDecoration: 'none' })} to="/">Min oversigt</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'white' : 'silver', textDecoration: 'none' })} to="/booking">Mine booking</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'white' : 'silver', textDecoration: 'none' })} to="/Opretny">Opret ny event</NavLink>
            {/* <NavLink style={({ isActive }) => ({ color: isActive ? 'white' : 'silver', textDecoration: 'none' })} to="/userposts">Posts</NavLink> */}
            <NavLink style={({ isActive }) => ({ color: isActive ? 'white' : 'silver', textDecoration: 'none' })} to="/login">Login</NavLink>
          </div>
        </nav>
      );
      
      
}
