import React from 'react'

import UserItem from "./shared/UserItem.jsx"
import PhotoItem from "./shared/PhotoItem.jsx"
import ToggleText from './shared/ToggleText.jsx'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import UserPage from './pages/UserPage.jsx'
import PhotoPage from './pages/PhotoPage.jsx'

function Content() {
    const data = {
        name: 'Valentin',
        age: 23,
        photo: 'https://avatars.githubusercontent.com/u/114210745?v=4'
    }
    return (
        <Routes>
            <Route path='/' element={
                <main>
                    <div className="container">
                        <UserItem name={data.name} />
                        <h2>I'm {data.age}</h2>
                        <PhotoItem photo_url={data.photo} />
                        <ToggleText />
                    </div>
                </main>} />
            <Route path='/name' element={<UserPage/>} />
            <Route path='/photo' element={<PhotoPage/>} />
        </Routes>


    )
}

export default Content
