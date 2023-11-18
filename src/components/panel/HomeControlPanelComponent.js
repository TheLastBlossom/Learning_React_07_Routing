import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export const HomeControlPanelComponent = () => {
    return (
        <div>
            <h1>HomeControlPanelComponent</h1>
            <p>Choose one of the options</p>
            <nav>
                <ul>
                    <li>
                        <Link to='/panel/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/panel/create-article'>Crear Article</Link>
                    </li>
                    <li>
                        <Link to='/panel/manage-users'>Manage Users</Link>
                    </li>
                    <li>
                        <Link to='/panel/about'>About</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
