import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../api_url';
import applogo from '../images/appLogo.png'
import Tradmark from './Tradmark';
import { ContextApi } from '../App';
import logo from '../images/tsmc/logo.png'
import eyeopen from '../images/sungrow/eyeopen.svg'
import eyeclosed from '../images/sungrow/eyeclosed.svg'

const Login = () => {

    const navigate = useNavigate();

    const {
        setLoading,
        toaster,
        setUser
    } = useContext(ContextApi);

    const [mobno, setmobno] = useState('');
    const [pwd, setpwd] = useState('');
    const [bloackedUsers, setBlockedUsers] = useState([]);
    const [phoneError, setPhoneError] = useState(
        {
            show: '',
            message: ''
        }
    )
    const [passwordError, setPasswordError] = useState(
        {
            show: '',
            message: ''
        }
    )
    const [secret, setSecret] = useState('password')


    const getBlockedUsers = async () => {
        const dataRes = await axios.get(`${BASE_URL}/get_blocked_users`).then(res => res.data);
        var temp = [];
        dataRes.forEach((doc) => {
            //console.log(doc.data());
            temp.push(doc.user_id);
            setBlockedUsers(temp);
        });
    }

    const handleSignIn = async () => {
        if (mobno.length === 0) {
            setPhoneError({ show: 'show-error', message: 'Phone Number can not be empty' })
            return
        }
        if (mobno.length !== 10) {
            setPhoneError({ show: 'show-error', message: 'Mobile Number is composed of 10 number' })
            return
        }
        if (pwd.length === 0) {
            setPasswordError({ show: 'show-error', message: 'Password can not be empty' })
            return
        }
        if (bloackedUsers.includes(String(mobno))) {
            toaster('You are blocked by the administrator!', 'fail');
            return;
        }
        await axios.post(`${BASE_URL}/login`, { mobno, pwd })
            .then(({ data }) => {
                if (data.user_details === null) {
                    toaster('Username or password error', 'fail')
                    return
                }
                localStorage.setItem('uid', data.user_details._id);
                setUser(data.user_details._id)
                setTimeout(() => {
                    navigate('/home');
                    setLoading(false);
                }, 1000);
            })
            .catch(error => {
                console.log(error);
                setTimeout(() => {
                    setLoading(false);
                    toaster("Some thing went wrong", 'fail')
                }, 1000);
            });
    }

    useEffect(() => {
        getBlockedUsers();
    }, [])

    const handelchange = (e) => {

        if (e.target.id === 'phoneNumber') {
            setmobno(e.target.value)
            if (e.target.value.length === 0) {
                setPhoneError({ show: 'show-error', message: 'Phone Number can not be empty' })
                return
            }
            else if (e.target.value.length !== 10) {
                setPhoneError({ show: 'show-error', message: 'Mobile Number is composed of 10 number' })
                return
            }
            else {
                setPhoneError({ show: '', message: '' })
                return
            }
        }

        if (e.target.id === 'password') {
            setpwd(e.target.value)
            if (e.target.value.length === 0) {
                setPasswordError({ show: 'show-error', message: 'Password can not be empty' })
                return
            }
            else {
                setPasswordError({ show: '', message: '' })
                return
            }
        }

    }

    const secrethandel = () => {
        if (secret === 'password') {
            setSecret('text')
        }
        else {
            setSecret('password')
        }
    }


    return (
        <>

            <section className="login-page">
                <div className="login-page-header flex items-center justify-center">
                    <img src={logo} alt="Your Image" className='w-3/4 ' />
                </div> <div className="login-page-content flex flex-col items-center">
                    <div className="login-page-content-title bold">
                        LOGIN
                    </div>
                    <div className="login-page-content-box w-full">
                        <div className="item">
                            <div data-v-466dae23="" className="phone-number-container">
                                <label data-v-466dae23="" htmlFor="phoneNumber">Phone Number</label>
                                <div data-v-466dae23="" className="input-container flex w-full input-container">
                                    <div data-v-466dae23="" className="flex items-center prefix">
                                        <span data-v-466dae23="" className="countryCode">+91</span>
                                    </div>
                                    <input
                                        onChange={handelchange}
                                        data-v-466dae23=""
                                        type="text"
                                        id="phoneNumber"
                                        placeholder="Input Phone Number"
                                        className="input-field w-full input-autofill"
                                    />
                                </div>
                            </div>
                            <div className={`error ${phoneError.show}`}>
                                <span>{phoneError.message}</span>
                            </div>
                        </div>
                        <div className="item">
                            <div data-v-0f114eeb="" className="input-container light">
                                <label data-v-0f114eeb="" htmlFor="password">Password</label>
                                <div data-v-0f114eeb="" className="flex items-center input-content input-container">
                                    <input
                                        onChange={handelchange}
                                        data-v-0f114eeb=""
                                        autoComplete="off"
                                        id="password"
                                        type={secret}
                                        placeholder="Input Password"
                                        className="input-field w-full input-autofill hasSuff"
                                    />
                                    <div onClick={secrethandel} data-v-0f114eeb="" className="suffix-icon">
                                        <img data-v-0f114eeb="" src={secret === 'password' ? eyeclosed : eyeopen} alt="suffix Icon" />
                                    </div>
                                </div>
                            </div>
                            <div className={`error ${passwordError.show}`} >
                                <span>{passwordError.message}</span>
                            </div>
                        </div>
                        {/* <div className="flex justify-end">
                            <Link to={'/forgotpassword'} href="/forgotPassword" className="item forgot">Forgot?</Link>
                        </div> */}
                        <div className="item">
                            <button onClick={handleSignIn} data-v-0df625cb="" type="primary" className="button flex items-center justify-center button-primary default w-full">
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login