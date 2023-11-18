import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const PersonComponent = () => {
    const { name = "John", lastname = "Doe" } = useParams();
    let navigate = useNavigate();

    const redirect = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let lastname = e.target.lastname.value;
        let url = "";
        if (name.length > 0 && lastname.length > 0) {
            url = `/person/${name}/${lastname}`;
            navigate(url);
        } else if (name.length > 0) {
            url = `/person/${name}`;
            navigate(url);
        }
    }
    return (
        <div>
            <h2>PersonComponent</h2>
            <p>{name} {lastname}</p>
            <div>
                <form onSubmit={redirect}>
                    <input type='text' name='name' />
                    <input type='text' name='lastname' />
                    <input type='submit' name='send' value={"Send"} />
                </form>
            </div>
        </div>
    )
}
