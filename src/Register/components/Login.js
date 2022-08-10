
const Login = () => {
    return <div className='login'>
        <form className="forms">
                <h1>Login</h1>
                <label for="email">Email: </label><br></br>
                <input type="email" id="email" name="email" placeholder="Email"></input><br></br><br></br>
                <label for="password">Password: </label><br></br>
                <input type="password" id="password" name="password" placeholder="Password"></input><br></br><br></br>
                <div className='buttons'>
                    <button type='submit'>Login</button><br></br>
                    <a href="#">Forget password?</a>
                </div>
                
        </form>
    </div>
}

export default Login