import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsHandbag} from 'react-icons/bs'
import {BiLogIn} from 'react-icons/bi'

export default function Menu() {
    return (
        <>
            <div className='nav-items'>
                <NavLink to="/">
                    <span>Home</span>
                </NavLink>
                <NavLink to="/">
                    <span>Resturant</span>
                </NavLink>

                <NavLink to="/">
                    <span>Menu</span>
                </NavLink>

                <NavLink to="/">
                    <span>Contact</span>
                </NavLink>
            </div>

            <div className='btn-nav'>
                <button className='btn-cart'>
                    <BsHandbag/>
                    </button>
                <button className="login">
                    <BiLogIn/>
                    Login
                    </button>
            </div>
        </>
    )
}
