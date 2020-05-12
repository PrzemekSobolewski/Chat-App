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
        <div className={"signupPage"}>
            <div className={"signupContent"}>
                <form className={"signupForm"} onSubmit={handleSubmit}>
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
                        <button className={"signupButton"} type="submit">Sign up</button>  
                    </div>
                    <p> or </p>
                    <div className={"outerSignupButtons"}>
                        <button className={"signupGoogleButton signupButton"} onClick={googleSignIn}>Sign up with Google</button>
                        <button className={"signupGithubButton signupButton"} onClick={githubSignIn}>Sign up with GitHub</button>
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