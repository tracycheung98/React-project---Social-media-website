import user1 from '../../Global/img/post1.jpeg'

const Nav = () =>{
    return <div className="nav">
        <div className='userInfo'>
            <img src={user1}></img>
            <h1>Jane</h1>
        </div>
        <div className='controls'>
        <button>Change Profile Pic</button>
        <button>Change Username</button>
        <button>Change Password</button>

        </div>
        
    </div>
}

export default Nav