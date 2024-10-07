import React, { useContext, useEffect, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App';
import axios from 'axios';
import BASE_URL from '../api_url';
import { FiArrowLeft } from 'react-icons/fi';

const BankCardAdd = () => {

    const navigate = useNavigate();


    const { userDetails, setUserDetails, getUserDetails, user, toaster, setLoading } = useContext(ContextApi);

    const [details, setDetails] = useState(
        {
            fullName: '',
            bankAccount: '',
            ifsc: '',
            phoneNo: ''
        }
    );
    const [pop, setpop] = useState(false);
    const [wpwd, setWpwd] = useState()
    const [nameError, setNameError] = useState(
        {
            show: '',
            message: ''
        }
    )
    const [bankAccountError, setBankAccountError] = useState(
        {
            show: '',
            message: ''
        }
    )
    const [ifcsError, setIfcsError] = useState(
        {
            show: '',
            message: ''
        }
    )
    const [phoneNo, setPhoneNo] = useState(
        {
            show: '',
            message: ''
        }
    )


    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        });
        // console.log(details);
    }

    const handleSubmit = async () => {
        // console.log(userDetails.wpwd,wpwd);
        if (details.bankAccount.length === 0) {
            toaster('Account number can not be empty')
            return
        }
        if (details.fullName.length === 0) {
            toaster('Name can not be empty')
            return
        }
        if (details.ifsc.length === 0) {
            toaster('IFSC code cannot be empty')
            return
        }
        if (details.phoneNo.length === 0) {
            toaster('Mobile no. cannot be empty')
            return
        }
        setLoading(true)
        await axios.post(`${BASE_URL}/bank_details`, { user_id: localStorage.getItem('uid'), bank_details: details })
            .then(() => {
                setLoading(false)
                toaster('Bank details added successfully!');
                navigate('/settings')
            })
            .catch(() => { setLoading(false); toaster('Some error Occured') }
            );

    }

    useEffect(() => {
        if (user) {
            getUserDetails()
        }
        else {
            toaster('Please login')
            setTimeout(() => {
                navigate('/')
            }, 3000);
        }
    }, [])

    const handelchange = (e) => {

        setDetails({
            ...details,
            [e.target.id]: e.target.value
        });

        if (e.target.id === 'name') {

            if (e.target.value.length === 0) {
                setNameError({ show: 'show-error', message: 'Name can not be empty' })
                return
            }
            else {
                setNameError({ show: '', message: '' })
                return
            }
        }

        if (e.target.id === 'ifsc') {
            if (e.target.value.length === 0) {
                setIfcsError({ show: 'show-error', message: 'IFSC code can not be empty' })
                return
            }
            else {
                setIfcsError({ show: '', message: '' })
                return
            }
        }

        if (e.target.id === 'account') {
            if (e.target.value.length === 0) {
                setBankAccountError({ show: 'show-error', message: 'Account number code can not be empty' })
                return
            }
            else {
                setBankAccountError({ show: '', message: '' })
                return
            }
        }

        if (e.target.id === 'phoneNo') {
            if (e.target.value.length !== 10) {
                setPhoneNo({ show: 'show-error', message: 'Mobile number must have 10 digit' })
                return
            }
            else {
                setPhoneNo({ show: '', message: '' })
                return
            }
        }

    }

    return (
        <>

            <div className=" after:contents-[' '] after:fixed ">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block pb-[10px] bg-[#f8f9fb] border-0 border-b-[1px] border-[#e7e8ea]">
                        <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/settings'} className="w-[60px] h-[50px] left-0 text-center text-[22px] absolute z-[2] flex justify-center items-center ">
                                <FiArrowLeft size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 ' >Add Bank Card</h2>

                        </div>
                    </header>

                    <div className="mx-auto relative z-[1]">

                        {/* <div className="m-[10px] p-[10px] relative z-[2]">

                            <div className="mb-5 relative">

                                <div className="px-[10px] relative border-0 border-solid border-[rgba(215, 215, 215, 0.6)] bg-[rgb(246,246,246)] rounded-[7px] flex items-center flex-wrap">
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="ifsc"
                                        id="ifsc"
                                        className='flex-1 fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent '
                                        placeholder=''

                                    />
                                    <div className="cut bg-transparent rounded-[10px] h-5 left-[10px] absolute -top-5 translate-y-0 w-[100px] transition-transform delay-0 eas duration-200"></div>
                                    <label className='placeholder text-[#818393] text-sm leading-none left-[10px] pointer-events-none absolute origin-[0_50%] transition-all duration-200  '>Bank IFSC</label>

                                </div>
                            </div>

                            <div className="mb-5 relative">

                                <div className="px-[10px] relative border-0 border-solid border-[rgba(215, 215, 215, 0.6)] bg-[rgb(246,246,246)] rounded-[7px] flex items-center flex-wrap">
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        className='flex-1 fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent '
                                        placeholder=''

                                    />
                                    <div className="cut bg-transparent rounded-[10px] h-5 left-[10px] absolute -top-5 translate-y-0 w-[100px] transition-transform delay-0 eas duration-200"></div>
                                    <label className='placeholder text-[#818393] text-sm leading-none left-[10px] pointer-events-none absolute origin-[0_50%] transition-all duration-200  '>Card Holder</label>

                                </div>
                            </div>

                            <div className="mb-5 relative">

                                <div className="px-[10px] relative border-0 border-solid border-[rgba(215, 215, 215, 0.6)] bg-[rgb(246,246,246)] rounded-[7px] flex items-center flex-wrap">
                                    <input
                                        onChange={handleChange}
                                        type="number"
                                        name="bankAccount"
                                        id="bankAccount"
                                        className='flex-1 fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent '
                                        placeholder=''

                                    />
                                    <div className="cut bg-transparent rounded-[10px] h-5 left-[10px] absolute -top-5 translate-y-0 w-[100px] transition-transform delay-0 eas duration-200"></div>
                                    <label className='placeholder text-[#818393] text-sm leading-none left-[10px] pointer-events-none absolute origin-[0_50%] transition-all duration-200  '>Bank Account No.</label>

                                </div>
                            </div>

                        </div> */}

                        <div className="login-page-content-box w-full">
                            <div className="item">
                                <div data-v-0f114eeb="" className="input-container light">
                                    <label data-v-0f114eeb="" htmlFor="password">Mobile Number</label>
                                    <div data-v-0f114eeb="" className="flex items-center input-content input-container">
                                        <input
                                            onChange={handelchange}
                                            data-v-0f114eeb=""
                                            autoComplete="off"
                                            id="phoneNo"
                                            type='number'
                                            placeholder="Enter mobile no."
                                            className="input-field w-full input-autofill hasSuff"
                                        />
                                    </div>
                                </div>
                                <div className={`error ${phoneNo.show}`}>
                                    <span>{phoneNo.message}</span>
                                </div>
                            </div>
                            <div className="item">
                                <div data-v-0f114eeb="" className="input-container light">
                                    <label data-v-0f114eeb="" htmlFor="password">Full Name</label>
                                    <div data-v-0f114eeb="" className="flex items-center input-content input-container">
                                        <input
                                            onChange={handelchange}
                                            data-v-0f114eeb=""
                                            autoComplete="off"
                                            id="fullName"
                                            type='text'
                                            placeholder="Enter Name"
                                            className="input-field w-full input-autofill hasSuff"
                                        />
                                    </div>
                                </div>
                                <div className={`error ${nameError.show}`}>
                                    <span>{nameError.message}</span>
                                </div>
                            </div>
                            <div className="item">
                                <div data-v-466dae23="" className="phone-number-container">
                                    <label data-v-466dae23="" htmlFor="phoneNumber">IFSC</label>
                                    <div data-v-466dae23="" className="input-container flex w-full input-container">
                                        <input
                                            onChange={handelchange}
                                            data-v-466dae23=""
                                            type="text"
                                            id="ifsc"
                                            placeholder="Input IFSC"
                                            className="input-field w-full input-autofill"
                                        />
                                    </div>
                                </div>
                                <div className={`error ${ifcsError.show}`}>
                                    <span>{ifcsError.message}</span>
                                </div>
                            </div>
                            <div className="item">
                                <div data-v-466dae23="" className="phone-number-container">
                                    <label data-v-466dae23="" htmlFor="phoneNumber">Account Number</label>
                                    <div data-v-466dae23="" className="input-container flex w-full input-container">
                                        <input
                                            onChange={handelchange}
                                            data-v-466dae23=""
                                            type="text"
                                            id="bankAccount"
                                            placeholder="Input Account Number"
                                            className="input-field w-full input-autofill"
                                        />
                                    </div>
                                </div>
                                <div className={`error ${bankAccountError.show}`}>
                                    <span>{bankAccountError.message}</span>
                                </div>
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
                        <button onClick={handleSubmit} data-v-0df625cb="" type="primary" className="button flex items-center justify-center button-primary default w-full">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankCardAdd