import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {signin, signInWithGoogle, signInWithGitHub} from '../helpers/auth';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signin(email, password) 
        } catch (error) {
            console.log(error);
        }
    }

    const googleSignIn = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error)
        }
    }

    const githubSignIn = async () => {
        try {
            await signInWithGitHub();
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <div className="loginPage">
            <div className="loginContent">
                <form className="loginForm" onSubmit={handleSubmit} >
                    <h1>
                        Login to <Link to="/">ChatApp</Link>
                    </h1>
                    <div>
                        <input className="loginEmail" placeholder='Email' name='email' type='email' onChange={e => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div>
                        <input className="LoginPassword" placeholder='Password' name='password' type='password' onChange={e => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div>
                        <button className={"loginButton"} type="submit">Log in</button>
                    </div>
                    <p> or </p>
                    <div className={"outerLoginButtons"}>
                        <button className={"loginGoogleButton loginButton"} onClick={googleSignIn}>Log in with Google</button>
                        <button className={"loginGithubButton loginButton"} onClick={githubSignIn}>Log in with GitHub</button>
                    </div>
                    <div>
                        <h5>Do not have an account? <Link to="/signup">Sign up</Link></h5>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;