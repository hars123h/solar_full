import React, { useContext, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App';
import BASE_URL from '../api_url';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';

const UpdateData = () => {

    const navigate = useNavigate();


    const {
        setLoading,
        toaster,
        userDetails

    } = useContext(ContextApi);

    const [name, setName] = useState(userDetails?.name)
    const [email, setEmail] = useState(userDetails?.email)
    const [nameError, setnameError] = useState(
        {
            show: '',
            message: ''
        }
    )
    const [emailError, setEmailError] = useState(
        {
            show: '',
            message: ''
        }
    )


    const handleRegister = async () => {

        if (name.length === 0) {
            toaster('name cannot be empty')
        }

        else {

            await axios.post(`${BASE_URL}/userdetailsUpdate`,
                { name, email, _id: localStorage.getItem('uid') }).then(() => {
                    toaster('Data successfully updated!');
                    setTimeout(() => {
                        navigate('/account')
                    }, 3000);
                })
                .catch(error => toaster('Some Error Occured'));
        }

    }

    const handelchange = (e) => {

        if (e.target.id === 'name') {
            setName(e.target.value)
            if (e.target.value.length === 0) {
                setnameError({ show: 'show-error', message: 'Name can not be empty' })
                return
            }
            else {
                setnameError({ show: '', message: '' })
                return
            }
        }

        if (e.target.id === 'email') {
            setEmail(e.target.value)
            if (e.target.value.length === 0) {
                setEmailError({ show: 'show-error', message: 'Email can not be empty' })
                return
            }
            else {
                setEmailError({ show: '', message: '' })
                return
            }
        }

    }


    return (
        <>
            {/* <div className="bg-white  after:contents-[' '] after:fixed h-screen ">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block mb-[10px]">
                        <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed bg-[rgb(1,77,173)] z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/account'} className="w-[60px] h-[50px] left-0 text-center text-white text-[22px] absolute z-[2] flex justify-center items-center ">
                                <LiaAngleLeftSolid size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 text-white ' >My Information</h2>

                        </div>
                    </header>

                    <div className="m-[10px] p-[10px] relative">

                        <div className="mb-5 relative">

                            <div className="px-[10px] relative border-0 border-solid border-[rgba(215, 215, 215, 0.6)] bg-[rgb(246,246,246)] rounded-[7px] flex items-center flex-wrap">
                                {name ?
                                    <input
                                        onChange={e => setName(e.target.value)}
                                        type="text"
                                        name="name"
                                        id="name"
                                        className='flex-1 fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent '
                                        placeholder=''
                                        value={name}

                                    />
                                    :
                                    <input
                                        onChange={e => setName(e.target.value)}
                                        type="text"
                                        name="name"
                                        id="name"
                                        className='flex-1 fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent '
                                        placeholder=''

                                    />
                                }
                                <div className="cut bg-transparent rounded-[10px] h-5 left-[10px] absolute -top-5 translate-y-0 w-[100px] transition-transform delay-0 eas duration-200"></div>
                                <label className='placeholder text-[#818393] text-sm leading-none left-[10px] pointer-events-none absolute origin-[0_50%] transition-all duration-200  '>User Name</label>

                            </div>
                        </div>

                        <div className="mb-5 relative">

                            <div className="px-[10px] relative border-0 border-solid border-[rgba(215, 215, 215, 0.6)] bg-[rgb(246,246,246)] rounded-[7px] flex items-center flex-wrap">
                                {email ?
                                    <input
                                        onChange={e => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className='flex-1 fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent '
                                        placeholder=''
                                        value={email}

                                    /> :
                                    <input
                                        onChange={e => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className='flex-1 fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent '
                                        placeholder=''

                                    />
                                }
                                <div className="cut bg-transparent rounded-[10px] h-5 left-[10px] absolute -top-5 translate-y-0 w-[100px] transition-transform delay-0 eas duration-200"></div>
                                <label className='placeholder text-[#818393] text-sm leading-none left-[10px] pointer-events-none absolute origin-[0_50%] transition-all duration-200  '>E-mail</label>

                            </div>
                        </div>

                        <div className="flex flex-wrap items-center my-10 w-full justify-end ">

                            <Link to={`/login`} className='text-[#1f3d70] bg-white border-[1px] border-[#1f3d70] h-11 leading-10 px-5 text-center text-base block border-solid rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative '>SIGN IN</Link>

                            <button className=' flex-1 text-white bg-[#00aa75] border-0 border-[rgba(215,215,215,0.6)] h-11 leading-10 px-5 text-center text-base block border-solid rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative ' onClick={handleRegister}>
                                Confirm
                            </button>
                        </div>

                    </div>

                </div>
            </div> */}

            <div className="">
                <header className="h-[50px] leading-[50px] block pb-[10px] bg-[#f8f9fb] border-0 border-b-[1px] border-[#e7e8ea]">
                    <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                        <Link to={'/settings'} className="w-[60px] h-[50px] left-0 text-center text-[22px] absolute z-[2] flex justify-center items-center ">
                            <FiArrowLeft size={22} />
                        </Link>

                        <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 ' >Edit Profile</h2>

                    </div>
                </header>

                <div className="">
                    <div className="login-page-content-box w-full">
                        <div className="item">
                            <div data-v-466dae23="" className="phone-number-container">
                                <label data-v-466dae23="" htmlFor="phoneNumber">Name</label>
                                <div data-v-466dae23="" className="input-container flex w-full input-container">
                                    <input
                                        onChange={handelchange}
                                        data-v-466dae23=""
                                        type="text"
                                        id="name"
                                        placeholder="Input Name"
                                        className="input-field w-full input-autofill"
                                    />
                                </div>
                            </div>
                            <div className={`error ${nameError.show}`}>
                                <span>{nameError.message}</span>
                            </div>
                        </div>
                        <div className="item">
                            <div data-v-0f114eeb="" className="input-container light">
                                <label data-v-0f114eeb="" htmlFor="password">Email</label>
                                <div data-v-0f114eeb="" className="flex items-center input-content input-container">
                                    <input
                                        onChange={handelchange}
                                        data-v-0f114eeb=""
                                        autoComplete="off"
                                        id="email"
                                        type='email'
                                        placeholder="Enter Email"
                                        className="input-field w-full input-autofill hasSuff"
                                    />
                                </div>
                            </div>
                            <div className={`error ${emailError.show}`} >
                                <span>{emailError.message}</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="withdraw-page-bottom fixed w-full">
                    <div className="flex">
                        <Link to={'/settings'} className="close flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.705 16.885Z" fill="black"></path>
                            </svg>
                        </Link>
                        <button onClick={handleRegister} data-v-0df625cb="" type="primary" className="button flex items-center justify-center button-primary default w-full">Submit</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default UpdateData