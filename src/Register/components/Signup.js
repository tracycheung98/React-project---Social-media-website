
const Signup = () => {
    return <div>
        <form className="forms">
            <h1>Sign Up</h1>
                <label for="email">Email: </label><br></br>
                <input type="email" id="email" name="email" placeholder="Email"></input><br></br><br></br>
                <label for="password">Password: </label><br></br>
                <input type="password" id="password" name="password" placeholder="Password"></input><br></br><br></br>
                <label for="username">Username: </label><br></br>
                <input type="text" id="username" name="username" placeholder="Username"></input><br></br><br></br>
                <div className='buttons'>
                    <button type='submit'>Login</button><br></br>
                    <button type='cancel'>Reset</button><br></br>
                </div>
        </form>
    </div>
}

export default Signup