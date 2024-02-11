import './logInSignUp.scss';

const LogInSignUp = () => {
    return ( 
        <div className="logInSignUp">
            <div className="logInSignUp-container">
                <h1>Sign Up</h1>
                <div className="logInSignUp-field">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="logInSignUp-logIn">
                    Already have an account? <span>Login here</span>              
                </p>
                <div className="logInSignUp-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By cotinuing, I agree to the term and of use & privacy policy.</p>
                </div>
            </div>
        </div>
     );
}
 
export default LogInSignUp;