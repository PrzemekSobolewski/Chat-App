import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="homePage">
            <div className="homeContent">
                <h1>Hello in ChatApp</h1>
                <div className="homeOptions">
                    <Link to='/login'>I have an account</Link>
                    <Link to='/signup'>Create an account</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;