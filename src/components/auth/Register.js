import React from 'react';

const Register = () => {
    return (
        <div className="form">
            <h2>Please Register or Back to <a href="/">Home page</a></h2>
            <form action='/auth/register' method='post'>
                <div className="input-container">
                    <label>Name </label>
                    <input type="text" name="name" placeholder='Full Name' required />
                </div>
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

                <p>Already have an account? <a href="/auth/login"> Login</a></p>
            </form>
        </div>
    );
}

export default Register;
