import React from 'react';
import classes from '../../styles/Login.module.css';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <Form className={classes.login}>
                    <TextInput icon="alternate_email" type="text" placeholder="Enter email"  />
                    <TextInput icon="lock" type="password" placeholder="Enter password"  />
                    <Button><span>Submit now</span> </Button>
                    <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
                </Form>
            </div>
        </>
    );
};

export default Login;