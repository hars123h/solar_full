import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import BASE_URL from '../api_url';
import { ContextApi } from '../App';
import logo from '../images/tsmc/logo.png'
import eyeopen from '../images/sungrow/eyeopen.svg'
import eyeclosed from '../images/sungrow/eyeclosed.svg'

const Register = () => {

    const navigate = useNavigate();

    const {
        setLoading,
        toaster,

    } = useContext(ContextApi);

    const [search, setSearch] = useSearchParams();
    const [captcha, setCaptcha] = useState('');
    const [captchaField, setCaptchaField] = useState('');
    const [otpfield, setOTPfield] = useState('');
    const [otp, setOtp] = useState('');
    const [mobno, setMobno] = useState('')
    const [pwd, setPwd] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [invt, setInvt] = useState(search.get('invitationCode') || '');
    const [secret, setSecret] = useState('password')
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
    const [invtError, setInvtError] = useState(
        {
            show: '',
            message: ''
        }
    )
    const [captchaError, setCaptchaError] = useState(
        {
            show: '',
            message: ''
        }
    )

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


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
        if (pwd.length === 0) {
            setPasswordError({ show: 'show-error', message: 'Password can not be empty' })
            return
        }
        if (invt.length === 0) {
            setInvtError({ show: 'show-error', message: 'Invitation code can not be empty' })
            return
        }

        // if (otp.length === 0) {
        //     setSmsError({ show: 'show-error', message: 'SMS code can not be empty' })
        //     return
        // }
        // if (otp !== otpfield) {
        //     toaster('SMS verification code not matched', 'fail')
        //     return
        // }

        if (captchaField.length === 0) {
            setSmsError({ show: 'show-error', message: 'captcha code can not be empty' })
            return
        }
        if (captchaField !== captcha) {
            toaster('captcha verification code not matched', 'fail')
            return
        }

        // setLoading(true);

        await axios.post(`${BASE_URL}/register`, { mobno, pwd, name, email, invt })
            .then(({ data }) => {
                if (data.message === 'Mobile Number already registered!') {
                    toaster('Mobile Number already registered!', 'fail');
                } else if (data.message === 'invalid invite code') {
                    toaster('invalid invite code!', 'fail');
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                } else {
                    toaster('registration success', 'success');
                    // localStorage.setItem('uid', data.user_id);
                    setMobno('');
                    setPwd('');
                    setInvt('');
                    setEmail('')
                    setName('')
                    setOTPfield('')
                    setOtp('')
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                }
            })
            .catch((error) => {
                console.log(error);
                toaster('Something went wrong', 'fail');
            });
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
        if (pwd.length === 0) {
            setPasswordError({ show: 'show-error', message: 'Password can not be empty' })
            return
        }
        if (invt.length === 0) {
            setInvtError({ show: 'show-error', message: 'Invitation code can not be empty' })
            return
        }
        fetch(`https://www.fast2sms.com/dev/bulkV2?authorization=U1dPqEDiCO5WfZMAFwovrmz349tKBL0Hbh2eGlN8QXg7ujSRYVTSyRuW9H3LZ2Nafn5X6obgd47ACIt0&variables_values=${otpfield}&route=otp&numbers=${mobno}`)
            .then((response) => {
                // console.log(response);
                setSeconds(59)
                toaster('OTP sent successfully');
            })
            .catch(error => toaster('Something went wrong'));

        // console.log("otp", otpfield);

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
            setPwd(e.target.value)
            if (e.target.value.length === 0) {
                setPasswordError({ show: 'show-error', message: 'Password can not be empty' })
                return
            }
            else {
                setPasswordError({ show: '', message: '' })
                return
            }
        }

        if (e.target.id === 'invitation_code') {
            setInvt(e.target.value)
            if (e.target.value.length === 0) {
                setInvtError({ show: 'show-error', message: 'Invitation code cannot be blank' })
                return
            }
            else {
                setInvtError({ show: '', message: '' })
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

        if (e.target.id === 'captcha') {
            setCaptchaField(e.target.value)
            if (e.target.value.length === 0) {
                setCaptchaError({ show: 'show-error', message: 'Captcha code can not be empty' })
                return
            }
            else {
                setCaptchaError({ show: '', message: '' })
                return
            }
        }

    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captchaCode = '';
        for (let i = 0; i < 6; i++) {
            captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setCaptcha(captchaCode);
    };


    return (
        <>

            <div>
                <div className="signUp-page flex flex-col">
                    <div className="signUp-page-header flex items-center justify-center">
                        <img src={logo} alt="Your Image" className='w-3/4 ' />
                    </div>
                    <div className="signUp-page-content flex-1 flex flex-col items-center">
                        <div className="signUp-page-content-title bold">
                            SIGN UP
                        </div>
                        <div className="signUp-page-content-box w-full">
                            <div className="item">
                                <div data-v-466dae23="" className="phone-number-container" value="">
                                    <label data-v-466dae23="" htmlFor="phone_number">Phone Number</label>
                                    <div data-v-466dae23="" className="input-container flex w-full input-container">
                                        <div data-v-466dae23="" className="flex items-center prefix">
                                            <span data-v-466dae23="" className="countryCode">+91</span></div>
                                        <input
                                            onChange={e => { handelchange(e); setOTPfield(String(Math.floor(100000 + Math.random() * 900000))) }}
                                            data-v-466dae23=""
                                            type="text"
                                            id="phone_number"
                                            placeholder="Input Phone Number"
                                            className="input-field w-full input-autofill "
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
                            <div className="item">
                                <div data-v-0f114eeb="" className="input-container light">
                                    <label data-v-0f114eeb="" htmlFor="nickname">Nickname</label>
                                    <div data-v-0f114eeb="" className="flex items-center input-content input-container">
                                        <input
                                            onChange={(e) => setName(e.target.value)}
                                            data-v-0f114eeb=""
                                            autoComplete="off"
                                            id="nickname"
                                            type="text"
                                            placeholder="Input Nickname"
                                            className="input-field w-full input-autofill"
                                        />
                                    </div>
                                </div>
                                <div className="error">
                                    <span></span>
                                </div>
                            </div>
                            <div className="item">
                                <div data-v-0f114eeb="" className="input-container light">
                                    <label data-v-0f114eeb="" htmlFor="invitation_code">Invitation code</label>
                                    <div data-v-0f114eeb="" className="flex items-center input-content input-container">
                                        <input
                                            onChange={handelchange}
                                            data-v-0f114eeb=""
                                            autoComplete="off"
                                            id="invitation_code"
                                            type="text"
                                            placeholder="Input Invitation Code"
                                            // readOnly="readonly"
                                            className="input-field w-full input-autofill"
                                            value={invt}
                                        />
                                    </div>
                                </div>
                                <div className={`error ${invtError.show}`}>
                                    <span>{invtError.message}</span>
                                </div>
                            </div>
                            {/* <div className="item">
                                <div data-v-0f114eeb="" className="input-container light">
                                    <label data-v-0f114eeb="" htmlFor="sms_invitation_code">SMS Invitation Code</label>
                                    <div data-v-0f114eeb="" className="flex items-center input-content input-container">
                                        <input
                                            onChange={handelchange}
                                            data-v-0f114eeb=""
                                            autoComplete="off"
                                            id="sms_invitation_code"
                                            type="text"
                                            placeholder="Input SMS Invitation Code"
                                            className="input-field w-full input-autofill hasSuff"
                                        />
                                        <div data-v-0f114eeb="" className="suffix-icon">
                                            <button disabled={seconds > 0 || minutes > 0} onClick={handleMessage} data-v-0df625cb="" type="primary" className="btn button flex items-center justify-center button-link default" data-v-0f114eeb="">
                                                {seconds > 0 || minutes > 0 ?
                                                    <>
                                                        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                                                    </>
                                                    :
                                                    'Send'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={`error ${smsError.show}`} >
                                    <span>{smsError.message}</span>
                                </div>
                            </div> */}

                            <div style={{ fontSize: '20px', fontFamily: 'monospace', backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', letterSpacing: '5px', width: '150px',textDecoration: 'line-through' }}>
                                {captcha}
                            </div>

                            <div className="item">
                                <div data-v-0f114eeb="" className="input-container light">
                                    <label data-v-0f114eeb="" htmlFor="invitation_code">Captcha Code</label>
                                    <div data-v-0f114eeb="" className="flex items-center input-content input-container">
                                        <input
                                            onChange={handelchange}
                                            data-v-0f114eeb=""
                                            autoComplete="off"
                                            id="captcha"
                                            type="text"
                                            placeholder="Input Captcha Code"
                                            // readOnly="readonly"
                                            className="input-field w-full input-autofill"
                                            value={captchaField}
                                        />
                                    </div>
                                </div>
                                <div className={`error ${captchaError.show}`}>
                                    <span>{captchaError.message}</span>
                                </div>
                            </div>

                            <div onClick={handleRegister} className="item"><button data-v-0df625cb="" type="primary" className="button flex items-center justify-center button-primary default w-full">
                                SIGN UP
                            </button>
                            </div>
                            <div className="item text-center">
                                <div>
                                    <span>Already have an account?</span>
                                    <Link to={'/login'}>
                                        <span className="login">LOGIN</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register