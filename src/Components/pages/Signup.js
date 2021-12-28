import React from 'react';
import classes from '../../styles/Signup.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

const Signup = () => {
    return (
        <>
            <h1>Create a new account</h1>   
            <div className="column">
                <Illustration></Illustration> 
                <Form className={`${classes.signup}`}>
                    <TextInput type="text" placeholder="Enter Name" icon='person' />
                    <TextInput type="text" placeholder="Enter Email" icon='alternate_email' />
                    <TextInput type="password" placeholder="Enter Password" icon='lock' />
                    <TextInput type="password" placeholder="Confirm Password" icon='lock_clock' />
                    <Checkbox type="checkbox" text="I agree to the Terms & Conditions"   />
                    <Button><span>Submit now</span> </Button>
                    <div className="info">Already have an account? <a href="login.html">Login</a> instead.</div>
                </Form>
            </div>        
        </>
    );
};

export default Signup;
