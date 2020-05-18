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
        <div className="login_page">
            <div className="login_content">
                <form className="login_form" onSubmit={handleSubmit} >
                    <h1>
                        Login to <Link to="/">ChatApp</Link>
                    </h1>
                    <div>
                        <input placeholder='Email' name='email' type='email' onChange={e => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div>
                        <input placeholder='Password' name='password' type='password' onChange={e => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div>
                        <button className={"login_button"} type="submit">Log in</button>
                    </div>
                    <p> or </p>
                    <div className={"outer_login-buttons"}>
                        <button className={"login_google-button login_button"} onClick={googleSignIn}>Log in with Google</button>
                        <button className={"login_github-button login_button"} onClick={githubSignIn}>Log in with GitHub</button>
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