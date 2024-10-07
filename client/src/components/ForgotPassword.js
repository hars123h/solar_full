import React, { useContext, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia';
import { Link, useNavigate } from 'react-router-dom';
import { ContextApi } from '../App';
import axios from 'axios';
import BASE_URL from '../api_url';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import logo from '../images/tsmc/logo.png'
import eyeopen from '../images/sungrow/eyeopen.svg'
import eyeclosed from '../images/sungrow/eyeclosed.svg'

const ForgotPassword = () => {

    const navigate = useNavigate();


    const {
        setLoading,
        toaster,
        userDetails

    } = useContext(ContextApi);

    const [secret, setSecret] = useState('password')
    const [newPwd, setNewPwd] = useState('')
    const [otpfield, setOTPfield] = useState('');
    const [otp, setOtp] = useState('');
    const [mobno, setMobno] = useState('')
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
    const [smsError, setSmsError] = useState(
        {
            show: '',
            message: ''
        }
    )

    const secrethandel = () => {
        if (secret === 'password') {
            setSecret('text')
        }
        else {
            setSecret('password')
        }
    }

    const validatePassword = password => /[a-zA-Z]/.test(password) && /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);

    const handleRegister = async () => {
        if (mobno.length === 0) {
            setPhoneError({ show: 'show-error', message: 'Phone Number can not be empty' })
            return
        }
        if (mobno.length !== 10) {
            setPhoneError({ show: 'show-error', message: 'Mobile Number is composed of 10 number' })
            return
        }
        if (newPwd.length === 0) {
            setPasswordError({ show: 'show-error', message: 'Password can not be empty' })
            return
        }

        if (otp.length === 0) {
            setSmsError({ show: 'show-error', message: 'SMS code can not be empty' })
            return
        }
        if (otp !== otpfield) {
            toaster('SMS verification code not matched', 'fail')
            return
        }

        else {

            await axios.post(`${BASE_URL}/forgot_password`,
                { new_pwd: newPwd, mobno }).then(() => {
                    // setOtp('');
                    // setOTPfield('');
                    setMobno('');
                    setOTPfield('')
                    setOtp('')
                    setNewPwd('')
                    toaster('Password successfully updated!', 'success');
                    setTimeout(() => {
                        navigate('/login')
                    }, 3000);
                })
                .catch(error => toaster('Some Error Occured', 'fail'));
        }

    }

    const handleMessage = () => {
        if (mobno.length === 0) {
            setPhoneError({ show: 'show-error', message: 'Phone Number can not be empty' })
            return
        }
        if (mobno.length !== 10) {
            setPhoneError({ show: 'show-error', message: 'Mobile Number is composed of 10 number' })
            return
        }
        if (newPwd.length === 0) {
            setPasswordError({ show: 'show-error', message: 'Password can not be empty' })
            return
        }
        // fetch(`https://www.fast2sms.com/dev/bulkV2?authorization=27b58V4YOqBDMgWvNjapz1k9IHlrJfynC6w0hceRAZGoLimK3PuJC7OoiV4N2B6DjfwWKzb0lhgEetPH&variables_values=${otpfield}&route=otp&numbers=${mobno}`)
        //     .then((response) => {
        //         console.log(response);
        //         toaster('OTP sent successfully');
        //     })
        //     .catch(error => toaster('Something went wrong'));

        console.log("otp", otpfield);

    }

    const handelchange = (e) => {

        if (e.target.id === 'phone_number') {
            setMobno(e.target.value)
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
            setNewPwd(e.target.value)
            if (e.target.value.length === 0) {
                setPasswordError({ show: 'show-error', message: 'Password can not be empty' })
                return
            }
            else {
                setPasswordError({ show: '', message: '' })
                return
            }
        }

        if (e.target.id === 'sms_invitation_code') {
            setOtp(e.target.value)
            if (e.target.value.length === 0) {
                setSmsError({ show: 'show-error', message: 'SMS code can not be empty' })
                return
            }
            else {
                setSmsError({ show: '', message: '' })
                return
            }
        }

    }


    return (
        <>

            <section className="forgot-page flex flex-col">
                <div className="forgot-page-header flex items-center justify-center">
                    <img src={logo} alt="Your Image" className='w-3/4 ' />
                </div>
                <div className="forgot-page-content flex-1 flex flex-col items-center">
                    <div className="forgot-page-content-title bold">
                        RESET PASSWORD
                    </div>
                    <div className="forgot-page-content-box w-full">
                        <div className="item">
                            <div data-v-466dae23="" className="phone-number-container">
                                <label data-v-466dae23="" htmlFor="phone_number"></label>
                                <div data-v-466dae23="" className="input-container flex w-full input-container">
                                    <div data-v-466dae23="" className="flex items-center prefix">
                                        <span data-v-466dae23="" className="countryCode">+91</span></div>
                                    <input
                                        onChange={e => { handelchange(e); setOTPfield(String(Math.floor(100000 + Math.random() * 900000))) }}
                                        data-v-466dae23=""
                                        type="text"
                                        id="phone_number"
                                        placeholder="Phone Number"
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
                                <label data-v-0f114eeb="" htmlFor="password"></label>
                                <div data-v-0f114eeb="" className="flex items-center input-content input-container">
                                    <input
                                        onChange={handelchange}
                                        data-v-0f114eeb=""
                                        autoComplete="off"
                                        id="password"
                                        type={secret}
                                        placeholder="Enter New Password"
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
                        <div className="item">
                            <div data-v-0f114eeb="" className="input-container light">
                                <label data-v-0f114eeb="" htmlFor="sms_invitation_code"></label>
                                <div data-v-0f114eeb="" className="flex items-center input-content input-container">
                                    <input
                                        onChange={handelchange}
                                        data-v-0f114eeb=""
                                        autoComplete="off"
                                        id="sms_invitation_code"
                                        type="text"
                                        placeholder="Enter SMS verification code"
                                        className="input-field w-full input-autofill hasSuff"
                                    />
                                    <div data-v-0f114eeb=""
                                        className="suffix-icon">
                                        <button onClick={handleMessage} data-v-0df625cb="" type="primary" className="btn button flex items-center justify-center button-link default" data-v-0f114eeb="">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={`error ${smsError.show}`} >
                                <span>{smsError.message}</span>
                            </div>
                        </div>
                        <div className="item">
                            <button onClick={handleRegister} data-v-0df625cb="" type="primary" className="button flex items-center justify-center button-primary default w-full">
                                CONFIRM
                            </button>
                            <Link to={'/login'} data-v-0df625cb="" type="primary" className="button flex items-center justify-center button-text default w-full mt-3 text-[orange]">
                                CANCEL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgotPassword