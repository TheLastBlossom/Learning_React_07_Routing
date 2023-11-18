import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorComponent = () => {
    return (
        <div>
            <h2>I could not fing the page :(</h2>
            <Link to={"/home"}>Go to Home</Link>
        </div>
    )
}
