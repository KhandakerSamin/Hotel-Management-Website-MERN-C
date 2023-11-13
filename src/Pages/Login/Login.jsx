import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import bgImg from '../../assets/reservation/wood-grain-pattern-gray1x.png';
import logo from '../../assets/others/authentication2.png';

const Login = () => {
    const [captchaValue, setCaptchaValue] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const bannerStyle = {
        backgroundImage: `url(${bgImg})`,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        handleValidate(captchaValue);
    };

    const handleValidate = (user_captcha_value) => {
        if (validateCaptcha(user_captcha_value)) {
            setButtonDisabled(false); 
        } else {
            alert('Captcha Does Not Match');
            setButtonDisabled(true); 
        }
    };

    return (
        <div className='will-change-scroll flex items-center h-screen' style={bannerStyle}>
            <div className='max-w-screen-xl md:min-w-[1200px] shadow-2xl min-h-[700px] flex mx-auto items-center' style={bannerStyle}>
                <div className='w-1/2 h-full'>
                    <div className='h-[600px] mx-auto flex items-center w-full'>
                        <img className='' src={logo} alt='' />
                    </div>
                </div>
                <div className='w-1/2 px-20'>
                    <h1 className='text-4xl font-bold text-center'>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Email</span>
                            </label>
                            <input type='email' placeholder='email' className='input max-w-lg  input-bordered' name='email' required />
                        </div>
                        <div className='form-control flex justify-center'>
                            <label className='label'>
                                <span className='label-text'>Password</span>
                            </label>
                            <input type='password' placeholder='password' className='input max-w-lg input-bordered' name='password' required />
                        </div>
                        <div className='flex items-center justify-between mt-8 '>
                            <LoadCanvasTemplate />
                            <input
                                type='text'
                                placeholder='Type the captcha'
                                className='input max-w-md ml-2 input-bordered'
                                name='captcha'
                                value={captchaValue}
                                onChange={(e) => setCaptchaValue(e.target.value)}
                                required
                            />
                            <button
                                type='button'
                                className='text-5xl mb-[4px]'
                                onClick={() => handleValidate(captchaValue)}
                            >
                               ✅
                            </button>
                        </div>
                        <button
                            type='submit'
                            className={`w-full mt-8 btn bg-yellow-600 hover:bg-yellow-500 text-white text-xl font-bold text-center rounded-lg ${
                                isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            disabled={isButtonDisabled}
                        >
                            Sign In
                        </button>
                        <Link to='/register'>
                            <p className='text-center text-yellow-500 font-bold my-3'>New here? Create a New Account</p>
                        </Link>
                        <p className='text-center'>Or sign in with</p>
                        <div className='flex justify-around items-center mx-32 mt-6'>
                            {/* Social media buttons */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
