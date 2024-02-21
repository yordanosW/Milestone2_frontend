
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isNewAccount, setIsNewAccount] = useState(false);
    //const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        login({email, password})
    }

    const login = ({email, password}) => {
        console.log(JSON.stringify({
            email,
            password
        }));
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/login`,{
            method: 'Post',
            
            body: JSON.stringify({
                email,
                password
            }),
        })
        .then((resp) => {
            console.log(resp);

            if(resp.status == 200){
                alert('login')
            }

            return resp.json();
        })
        .then((data) => {

            if(data.error){
                alert(data.error);
            }
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }



    // const onButtonClick = (props) => {
    //     //Set initial error values to empty
    //     setEmailError('')
    //     setPasswordError('')
    //     if (isNewAccount) {
    //         createAccount()
    //     } else {
    //         //Check if email has an account associated with it
    //         const checkAccountExists = () => {
    //             axios.post('/api/users/check-account', { email })
    //                 .then(response => {
    //                     if (response.data.accountExists) {
    //                         logIn()
    //                     } else { //Ask user if they want to create a new account, and if yes, then log in
    //                         if (window.confirm('An account does not exist with this email address: ' + email + '. Do you want to create a new account?')) {
    //                             setIsNewAcoount()
    //                         }
    //                     }
    //                 })
    //                 .catch(error => {
    //                     console.error('Error checking:', error);
    //                 });
    //         }
    //         //Check if the user has entered both fields correctly
    //         if ('' === email) {
    //             setEmailError('Please enter your email')
    //             return
    //         }
        
    //         if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    //             setEmailError('Please enter a valid email')
    //             return
    //         }
        
    //         if ('' === password) {
    //             setPasswordError('Please enter a password')
    //             return
    //         }
        
    //         if (password.length < 8) {
    //             setPasswordError('The password must be 8 characters or longer')
    //             return
    //         }
    //         checkAccountExists()
    //     }
    //     const createAccount = () => {
    //         axios.post('/api/users/create-account', { email, password })
    //             .then(response => {
    //                 if (response.data.success) {
    //                     logIn()
    //                 } else {
    //                     setEmailError(response.data.message)
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error('Error creating account:', error);
    //             });
    //     }
    

        return (
            <div className={'mainContainer'}>
                <div className={'titleContainer'}>
                    <h2>Login</h2>
                </div>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className={'inputContainer'}>
                        <input
                            value={email}
                            placeholder="Enter your email here"
                            onChange={(ev) => setEmail(ev.target.value)}
                            className='inputBox' />
                        <label className='errorLabel'>{emailError}</label>
                    </div>
                    <br />
                    <div className='inputContainer'>
                        <input
                            value={password}
                            placeholder="Enter your password here"
                            onChange={(ev) => setPassword(ev.target.value)}
                            className='inputBox'
                            type='password' />
                        <label className='errorLabel'>{passwordError}</label>
                    </div>
                    <br />
                    <div className='inputContainer'>
                        <input
                            className='inputButton'
                            type='submit'
                            value='Log in' />
                    </div>
                    <div className='inputContainer'>
                        <input
                            className='inputButton'
                            type='button'
                            //onClick={onButtonClick}
                            value='Create a new account' />
                    </div>
                </form>
            </div>
        )
}

export default Login;