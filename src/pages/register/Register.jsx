import './register.scss';

const Register = () => {
    return (
	<div className='register'>
	    <div className='top'>
		<div className='wrapper'>
		    <img
			className='logo'
			src='../../../public/logo.png'
			alt='Logo of the Futtech Company'
		    />
		    <button className='signIn'>Sign In</button>
		</div>
	    </div>

	    <div className='container'>
		<h1>Drone Footage, Tactical/Technical Analysis, and more</h1>
		<h2>Check the Demo here.</h2>
		<p>Want to register? Enter your email to create or restart your membership.</p>
		<div className='membership'>
		    <input type='email' placeholder='Email address'/>
		    <button className='getStarted'>Get Started</button>
		</div>
	    </div>

	</div>
    );
};

export default Register;
