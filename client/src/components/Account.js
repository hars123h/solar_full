import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Tradmark from './Tradmark'
import { RiVipLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import information from '../images/Information.svg'
import bankcard from '../images/BankCard.svg'
import LoginPassword from '../images/LoginPassword.svg'
import PayPassword from '../images/PayPassword.svg'
import Logoutimg from '../images/LogOut.svg'
import axios from 'axios'
import BASE_URL from '../api_url'
import { ContextApi } from '../App'
import logo from '../images/tsmc/logo.png'
import { BiEditAlt, BiLogOut } from 'react-icons/bi'
import { LiaAngleRightSolid } from 'react-icons/lia'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { LuShieldCheck } from 'react-icons/lu'
import { PiClockCounterClockwiseLight } from 'react-icons/pi'

const Account = () => {

    const navigate = useNavigate();

    const { userDetails, setUserDetails, setUser, getUserDetails, toaster, user, vipimg } = useContext(ContextApi);


    const [name, setname] = useState('')
    const [mobno, setMobno] = useState(0)
    const [id, setid] = useState(0)
    const [Balance, setBalance] = useState(0)
    const [rewards, setRewards] = useState(50)

    const handelSignOut = () => {
        localStorage.clear();
        setUser()
        navigate('/login');
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




    return (
        <>
            <Navbar />

            <div className="p-5 mb-10">

                <div className="flex space-x-5 items-center">

                    <div className="bg-white rounded-full w-32 h-32 shadow-xl flex justify-center items-center p-5">
                        <img src={logo} alt="" />
                    </div>

                    <div className="">
                        <h1 className='text-4xl font-bold'>{userDetails?.name}</h1>
                        <p className='text-[#888483]'>ID: {userDetails?.mobno}</p>
                    </div>

                </div>

                <div className="mt-5">

                    <Link to={'/update'} className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <BiEditAlt size={20} />
                            </div>
                            <p className='font-bold text-lg'>Edit Profile</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </Link>

                    <Link to={'/bankCard'} className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <AiOutlineCreditCard size={20} />
                            </div>
                            <p className='font-bold text-lg'>My Card</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] flex space-x-2 items-center ">
                            <p>{userDetails?.bank_details.fullName ? 1 : 0} Card Saved</p>
                            <LiaAngleRightSolid />
                        </div>

                    </Link>

                    <Link to={'/vip'} className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <RiVipLine size={20} />
                            </div>
                            <p className='font-bold text-lg'>VIP Level</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </Link>

                    <Link to={'/changewidthdrawlpassword'} className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <LuShieldCheck size={20} />
                            </div>
                            <p className='font-bold text-lg'>Change Trade Password</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </Link>

                    <Link to={'/balancerecord'} className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <PiClockCounterClockwiseLight size={20} />
                            </div>
                            <p className='font-bold text-lg'>Balance Records</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </Link>

                    <Link to={'/deposit_records'} className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <div>
                                    <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 49" fill="none">
                                        <path d="M14.8703 34.3161L22.3949 41.8407C23.274 42.7198 24.698 42.7198 25.5771 41.8407L33.1369 34.2809C33.1931 34.2247 33.1931 34.1368 33.1369 34.0805L31.7445 32.6881C31.6882 32.6318 31.6003 32.6318 31.544 32.6881L25.3696 38.8695C25.2817 38.9575 25.1305 38.8942 25.1305 38.7711L25.1305 6.62971C25.1305 6.55236 25.0672 6.48906 24.9899 6.48906L23.0208 6.48906C22.9435 6.48906 22.8802 6.55236 22.8802 6.62971L22.8802 38.8063C22.8802 38.9328 22.729 38.9926 22.6411 38.9047L16.4631 32.7268C16.4069 32.6705 16.319 32.6705 16.2627 32.7268L14.8703 34.1192C14.8141 34.1719 14.8141 34.2634 14.8703 34.3161Z" fill="#565151"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='font-bold text-lg'>Deposit Records</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </Link>

                    <Link to={'/widthdrawlrecords'} className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <div>
                                    <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 49" fill="none">
                                        <path d="M33.137 14.6722L25.6124 7.14756C24.7333 6.26852 23.3093 6.26852 22.4302 7.14756L14.8705 14.7073C14.8142 14.7636 14.8142 14.8515 14.8705 14.9078L16.2629 16.3002C16.3191 16.3564 16.407 16.3564 16.4633 16.3002L22.6377 10.1187C22.7256 10.0308 22.8768 10.0941 22.8768 10.2172L22.8768 42.3586C22.8768 42.4359 22.9401 42.4992 23.0174 42.4992L24.9865 42.4992C25.0639 42.4992 25.1272 42.4359 25.1272 42.3586L25.1272 10.182C25.1272 10.0554 25.2783 9.99567 25.3663 10.0836L31.5442 16.2615C31.6004 16.3178 31.6883 16.3178 31.7446 16.2615L33.137 14.8691C33.1933 14.8163 33.1933 14.7249 33.137 14.6722Z" fill="#565151"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='font-bold text-lg'>Withdraw Records</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </Link>

                    <div onClick={handelSignOut} className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <BiLogOut size={20} />
                            </div>
                            <p className='font-bold text-lg'>Logout</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Account