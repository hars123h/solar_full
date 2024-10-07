import React, { useContext, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App'
import axios from 'axios'
import BASE_URL from '../api_url'
import { FiArrowLeft } from 'react-icons/fi'
import eyeopen from '../images/sungrow/eyeopen.svg'
import eyeclosed from '../images/sungrow/eyeclosed.svg'

const WpasswordChange = () => {

    const navigate = useNavigate();


    const {
        setLoading,
        toaster,
        userDetails

    } = useContext(ContextApi);

    const [secret, setSecret] = useState('password')
    const [pwd, setPwd] = useState('')
    const [otpfield, setOTPfield] = useState('');
    const [otp, setOtp] = useState('');
    const [passwordError, setPasswordError] = useState(
        {
            show: '',
            message: ''
        }
    )

    const handelchange = (e) => {

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

    }

    const secrethandel = () => {
        if (secret === 'password') {
            setSecret('text')
        }
        else {
            setSecret('password')
        }
    }

    const handleMessage = () => {
        // if (mobno.length !== 10) {
        //     toaster('Invalid Mobile No, please enter a valid number');
        //     return;
        // }
        fetch(`https://www.fast2sms.com/dev/bulkV2?authorization=27b58V4YOqBDMgWvNjapz1k9IHlrJfynC6w0hceRAZGoLimK3PuJC7OoiV4N2B6DjfwWKzb0lhgEetPH&variables_values=${otpfield}&route=otp&numbers=${userDetails.mobno}`)
            .then((response) => {
                console.log(response);
                toaster('OTP sent successfully');
            })
            .catch(error => toaster('Something went wrong'));
    }

    // console.log("otp", otpfield,userDetails.mobno);

    const handleRegister = async () => {

        if (pwd.length === 0) {
            toaster('New Password can not be empty')
        }

        // else if (otp !== otpfield) {
        //     toaster('Otp does not match')
        // }

        else {

            await axios.post(`${BASE_URL}/reset_withdrawal_password`,
                { new_wpwd: pwd, user_id: localStorage.getItem('uid') }).then(() => {
                    setOtp('');
                    setOTPfield('');
                    setPwd('');
                    toaster('Password successfully updated!');
                    setTimeout(() => {
                        navigate('/settings')
                    }, 3000);
                })
                .catch(error => toaster('Some Error Occured'));
        }

    }


    return (
        <>
            <div className="">
                <div className="w-full mx-auto max-w-[800px]">

                <header className="h-[50px] leading-[50px] block pb-[10px] bg-[#f8f9fb] border-0 border-b-[1px] border-[#e7e8ea]">
                        <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/settings'} className="w-[60px] h-[50px] left-0 text-center text-[22px] absolute z-[2] flex justify-center items-center ">
                                <FiArrowLeft size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center font-bold text-lg absolute z-[1] flex-1 ' >My Bank Card</h2>

                        </div>
                    </header>

                    <div className="m-[10px] p-[10px] relative">

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

                        <div className="flex flex-wrap items-center my-10 w-full justify-end ">

                            {/* <Link to={`/login`} className='text-[#1f3d70] bg-white border-[1px] border-[#1f3d70] h-11 leading-10 px-5 text-center text-base block border-solid rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative '>SIGN IN</Link> */}

                            <button className=' flex-1 text-white bg-[#265eac] border-0 border-[rgba(215,215,215,0.6)] h-11 leading-10 px-5 text-center text-base block border-solid rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative ' onClick={handleRegister}>
                                Confirm
                            </button>
                        </div>

                    </div>

                    <div className="mx-[10px] px-5">

                        <h3 className='font-bold text-[#1d1d1f] text-lg mb-[5px]'>Tips</h3>

                        <p className='leading-6 text-sm text-[#666] mb-[10px]'>
                            <>
                                1. The trade password is the password you use when withdrawing and adding a bank card. This password is very important, so you must keep it safely
                            </>
                        </p>

                        <p className='leading-6 text-sm text-[#666] mb-[10px]'>
                            2. Please try not to match your trade password with your login password
                        </p>

                        <p className='leading-6 text-sm text-[#666] mb-[10px]'>
                            3. If you forget your trade password, please contact the customer service personnel
                        </p>

                    </div>

                </div>
            </div>

        </>
    )
}

export default WpasswordChange