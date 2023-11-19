import bgImg from '../../assets/reservation/wood-grain-pattern-gray1x.png'
import logo from '../../assets/others/authentication2.png'
import { Form, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../Components/SocialLogin';

const Register = () => {

    const axiosPublic = useAxiosPublic()

    const bannerStyle = {
        backgroundImage: `url(${bgImg})`,
    }
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {

        // console.log(data)

        createUser(data.email, data.password)
            .then(res => {
                const newUser = res.user
                // console.log(newUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database 
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    Swal.fire({
                                        title: "Congratulations!",
                                        text: "You have created your accunt successfully",
                                        icon: "success"
                                    });
                                    reset();
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })

    }

    // SAMIN123yeasar!


    return (
        <div className=' will-change-scroll flex  items-center h-screen' style={bannerStyle}>

            <Helmet>
                <title>
                    Bristo Boss | SignUp
                </title>
            </Helmet>

            <div className='max-w-screen-xl md:min-w-[1200px] shadow-2xl min-h-[700px] flex flex-row-reverse mx-auto items-center' style={bannerStyle}>
                <div className='w-1/2  h-full'>
                    <div className='h-[600px] mx-auto flex items-center w-full'>
                        <img className='' src={logo} alt="" />
                    </div>
                </div>
                <div className='w-1/2 px-20'>
                    <h1 className='text-4xl font-bold text-center '>Sign Up</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Namel</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Name" className="input max-w-lg  input-bordered"
                                name='name'
                            />
                            {errors.name && <span className='text-red-600'>Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("photoUrl", { required: true })} type="text" placeholder="Photo URL" className="input max-w-lg  "
                                name='photoUrl'
                            />
                            {errors.photoUrl && <span className='text-red-600'>Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", { required: true })} type="email" placeholder="email" className="input max-w-lg  input-bordered"
                                name='email'
                            />
                            {errors.email && <span className='text-red-600'>Email field is required</span>}
                        </div>
                        <div className="form-control flex justify-center">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                                })} type="password" placeholder="password" className="input max-w-lg input-bordered"
                                name='password'
                            />
                            {/* {console.log(errors)} */}
                            {errors.password?.type === 'required' && <span className='text-red-600'>Password field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-600'>Password length must be 6 </span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password length must be less then 20 </span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-600'>Must have upper case , lower case , number, and one special character</span>}
                        </div>
                        <div>

                        </div>
                        <button onSubmit={onsubmit} type='submit' className='w-full mt-8 btn bg-yellow-600 hover:bg-yellow-500 text-white text-xl font-bold text-center rounded-lg '>Sign Up</button>
                        <Link to='/login'><p className='text-center text-yellow-500 font-bold my-3'>Already registered? Go to log in</p></Link>
                        <p className='text-center'>Or sign up with</p>


                            {/* Social login btn*/}

                            <SocialLogin></SocialLogin>

                        
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;