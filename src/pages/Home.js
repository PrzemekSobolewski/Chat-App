import React, { useState } from 'react';
import Link from 'react-router-dom';

const Home = () => {
    return(
        <>
            <h1>Hello in ChatApp</h1>
            <div>
                <div>
                    <Link to='/login'>I have an account</Link>
                </div>
                <div>
                    <Link to='/signup'>Create an account</Link>
                </div>
            </div>
        </>
    );
}

export default Home;