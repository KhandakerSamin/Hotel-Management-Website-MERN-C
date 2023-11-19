import { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import bgImg from '../../assets/reservation/wood-grain-pattern-gray1x.png';
import logo from '../../assets/others/authentication2.png';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin';

const Login = () => {
    const [captchaValue, setCaptchaValue] = useState('');
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const { signIn } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(5);
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
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                Swal.fire({
                    title: "Logged In !",
                    text: "Your Account logged in Successfully",
                    icon: "success"
                });
                navigate(from, { replace: true })
            })
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

            <Helmet>
                <title>
                    Bristo Boss | Login
                </title>
            </Helmet>


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
                            <input type='email' placeholder='email' className='input max-w-lg  ' name='email' required />
                        </div>
                        <div className='form-control flex justify-center'>
                            <label className='label'>
                                <span className='label-text'>Password</span>
                            </label>
                            <input type='password' placeholder='password' className='input max-w-lg' name='password' required />
                        </div>
                        <div className='flex items-center justify-between mt-8 '>
                            <LoadCanvasTemplate />
                            <input
                                onBlur={() => handleValidate(captchaValue)}
                                type='text'
                                placeholder='Type the captcha'
                                className='input min-w-[290px] ml-2 '
                                name='captcha'
                                value={captchaValue}
                                onChange={(e) => setCaptchaValue(e.target.value)}
                                
                            />
                        </div>
                        <button
                            type='submit'
                            className={`w-full mt-8 btn bg-yellow-500 hover:bg-yellow-500 text-white text-xl font-bold text-center rounded-lg ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                                // fix the capthcha : disabled:(isButtonDisable)
                            disabled={isButtonDisabled}
                        >
                            Sign In
                        </button>
                        <Link to='/register'>
                            <p className='text-center text-yellow-500 font-bold my-3'>New here? Create a New Account</p>
                        </Link>
                        <p className='text-center'>Or sign in with</p>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
