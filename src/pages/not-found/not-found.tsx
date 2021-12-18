import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import './style.scss'

const NotFoundPage = () => {
    const navigate = useNavigate()
    const redirectUser = () => {
        localStorage.getItem('email') ?
        navigate('/profile') :
        navigate('/auth/login')
    }

    return(
        <div className="not-found-page">
            <h1>Oops!</h1>
            <h3>404 - PAGE NOT FOUND</h3>
            <h5>The page is missing</h5>
            <Button onClick={redirectUser}>Home page</Button>
        </div>
    )
}

export default NotFoundPage;