import React from 'react'
import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom'
import { ArticlesComponent } from '../components/ArticlesComponent'
import { ContactComponent } from '../components/ContactComponent'
import { ErrorComponent } from '../components/ErrorComponent'
import { HomeComponent } from '../components/HomeComponent'
import { PersonComponent } from '../components/PersonComponent'
import { HomeControlPanelComponent } from '../components/panel/HomeControlPanelComponent'
import { CreateArticleComponent } from '../components/panel/options/CreateArticleComponent'
import { ManageUsersComponent } from '../components/panel/options/ManageUsersComponent'
import { AboutComponent } from '../components/panel/options/AboutComponent'

export const RouterComponent = () => {
    return (

        <BrowserRouter>
            <h1>Learning to use routing</h1>
            <nav className='navbar'>
                <ul>
                    <li>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "activated" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/articles" className={({ isActive }) => isActive ? "activated" : ""}>Articles</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "activated" : ""}>Contact</NavLink>
                    </li>                    
                    <li>
                        <NavLink to="/panel" className={({ isActive }) => isActive ? "activated" : ""}>Panel</NavLink>
                    </li>                    
                </ul>
            </nav>
            <div className='content'>
                <Routes>
                    <Route path='/' element={<HomeComponent />} />
                    <Route path='/home' element={<HomeComponent />} />
                    <Route path='/articles' element={<ArticlesComponent />} />
                    <Route path='/contact' element={<ContactComponent />} />
                    <Route path='*' element={<ErrorComponent />} />
                    <Route path='/person/:name/:lastname' element={<PersonComponent />} />
                    <Route path='/person/:name' element={<PersonComponent />} />
                    <Route path='/person' element={<PersonComponent />} />
                    <Route path='/redirect' element={<Navigate to={"/person/John"} />} />
                    <Route path='/panel/*' element={<HomeControlPanelComponent/>}>
                        <Route path='home' element={<HomeComponent/>} />
                        <Route path='create-article' element={<CreateArticleComponent/>} />
                        <Route path='manage-users' element={<ManageUsersComponent/>} />
                        <Route path='about' element={<AboutComponent/>} />
                    </Route>
                </Routes>
            </div>
            <footer>
                <strong>Copyring</strong>
            </footer>

        </BrowserRouter>
    )
}
