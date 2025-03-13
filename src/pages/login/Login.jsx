import './login.scss';
import { useState, useRef } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleEmail = () => {
	setEmail(emailRef.current.value);
    }
    const handlePassword = () => {
	setPassword(passwordRef.current.value);
    }

    return (
	<div className='login'>
	    <div className='top'>
		<img
		    className='logo'
		    src='../../../public/logo.png'
		    alt='Logo of the Futtech Company'
		/>
	    </div>

	    <div className='container'>
		<form>
		    <h1>Sign In</h1>
		    <input type='email'
			   placeholder='Email address' />
		    <input type='password'
			   placeholder='Password'/>
		    <button>Sign In</button>
		    <span className='resetPassword'>
			Forgot Password?
		    </span>
		    <span className='text'>
			New to Futtech? <b>Sign up now</b>.
		    </span>
		    <span className='small'>
			<i>This page is protected by Google reCAPTCHA to ensure you're not a bot.</i>
		    </span>
		    <span className='small'>
			<i><b>Learn more.</b></i>
		    </span>
		</form>
	    </div>
	</div>
    );
};

export default Login;
