import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {signup, signInWithGoogle, signInWithGitHub} from '../helpers/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(email, password);
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
        <div className={"signup_page"}>
            <div className={"signup_content"}>
                <form className={"signup_form"} onSubmit={handleSubmit}>
                    <h1>
                        Sign up to <Link to="/">ChatApp</Link>
                    </h1>
                    <div>
                        <input placeholder='Email' name='email' type='email' onChange={e => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div>
                        <input placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div >
                        <button className={"signup_button"} type="submit">Sign up</button>  
                    </div>
                    <p> or </p>
                    <div className={"outer_signup-buttons"}>
                        <button className={"signup_google-button signup_button"} onClick={googleSignIn}>Sign up with Google</button>
                        <button className={"signup_github-button signup_button"} onClick={githubSignIn}>Sign up with GitHub</button>
                    </div>
                    <div>
                        <h5>Already have an account? <Link to="/login">Log in</Link></h5>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;