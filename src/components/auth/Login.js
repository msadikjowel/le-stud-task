import React from 'react';

const Login = () => {
    return (
        <div className="form">
            <h2>Please login or Back to <a href="/">Home page</a></h2>
            <form action='/auth/login' method='post'>
                <div className="input-container">
                    <label>Email </label>
                    <input type="text" name="email" placeholder='Email' required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" placeholder='Password' required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>

                <p>Don't have an account? <a href="/auth/register"> Sign up</a></p>
            </form>
        </div>
    );
}

export default Login;
