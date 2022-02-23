import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import classes from '../styles/LoginForm.module.css';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function handelSubmit(e) {
    e.preventDefault();
    //do validation    
    try {
        setError("")
        setLoading(false);
        await login(email, password)
        navigate('/')
    } catch (err) {
        console.log(err);
        setLoading(false);
        setError("Failed to Login !")
    }    
  }
    return (
        <Form onSubmit={handelSubmit}  className={classes.login}>
            <TextInput icon="alternate_email" type="text" placeholder="Enter email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
            <TextInput icon="lock" type="password" placeholder="Enter password" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
            <Button disabled={loading} type="submit"><span>Submit now</span> </Button>
            {error && <p className="error">{error}</p>}
            <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>            
        </Form>
    );
};

export default LoginForm;