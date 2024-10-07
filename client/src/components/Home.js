import React, { useContext, useEffect, useState } from 'react'
import Popup from './Popup'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import inviteBg from '../images/invitebg.png'
import { RiVipLine } from 'react-icons/ri'
import splitNotchL from '../images/notch_L.svg'
import splitNotchR from '../images/notch_R.svg'
import { BiCoin } from 'react-icons/bi'
import vip from '../images/vip.svg'
import message from '../images/message.svg'
// import telegram from '../images/telegram.svg'
import whatsapp from '../images/whatsapp.svg'
import task from '../images/05.svg'
import invite from '../images/06.svg'
import img201 from '../images/201.png'
import img301 from '../images/301.png'
import Card from './Card'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'
import Tradmark from './Tradmark'
import { ContextApi } from '../App'
import { RxCross1 } from 'react-icons/rx'
import logo from '../images/tsmc/logo.png'
import companyImg from '../images/sungrow/logo_25_m.png'
import telegram from '../images/sungrow/telegram.svg'
import axios from 'axios'
import BASE_URL from '../api_url'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaDownload } from "react-icons/fa6";
import Cipla from '../images/sungrow/app-release.apk'




const Home = () => {

    const navigate = useNavigate();


    const { userDetails, setUserDetails, getUserDetails, user, toaster, vipimg } = useContext(ContextApi);


    const [wpwd, setWpwd] = useState(localStorage.getItem('wpwd') === 'undefined' ? '' : 'hidden')
    const [telegramopen, setTelegram] = useState('')
    const [pwd, setPwd] = useState('')


    // console.log(userDetails);

    // useEffect(() => {
    //     // console.log(wpwd);
    //     if (wpwd === 'undefined') {
    //         toaster('Set Trade Password')
    //         setTimeout(() => {
    //             navigate('/widthdrawlpassword')
    //         }, 3000);
    //     }
    // }, [])

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

    const handleRegister = async () => {

        if (pwd.length === 0) {
            toaster('New Password can not be empty')
        }

        else {

            await axios.post(`${BASE_URL}/reset_withdrawal_password`,
                { new_wpwd: pwd, user_id: localStorage.getItem('uid') }).then(() => {
                    // setOtp('');
                    // setOTPfield('');
                    setPwd('');
                    toaster('Password successfully updated!');
                    setWpwd("hidden")


                })
                .catch(error => toaster('Some Error Occured'));
        }

    }


    return (
        <>

            <div className="home-page flex flex-col">
                <div className='h-[78px] opacity-100'>
                    <div className=" bg-white">
                        <div className="text-center home-page-header">
                            <img src={logo} alt="Your Image" className='w-36 h-auto inline' />
                        </div>
                    </div>
                </div>
                <div className="home-page-placeholder"></div>
                <div className="home-page-content flex flex-col flex-1">
                    <div className="home-page-content-company relative">
                        <div className="tip">
                            Aligned with Saudi Vision 2030, Cipla will reshape the Kingdom's economy and transform global electronics and advanced industrial sectors by decarbonizing manufacturing with clean energy.
                        </div>
                        <Link to={'/company'} className="btn">
                            Company Profile
                        </Link>
                        {/* <img src={companyImg} alt="Your Image" className="absolute w-32 m-8" /> */}
                    </div>
                    <div className="home-page-content-balances">
                        <div>
                            <div className="balance-label">
                                Current Balance
                            </div>
                            <div className="balance-value bold">
                                ₹{Number(Number(userDetails?.balance) + Number(userDetails?.recharge_amount)).toFixed(2)}
                            </div>
                        </div>
                        <div>
                            <div className="balance-label " style={{ marginTop: '12px' }} >
                                Withdraw Balance
                            </div>
                            <div className="balance-value bold">
                                ₹{userDetails?.balance?.toFixed(2)}
                            </div>
                        </div>
                    </div>
                    <div className="routers">
                        <Link to={'/deposit'} className="routers-item text-center">
                            <div>
                                <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M33.137 14.6722L25.6124 7.14756C24.7333 6.26852 23.3093 6.26852 22.4302 7.14756L14.8705 14.7073C14.8142 14.7636 14.8142 14.8515 14.8705 14.9078L16.2629 16.3002C16.3191 16.3564 16.407 16.3564 16.4633 16.3002L22.6377 10.1187C22.7256 10.0308 22.8768 10.0941 22.8768 10.2172L22.8768 42.3586C22.8768 42.4359 22.9401 42.4992 23.0174 42.4992L24.9865 42.4992C25.0639 42.4992 25.1272 42.4359 25.1272 42.3586L25.1272 10.182C25.1272 10.0554 25.2783 9.99567 25.3663 10.0836L31.5442 16.2615C31.6004 16.3178 31.6883 16.3178 31.7446 16.2615L33.137 14.8691C33.1933 14.8163 33.1933 14.7249 33.137 14.6722Z" fill="#265eac"></path>
                                </svg>
                            </div>
                            <div className="title">Deposit</div>
                        </Link>
                        <Link to={'/widthdraw'} className="routers-item text-center">
                            <div>
                                <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M14.8703 34.3161L22.3949 41.8407C23.274 42.7198 24.698 42.7198 25.5771 41.8407L33.1369 34.2809C33.1931 34.2247 33.1931 34.1368 33.1369 34.0805L31.7445 32.6881C31.6882 32.6318 31.6003 32.6318 31.544 32.6881L25.3696 38.8695C25.2817 38.9575 25.1305 38.8942 25.1305 38.7711L25.1305 6.62971C25.1305 6.55236 25.0672 6.48906 24.9899 6.48906L23.0208 6.48906C22.9435 6.48906 22.8802 6.55236 22.8802 6.62971L22.8802 38.8063C22.8802 38.9328 22.729 38.9926 22.6411 38.9047L16.4631 32.7268C16.4069 32.6705 16.319 32.6705 16.2627 32.7268L14.8703 34.1192C14.8141 34.1719 14.8141 34.2634 14.8703 34.3161Z" fill="#265eac"></path>
                                </svg>
                            </div>
                            <div className="title">Withdraw</div>
                        </Link>
                    </div>
                    <div className="transections hidden" >
                        <div className="flex items-center justify-between">
                            <span className="title">All Transections</span>
                            <span>See all</span>
                        </div>
                        <div className="transections-items">
                            <button data-v-0df625cb="" type="primary" className="w-full button flex items-center justify-center button-primary default">
                                More Invest
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 recommended">
                        <div className="title">Explore More</div>
                        <div className="recommended-items">
                            <Link to={'/commissionInfo'} className="flex items-center flex-col">
                                <div className="router flex items-center justify-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                            <path
                                                d="M22.3934 10.8086C21.9339 10.8086 21.4932 10.9911 21.1683 11.3161C20.8434 11.641 20.6608 12.0817 20.6608 12.5412V23.8031C20.6608 24.0329 20.7521 24.2532 20.9145 24.4157C21.077 24.5781 21.2974 24.6694 21.5271 24.6694H26.7249C26.9547 24.6694 27.175 24.5781 27.3375 24.4157C27.4999 24.2532 27.5912 24.0329 27.5912 23.8031V12.5412C27.5912 12.0817 27.4087 11.641 27.0838 11.3161C26.7588 10.9911 26.3181 10.8086 25.8586 10.8086H22.3934ZM12.8641 16.0064C12.8641 15.5469 13.0466 15.1062 13.3716 14.7813C13.6965 14.4563 14.1372 14.2738 14.5967 14.2738H18.0619C18.5214 14.2738 18.9621 14.4563 19.287 14.7813C19.612 15.1062 19.7945 15.5469 19.7945 16.0064V23.8031C19.7945 24.0329 19.7032 24.2532 19.5408 24.4157C19.3783 24.5781 19.158 24.6694 18.9282 24.6694H13.7304C13.5006 24.6694 13.2803 24.5781 13.1178 24.4157C12.9554 24.2532 12.8641 24.0329 12.8641 23.8031V16.0064ZM5.06738 19.4716C5.06738 19.0121 5.24992 18.5714 5.57485 18.2465C5.89978 17.9215 6.34047 17.739 6.79999 17.739H10.2652C10.7247 17.739 11.1654 17.9215 11.4903 18.2465C11.8153 18.5714 11.9978 19.0121 11.9978 19.4716V23.8031C11.9978 24.0329 11.9065 24.2532 11.7441 24.4157C11.5816 24.5781 11.3613 24.6694 11.1315 24.6694H5.93368C5.70393 24.6694 5.48358 24.5781 5.32112 24.4157C5.15865 24.2532 5.06738 24.0329 5.06738 23.8031V19.4716Z"
                                                fill="#265eac">
                                            </path>
                                            <path
                                                d="M5.93329 25.5352C5.47377 25.5352 5.03308 25.7177 4.70815 26.0426C4.38323 26.3675 4.20068 26.8082 4.20068 27.2678C4.20068 27.7273 4.38323 28.168 4.70815 28.4929C5.03308 28.8178 5.47377 29.0004 5.93329 29.0004H26.7245C27.184 29.0004 27.6247 28.8178 27.9496 28.4929C28.2746 28.168 28.4571 27.7273 28.4571 27.2678C28.4571 26.8082 28.2746 26.3675 27.9496 26.0426C27.6247 25.7177 27.184 25.5352 26.7245 25.5352H5.93329Z"
                                                fill="#265eac">
                                            </path>
                                            <path
                                                d="M28.1519 5.73932C28.0187 5.9259 27.8498 6.08419 27.6549 6.20501L18.1256 12.2691C17.7574 12.5036 17.3142 12.5904 16.8847 12.5121C16.4552 12.4339 16.0711 12.1965 15.8091 11.8472L14.1476 9.6321L6.82472 14.026C6.43069 14.2624 5.95888 14.3326 5.51308 14.2212C5.29234 14.166 5.08464 14.0679 4.90182 13.9324C4.719 13.7969 4.56466 13.6268 4.44759 13.4317C4.33053 13.2366 4.25304 13.0203 4.21955 12.7953C4.18606 12.5702 4.19723 12.3408 4.25242 12.1201C4.36386 11.6743 4.64784 11.291 5.04188 11.0546L13.7049 5.85676C14.0725 5.63622 14.5087 5.55977 14.9294 5.64217C15.35 5.72457 15.7252 5.95998 15.9824 6.30291L17.6197 8.48425L25.7941 3.28211C25.986 3.15673 26.2009 3.07068 26.4264 3.02895C26.6518 2.98722 26.8832 2.99064 27.1073 3.039C27.3314 3.08737 27.5437 3.17973 27.7318 3.31073C27.9199 3.44172 28.0802 3.60875 28.2033 3.80213C28.3264 3.99551 28.4099 4.2114 28.449 4.4373C28.4881 4.66319 28.4819 4.89459 28.4309 5.11809C28.3799 5.34159 28.2851 5.55274 28.1519 5.73932Z"
                                                fill="#1F4E6A">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="recommended-items-title">Commission</div>
                            </Link>
                            <Link to={'/team'} className="flex items-center flex-col">
                                <div className="router flex items-center justify-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                            <path d="M32.0111 23.4663C32.0111 25.0663 31.3711 25.3863 28.9178 25.3863C28.2778 19.1996 25.1844 16.2129 21.9844 14.7196C24.1178 11.8396 24.2244 7.6796 22.1978 4.58625C24.6511 3.8396 27.2111 5.54625 27.8511 8.21294C28.3844 10.5596 27.3178 13.1196 25.1844 14.0796C29.2378 15.1463 32.0111 18.9863 32.0111 23.4663ZM10.0378 14.7196C6.83777 16.2129 3.74443 19.3063 3.10443 25.3863C0.651116 25.3863 0.0111156 25.0663 0.0111156 23.4663C-0.202228 18.9863 2.67777 15.0396 6.73112 14.0796C4.38443 12.9063 3.31777 10.0263 4.38443 7.46625C5.34443 5.22625 7.58443 4.05294 9.82443 4.69294C7.79777 7.6796 7.90443 11.7329 10.0378 14.7196Z" fill="#1F4E6A"></path>
                                            <path d="M27.4248 26.8802C27.4248 18.8802 22.8382 16.1068 18.8915 15.2535C19.8515 14.6135 20.7049 13.7602 21.2382 12.4802C22.8382 9.38682 21.6649 5.44019 18.7849 3.7335C15.9049 2.02682 12.1716 3.20016 10.6782 6.40016C9.18484 9.60016 10.2515 13.5468 13.3448 15.2535C9.39818 16.1068 4.81152 18.9868 4.81152 26.8802C4.81152 29.0135 7.37152 29.0135 16.1182 29.0135C24.7582 29.0135 27.4248 29.0135 27.4248 26.8802Z" fill="#265eac"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="recommended-items-title">My Team</div>
                            </Link>
                            <Link to={'/tasks'} className="flex items-center flex-col">
                                <div className="router flex items-center justify-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M25.4861 7.47656H27.1643C28.4486 7.47656 29.5018 8.58594 29.5018 9.94844V24.9484C29.5018 26.3078 28.4518 27.4203 27.1643 27.4203H6.84238C5.55801 27.4203 4.50488 26.3078 4.50488 24.9484V9.94844C4.50488 8.58906 5.55488 7.47656 6.84238 7.47656H8.52051V8.80469C8.52051 9.37344 8.95801 9.83594 9.49551 9.83594H12.3018C12.8393 9.83594 13.2768 9.37031 13.2768 8.80469V7.47656H20.7299V8.80469C20.7299 9.37344 21.1674 9.83594 21.7049 9.83594H24.5111C25.0486 9.83594 25.4861 9.37031 25.4861 8.80469V7.47656ZM17.1779 21.8892L22.6713 16.3958C23.1198 16.0034 23.1198 15.2747 22.6153 14.7702C22.2229 14.3217 21.4942 14.3217 21.0457 14.7702L16.281 19.5349L13.8707 17.1245C13.4783 16.7321 12.8056 16.7321 12.4132 17.1245L12.3011 17.2366C11.9087 17.629 11.9087 18.3016 12.3011 18.694L15.6084 22.0013C16.0008 22.3937 16.6734 22.3937 17.0658 22.0013L17.1779 21.8892Z" fill="#265eac"></path>
                                            <path d="M10.0826 9.20859H11.6639C12.1482 9.20859 12.5482 8.81172 12.5482 8.32422V4.83359C12.5482 4.34922 12.1514 3.94922 11.6639 3.94922H10.0826C9.59824 3.94922 9.19824 4.34609 9.19824 4.83359V8.32734C9.19824 8.81172 9.59512 9.20859 10.0826 9.20859ZM22.3107 9.20859H23.892C24.3764 9.20859 24.7764 8.81172 24.7764 8.32422V4.83359C24.7764 4.34922 24.3795 3.94922 23.892 3.94922H22.3107C21.8264 3.94922 21.4264 4.34609 21.4264 4.83359V8.32734C21.4264 8.81172 21.8232 9.20859 22.3107 9.20859Z" fill="#1F4E6A"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="recommended-items-title">Task System</div>
                            </Link>
                            <a
                                href={Cipla}
                                download="Cipla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center flex-col"
                            >
                                <div className="router flex items-center justify-center">
                                    <div>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                            <path d="M26.9096 9.18182V1.68182C26.9096 1.50099 26.8377 1.32757 26.7099 1.1997C26.582 1.07183 26.4086 1 26.2278 1C26.0469 1 25.8735 1.07183 25.7456 1.1997C25.6178 1.32757 25.5459 1.50099 25.5459 1.68182V2.62848C24.7544 3.02415 22.7147 4.00426 19.9702 4.99993C16.7036 6.18587 11.7581 7.63452 6.74012 7.80199C6.35396 7.81456 5.98353 7.95795 5.68955 8.20865C5.39557 8.45935 5.19548 8.80249 5.12208 9.18182H2.70503C2.25312 9.18233 1.81985 9.36207 1.5003 9.68163C1.18074 10.0012 1.001 10.4344 1.00049 10.8864V15.6591C1.001 16.111 1.18074 16.5443 1.5003 16.8638C1.81985 17.1834 2.25312 17.3631 2.70503 17.3636H5.12208C5.19424 17.7362 5.38863 18.0739 5.67446 18.3235C5.96029 18.573 6.32122 18.7201 6.70006 18.7413L11.6984 29.9877C11.8325 30.2889 12.0509 30.5448 12.3273 30.7244C12.6038 30.9041 12.9263 30.9998 13.256 31H16.6823C16.7959 31 16.9077 30.9716 17.0076 30.9174C17.1074 30.8632 17.1921 30.7849 17.254 30.6897C17.3159 30.5944 17.353 30.4852 17.362 30.3719C17.371 30.2587 17.3515 30.145 17.3053 30.0412L12.6008 19.456C15.4231 20.0219 17.9882 20.8268 19.9476 21.5372C22.6985 22.535 24.751 23.5188 25.5459 23.917V24.8636C25.5459 25.0445 25.6178 25.2179 25.7456 25.3458C25.8735 25.4736 26.0469 25.5455 26.2278 25.5455C26.4086 25.5455 26.582 25.4736 26.7099 25.3458C26.8377 25.2179 26.9096 25.0445 26.9096 24.8636V17.3636C29.1653 17.3636 31.0005 15.5285 31.0005 13.2727C31.0005 11.017 29.1653 9.18182 26.9096 9.18182Z" fill="#265eac"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M26.8833 17.9725C27.0475 17.9907 27.2143 18 27.3833 18C29.8686 18 31.8833 15.9853 31.8833 13.5C31.8833 11.0147 29.8686 9 27.3833 9C27.2143 9 27.0475 9.00932 26.8833 9.02746V17.9725Z" fill="#1F4E6A"></path>
                                        </svg> */}
                                        <FaDownload className='text-[#265eac]' size={25} />
                                    </div>
                                </div>
                                <div className="recommended-items-title">Download</div>
                            </a>
                            <Link to={'/investment'} className="flex items-center flex-col">
                                <div className="router flex items-center justify-center text-[#265eac]">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M30.3375 12.6902C30.6846 12.6144 30.939 12.3196 30.939 11.9658V7.03265C30.939 5.35795 29.581 4 27.9063 4H4.03265C2.35795 4 1 5.35795 1 7.03265V11.9472C1 12.3061 1.26283 12.6043 1.61495 12.6717C3.27954 12.9952 4.53641 14.4576 4.53641 16.2148C4.53641 17.9738 3.27954 19.4362 1.61495 19.758C1.26114 19.8271 1 20.1236 1 20.4825V25.397C1 27.0717 2.35795 28.4297 4.03265 28.4297H27.9063C29.581 28.4297 30.939 27.0717 30.939 25.397V20.4639C30.939 20.1084 30.6846 19.8136 30.3375 19.7395C28.7117 19.3873 27.4936 17.9435 27.4936 16.2132C27.4936 14.4862 28.7117 13.044 30.3375 12.6902ZM9.948 13.1889H19.9086L18.0317 10.7611C17.747 10.3922 17.8144 9.86313 18.1833 9.58008C18.5523 9.29535 19.0813 9.36274 19.3644 9.73171L22.2892 13.5175C22.3853 13.6422 22.4446 13.7914 22.4603 13.948C22.476 14.1047 22.4475 14.2627 22.3781 14.404C22.3087 14.5454 22.201 14.6644 22.0674 14.7477C21.9338 14.8311 21.7795 14.8753 21.622 14.8754H9.94632C9.48131 14.8754 9.10392 14.498 9.10392 14.033C9.10392 13.568 9.48131 13.1889 9.948 13.1889ZM21.622 19.4295H11.6631L13.5383 21.8573C13.8231 22.2262 13.7557 22.7553 13.3867 23.0383C13.2394 23.1518 13.0588 23.2134 12.8728 23.2135C12.6201 23.2135 12.3708 23.1006 12.2056 22.8867L9.28082 19.1026C9.1847 18.9779 9.12543 18.8287 9.10972 18.672C9.09401 18.5153 9.12248 18.3574 9.19192 18.2161C9.26136 18.0747 9.36899 17.9556 9.50262 17.8723C9.63625 17.789 9.79053 17.7448 9.948 17.7446H21.6237C22.0887 17.7446 22.4661 18.122 22.4661 18.5871C22.4661 19.0521 22.087 19.4295 21.622 19.4295Z" fill="#265eac"></path>
                                            <path d="M21.622 19.4289H11.6631L13.5383 21.8568C13.823 22.2257 13.7556 22.7548 13.3867 23.0378C13.2394 23.1513 13.0587 23.2129 12.8728 23.213C12.6201 23.213 12.3707 23.1001 12.2056 22.8862L9.28078 19.1021C9.18466 18.9774 9.12539 18.8282 9.10968 18.6715C9.09397 18.5148 9.12244 18.3569 9.19188 18.2155C9.26132 18.0742 9.36895 17.9551 9.50258 17.8718C9.6362 17.7885 9.79049 17.7443 9.94796 17.7441H21.6237C22.0887 17.7441 22.4661 18.1215 22.4661 18.5865C22.4661 19.0515 22.087 19.4289 21.622 19.4289Z" fill="#1F4E6A"></path>
                                        </svg>
                                        {/* <FaTelegramPlane size={32} /> */}
                                    </div>
                                </div>
                                <div className="recommended-items-title">Investment</div>
                            </Link>
                            <Link to={'https://t.me/ciplaofficial'} className="flex items-center flex-col">
                                <div className="router flex items-center justify-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                            <g clipPath="url(#clip0_2835_7115)">
                                                <path d="M27.7749 17.924C27.7749 19.3501 27.494 20.7622 26.9483 22.0797C26.4026 23.3973 25.6027 24.5944 24.5943 25.6028C23.5859 26.6112 22.3887 27.4111 21.0712 27.9569C19.7537 28.5026 18.3415 28.7835 16.9154 28.7835C15.4894 28.7835 14.0772 28.5026 12.7597 27.9569C11.4422 27.4111 10.245 26.6112 9.23663 25.6028C8.22824 24.5944 7.42834 23.3973 6.8826 22.0797C6.33686 20.7622 6.05598 19.3501 6.05599 17.924C6.05598 16.4979 6.33686 15.0858 6.8826 13.7682C7.42834 12.4507 8.22824 11.2535 9.23663 10.2451C10.245 9.23674 11.4422 8.43683 12.7597 7.89109C14.0772 7.34534 15.4894 7.06445 16.9154 7.06445C18.3415 7.06445 19.7537 7.34534 21.0712 7.89109C22.3887 8.43683 23.5859 9.23674 24.5943 10.2451C25.6027 11.2535 26.4026 12.4507 26.9483 13.7682C27.494 15.0858 27.7749 16.4979 27.7749 17.924Z" fill="#265eac"></path>
                                                <path d="M16.919 25.3745C19.4469 25.3745 21.7534 23.9826 22.9392 21.7413C23.1848 21.2767 23.0077 20.7011 22.5432 20.4548C22.0778 20.2092 21.503 20.3872 21.2567 20.8509C20.4017 22.4674 18.7401 23.4705 16.919 23.4705C15.0899 23.4705 13.4259 22.4658 12.5781 20.8485C12.3334 20.3831 11.7594 20.202 11.2932 20.4475C10.8279 20.6915 10.6484 21.2663 10.8923 21.7316C12.0701 23.9793 14.3798 25.3745 16.919 25.3745Z" fill="white"></path>
                                                <path d="M0.559082 17.5796C0.559082 19.3934 1.25627 20.9455 2.25051 21.6081C2.55563 21.8085 2.87846 21.9221 3.22705 21.9398C3.27938 21.9398 3.33171 21.9309 3.39289 21.9221C4.09893 21.7739 4.55218 21.0848 4.40405 20.3699C4.22935 19.5157 4.14241 18.6954 4.14241 17.8847C4.14241 16.4895 4.37748 15.1378 4.81383 13.8916C4.38634 13.4641 3.87191 13.2202 3.33171 13.2202C2.90422 13.2202 2.5033 13.3683 2.14586 13.6388C1.20474 14.336 0.559082 15.8358 0.559082 17.5796ZM29.4269 20.3667C29.2788 21.0816 29.732 21.7707 30.4381 21.9188C30.5081 21.9365 30.5862 21.9454 30.6651 21.9365C30.831 21.9365 30.9879 21.91 31.1449 21.8665C31.215 21.8399 31.2842 21.823 31.3454 21.7796C32.5224 21.2828 33.3943 19.5906 33.3943 17.5763C33.3943 15.7448 32.6705 14.1758 31.6505 13.5301C31.3277 13.3296 30.9791 13.2161 30.6128 13.2161C30.0372 13.2161 29.497 13.4955 29.0429 13.9745C29.4615 15.1958 29.6878 16.512 29.6878 17.8807C29.6886 18.6922 29.6016 19.5117 29.4269 20.3667Z" fill="#1F4E6A"></path>
                                                <path d="M2.25871 17.9234H4.16187C4.16187 10.8903 9.88344 5.16879 16.9164 5.16879C23.9494 5.16879 29.671 10.8903 29.671 17.9234H31.5742C31.5742 9.84136 24.9992 3.26562 16.9164 3.26562C8.83364 3.26562 2.25871 9.84136 2.25871 17.9234Z" fill="#1F4E6A"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2835_7115">
                                                    <rect width="32" height="32" fill="white" transform="translate(0.666992)"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="recommended-items-title">Contact Us</div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`van-overlay z-[2001] ${telegramopen}`} ></div>
                <div role="dialog" aria-labelledby="Welfare channel" tabIndex="0" className={`van-dialog min-w-[30%] z-[2002] ${telegramopen} text_Black`} >
                    <div className="van-dialog__header">Welfare channel</div>
                    <div className="van-dialog__content">
                        <a>
                            <div className="flex justify-center mt-[10px]" >
                                <img className='w-1/5' src={telegram} />
                            </div>
                        </a>
                        <div className="flex justify-center">
                            <span className='text-xl' >Channel Telegram</span>
                        </div>
                    </div>
                    <div className="van-hairline--top van-dialog__footer">
                        <button onClick={() => setTelegram('hidden')} type="button" className="van-button van-button--default van-button--large van-dialog__cancel">
                            <div className="van-button__content">
                                <span className="van-button__text">CANCEL</span>
                            </div>
                        </button>
                        <Link to='https://t.me/ciplaofficial' type="button" className="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left text-[rgb(196,71,58)] orange_bg" >
                            <div className="van-button__content">
                                <span className="van-button__text">JOIN</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={`van-overlay z-[2003] ${wpwd}`} ></div>
                <div role="dialog" aria-labelledby="Set Trade Password" tabIndex="0" className={`van-dialog min-w-[30%] z-[2004] ${wpwd} text_Black`} >
                    <div className="van-dialog__header ">Set Trade Password</div>
                    <div className="van-dialog__content">
                        <div className="flex justify-center">
                            <div className="van-cell van-field border-[1px] border-solid border-[lightgrey] m-[10px] rounded-2xl" >
                                <div className="van-cell__value van-cell__value--alone van-field__value">
                                    <div className="van-field__body">
                                        <input
                                            type="password"
                                            placeholder="Set Trade Password"
                                            className="van-field__control"
                                            onChange={(e) => setPwd(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="van-hairline--top van-dialog__footer">
                        <button onClick={() => setWpwd("hidden")} type="button" className="van-button van-button--default van-button--large van-dialog__cancel">
                            <div className="van-button__content">
                                <span className="van-button__text">CANCEL</span>
                            </div>
                        </button>
                        <button onClick={handleRegister} type="button" className="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left text-[rgb(196,71,58)] orange_bg" >
                            <div className="van-button__content">
                                <span className="van-button__text">CONFIRM</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <Navbar />

        </>
    )
}

export default Home