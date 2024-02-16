import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn(props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate();

    const onButtonClick = () => {
        //Set initial error values to empty
        setEmailError('')
        setPasswordError('')

        //Check if the user has entered both fields correctly
        if ('' === email) {
            setEmailError('Please enter your email')
            return
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Please enter a valid email')
            return
        }
        if ('' === password) {
            setPasswordError('Please enter a password')
            return
        }
        if (password.length < 7) {
            setPasswordError('The password must be 8 characters or longer')
        }

    }
    return (
        <div class={'mainContainer'}>
            <div class={'titleContainer'}>
                <div>SignIn</div>
            </div>
            <br />
            <div class={'inputContainer'}>
                <input
                    value={email}
                    placeholder="Enter your email here"
                    onChange={ev => setEmail(ev.target.value)}
                    class={'inputBox'} />
                <label class='errorLabel'>{emailError}</label>
            </div>
            <br />
            <div class={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={ev => setPassword(ev.target.value)}
                    class={inputBox} />
                <label class='errorLabel'>{passwordError}</label>
            </div>
            <br />
            <div class={'inputContainer'}>
                <input
                    class={'inputButton'}
                    type='button'
                    onClick={onButtonClick}
                    value={'Sign in'} />
            </div>
        </div>
    )
}

export default SignIn