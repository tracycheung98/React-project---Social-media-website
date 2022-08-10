import {Link } from "react-router-dom";
import Header from "../Global/components/Header"
import '../Global/Global.css'
import MenuIcon from '../Global/img/menu.svg'
import PlusIcon from '../Global/img/plus.svg'

import Friends from './components/Friends'
import Posts from './components/Posts'
import './Feed.css'

const Feed = () => {
    return <div className="background">
        <Header className="header"/>
            <div className="menu">
                <img src={MenuIcon}></img>
            </div>
            <div className="plus">
                <img src={PlusIcon}></img>
            </div>

            <Friends />
            <Posts />

        <div className="footer">
            <Link to="/">Register</Link><br></br>
            <Link to="/Feed">Feed</Link><br></br>
            <Link to="/MyAccount">MyAccount</Link>
        </div>
    </div>
}

export default Feed