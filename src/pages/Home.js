import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="home_page">
            <div className="home_content">
                <h1>Hello in ChatApp</h1>
                <div className="home_options">
                    <Link to='/login'>I have an account</Link>
                    <Link to='/signup'>Create an account</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;