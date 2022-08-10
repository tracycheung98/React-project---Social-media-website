import {Link } from "react-router-dom";
import Header from "../Global/components/Header"
import '../Global/Global.css'

import Login from "./components/Login"
import Signup from "./components/Signup"
import './Register.css'

const Register = () => {
    return <div className="background">
        <Header/>
        <div className="register">
            <Login />
            <Signup />
        </div>
        <div className="footer">
            <Link to="/">Register</Link><br></br>
            <Link to="/Feed">Feed</Link><br></br>
            <Link to="/MyAccount">MyAccount</Link>
        </div>
    </div>
}

export default Register