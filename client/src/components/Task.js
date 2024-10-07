import React, { useContext, useEffect, useState } from 'react'
import taskBG from '../images/04.png'
import { Link } from 'react-router-dom'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { TbTicket } from 'react-icons/tb'
import { BiSolidGift } from 'react-icons/bi'
import axios from 'axios'
import BASE_URL from '../api_url'
import { ContextApi } from '../App'

const Task = () => {

    const date = new Date();

    const { userDetails, setUserDetails, getUserDetails, user, toaster, vipimg } = useContext(ContextApi);

    const [level_1, setLevel_1] = useState(0)
    const [signinrewardactive, setSigninrewardactive] = useState(new Date(userDetails?.last_signin_reward) < date)

    const handelSignin = async () => {
        await axios.post(`${BASE_URL}/signinReward`, { _id: localStorage.getItem('uid') }).then(responce => {
            // console.log(responce);
            toaster(responce.data.message)
            setSigninrewardactive(new Date(responce.data.last_signin_reward) < date)
        }).catch(error => {
            toaster("Something went wrong")
        })
    }

    useEffect(() => {
        const level1 = async () => {
            await axios.post(`${BASE_URL}/lvl1`, { user_id: localStorage.getItem('uid') }).then(responce => {
                // console.log(responce);
                // toaster(responce.data.message)
                setLevel_1(responce.data.level1.filter(element => element.vipLevel > 0).length)

            }).catch(error => {
                console.log(error);
                toaster("Something went wrong")
            })
        }
        level1()
    }, [])

    // const directMemberVip = level_1.filter(element => element.vipLevel > 0)

    // console.log(directMemberVip.length);
    // console.log(level_1);

    // useEffect(() => {

    const activation = async () => {
        await axios.post(`${BASE_URL}/task_reward`, { _id: localStorage.getItem('uid'), count: level_1 }).then(responce => {
            // console.log(responce);
            toaster(responce.data.message)

        }).catch(error => {
            console.log(error);
            toaster("Something went wrong")
        })

    }

    //     activation()

    // }, [level_1, setLevel_1])

    // console.log(userDetails);



    // console.log(new Date(userDetails?.last_signin_reward) < date);


    return (
        <>

            {/* <div className="mx-auto mb-28 bgimg overflow-hidden">
                <div className="w-full mx-auto max-w-[800px]" >

                    <div>

                        <header className="h-[50px] leading-[50px] block">
                            <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed bg-[rgb(1,77,173)] z-[9999] flex flex-wrap items-center  ">

                                <Link to={'/home'} className="w-[60px] h-[50px] left-0 text-center text-white text-[22px] absolute z-[2] flex justify-center items-center ">
                                    <LiaAngleLeftSolid size={22} />
                                </Link>

                                <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 text-white ' >Task Hall</h2>

                            </div>
                        </header>

                        <div className='max-w-full min-h-[90px] mx-auto bg-[#ff6766] invite ' >

                            <div className="relative z-[1]">
                                <img src={taskBG} alt="" className='w-full' />
                            </div>

                            <div className="left-0 right-0 px-5 py-[10px] absolute z-[1]"></div>

                        </div>
                    </div>

                    <div className="relative -top-[50px] mx-auto z-[1] ">
                        <div className="m-[10px]">

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <TbTicket size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Daily Attendance</p>
                                    <span className="text-[#818393] text-sm font-light">Sign in every day and get 7 rupees</span>
                                </div>

                                {signinrewardactive ?
                                    <div onClick={handelSignin} className="rounded-[500px] px-[10px] py-[5px] text-white bg-[rgba(75,169,88,0.9)] text-xs ">
                                        Sign
                                    </div>
                                    :
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                        Sign
                                    </div>
                                }

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invitation Activation</p>
                                    <span className="text-[#818393] text-sm font-light">Every time you invite a friend to register and activate, you will get a reward of 100 rupees</span>
                                </div>

                                {userDetails?.vipMemcount < level_1 ?
                                    <div onClick={activation} className="rounded-[500px] px-[10px] py-[5px] text-white bg-[rgba(75,169,88,0.9)] text-xs ">
                                        Receive
                                    </div>
                                    :
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                        Receive
                                    </div>
                                }


                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className="bg-[#4c8dcb] rounded-[500px] h-[5px] w-0 ">
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    {userDetails?.vipMemcount - level_1}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invite to activate 5</p>
                                    <span className="text-[#818393] text-sm font-light">
                                        Earn money by sharing your invitation links to recommend friends to sign up for Kraft
                                        App.
                                        <br />
                                        Success +5, extra bonus 100
                                    </span>
                                </div>



                                {userDetails?.vipMemcount === 5 ?
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[rgba(75,169,88,0.9)] text-xs ">
                                        Receive
                                    </div>
                                    :
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                        Receive
                                    </div>
                                }



                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className={`bg-[#4c8dcb] rounded-[500px] h-[5px] w-[${level_1 / 5 * 100}%]`}>
                                                <p className='-bottom-[6px]  text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    {level_1 >= 5 ? '5/5' : `${level_1} /5`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invite to activate 10</p>
                                    <span className="text-[#818393] text-sm font-light">
                                        Earn money by sharing your invitation links to recommend friends to sign up for Kraft
                                        App.
                                        <br />
                                        Success +10, extra bonus 200
                                    </span>
                                </div>

                                {userDetails?.vipMemcount === 10 ?
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[rgba(75,169,88,0.9)] text-xs ">
                                        Receive
                                    </div>
                                    :
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                        Receive
                                    </div>
                                }

                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className={`bg-[#4c8dcb] rounded-[500px] h-[5px] w-[${level_1 / 10 * 100}%]`}>
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    {level_1 >= 10 ? '10/10' : `${level_1} /10`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invite to activate 50</p>
                                    <span className="text-[#818393] text-sm font-light">
                                        Earn money by sharing your invitation links to recommend friends to sign up for Kraft
                                        App.
                                        <br />
                                        Success +50, extra bonus 1,500
                                    </span>
                                </div>

                                {userDetails?.vipMemcount === 50 ?
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[rgba(75,169,88,0.9)] text-xs ">
                                        Receive
                                    </div>
                                    :
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                        Receive
                                    </div>
                                }

                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className={`bg-[#4c8dcb] rounded-[500px] h-[5px] w-[${level_1 / 50 * 100}%]`}>
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    {level_1 >= 50 ? '50/50' : `${level_1} /50`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invite to activate 100</p>
                                    <span className="text-[#818393] text-sm font-light">
                                        Earn money by sharing your invitation links to recommend friends to sign up for Kraft
                                        App.
                                        <br />
                                        Success +100, extra bonus 5000
                                    </span>
                                </div>

                                {userDetails?.vipMemcount === 100 ?
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[rgba(75,169,88,0.9)] text-xs ">
                                        Receive
                                    </div>
                                    :
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                        Receive
                                    </div>
                                }

                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className={`bg-[#4c8dcb] rounded-[500px] h-[5px] w-[${level_1}%]`}>
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    {level_1 >= 100 ? '100/100' : `${level_1} /100`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invite to activate 500</p>
                                    <span className="text-[#818393] text-sm font-light">
                                        Earn money by sharing your invitation links to recommend friends to sign up for Kraft
                                        App.
                                        <br />
                                        Success +500, extra bonus 20,000
                                    </span>
                                </div>

                                {userDetails?.vipMemcount === 500 ?
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[rgba(75,169,88,0.9)] text-xs ">
                                        Receive
                                    </div>
                                    :
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                        Receive
                                    </div>
                                }

                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className={`bg-[#4c8dcb] rounded-[500px] h-[5px] w-[${level_1 / 500 * 100}%]`}>
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                {level_1 >= 5 ? '500/500' : `${level_1} /500`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invite to activate 5000</p>
                                    <span className="text-[#818393] text-sm font-light">
                                        Earn money by sharing your invitation links to recommend friends to sign up for Kraft
                                        App.
                                        <br />
                                        Success +5000, extra bonus 1,000,000,
                                    </span>
                                </div>

                                {userDetails?.vipMemcount === 5000 ?
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[rgba(75,169,88,0.9)] text-xs ">
                                        Receive
                                    </div>
                                    :
                                    <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                        Receive
                                    </div>
                                }

                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className={`bg-[#4c8dcb] rounded-[500px] h-[5px] w-[${level_1 / 5000 * 100}%]`}>
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    {level_1 >= 5 ? '5000/5000' : `${level_1} /5000`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                </div >
            </div> */}

            <section className="tasks-page flex flex-col">
                <div className="tasks-page-header">
                    <div className="van-sticky--fixed">
                        <div className="tasks-page-header-content">
                            <div className="flex items-center justify-center relative">
                                <Link to={'/home'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon absolute">
                                        <path d="M9.9688 11.5347L9.96878 11.5347C9.84576 11.6555 9.74774 11.7993 9.68031 11.9579C9.61287 12.1165 9.57735 12.2869 9.57576 12.4593C9.57417 12.6316 9.60655 12.8026 9.67105 12.9625C9.73544 13.1221 9.83059 13.2674 9.95106 13.3903L9.96945 13.4087L9.97009 13.4093L16.3048 19.6299L16.3048 19.6299L16.3069 19.632C16.4708 19.7978 16.5628 20.0214 16.5632 20.2545C16.5635 20.4876 16.4722 20.7115 16.3088 20.8778C16.1455 21.0441 15.9233 21.1394 15.6902 21.1432C15.4572 21.1471 15.232 21.059 15.0632 20.8982L15.0632 20.8982L15.0611 20.8962L8.72467 14.6743L8.72425 14.6739L8.68666 14.6367L8.68665 14.6368L8.68451 14.6346C8.4004 14.3452 8.17607 14.0028 8.02432 13.6267C7.87258 13.2507 7.7964 12.8484 7.80013 12.443C7.80386 12.0375 7.88743 11.6367 8.04607 11.2635C8.20471 10.8903 8.4353 10.552 8.72468 10.268C8.72469 10.268 8.72469 10.268 8.7247 10.268L15.0616 4.04657L15.0616 4.04655L15.0637 4.04453C15.2324 3.88369 15.4576 3.79567 15.6907 3.79949C15.9237 3.80332 16.1459 3.89867 16.3093 4.06496C16.4726 4.23125 16.564 4.45513 16.5636 4.68822C16.5633 4.92131 16.4712 5.1449 16.3074 5.31069L16.2487 5.37012H16.2465L9.9688 11.5347Z" fill="white" stroke="white" stroke-width="0.4"></path>
                                    </svg>
                                </Link>

                                <div className="text-center bold flex header-title">
                                    Task System
                                </div>
                            </div>
                            <div className="title text-center bold">Do tasks to get more rewards</div>
                        </div>
                    </div>
                </div>
                <div className="tasks-page-content flex-1">
                    <div className="tasks-page-content-item flex items-center justify-around">
                        <div className="content flex-1">
                            <div className="title">Daily Attendance</div>
                            <div className="subtitle">Sign in every day and get 7 rupees</div>

                            {signinrewardactive ?
                                <button onClick={handelSignin} data-v-0df625cb="" type="primary" className="btn w-full button flex items-center justify-center button-primary default">
                                    Sign
                                </button>
                                :
                                <button onClick={handelSignin} data-v-0df625cb="" type="primary" className="btn w-full button flex items-center justify-center button-primary default">
                                    Sign
                                </button>
                            }
                        </div>
                    </div>

                    <div className="tasks-page-content-item flex items-center justify-around">
                        <div className="content flex-1">
                            <div className="title">Invite to activate 20</div>
                            <div className="subtitle">Earn money by sharing your invitation links to recommend friends to activate. Success +20, extra bonus 200</div>
                            <div className="progress relative">
                                <div className="progress-bar">
                                    <div className="progress-value" style={{ width: `${level_1 / 20 * 100}%` }}></div>
                                </div>
                                <div className="progress-tips flex items-center justify-between">
                                    <span className="tips">You have successfully invited {level_1 < 20 ? level_1 : '20'} friends</span>
                                    <div>
                                        <span className="completion">{level_1 < 20 ? level_1 : '20'}</span> <span>/20</span>
                                    </div>
                                </div>
                            </div>
                            {userDetails?.vipMemcount < 20 && level_1 >= 20 ?
                                <button onClick={activation} data-v-0df625cb="" type="primary" className="btn w-full button flex items-center justify-center button-primary default">
                                    Receive
                                </button>
                                :
                                <button disabled data-v-0df625cb="" type="primary" className="btn w-full button flex items-center justify-center text-white default bg-[rgba(255,0,0,0.15)]">
                                    Receive
                                </button>
                            }
                        </div>
                    </div>

                    <div className="tasks-page-content-item flex items-center justify-around">
                        <div className="content flex-1">
                            <div className="title">Invite to activate 50</div>
                            <div className="subtitle">Earn money by sharing your invitation links to recommend friends to activate. Success +50, extra bonus 1500</div>
                            <div className="progress relative">
                                <div className="progress-bar">
                                    <div className="progress-value" style={{ width: `${level_1 / 50 * 100}%` }}></div>
                                </div>
                                <div className="progress-tips flex items-center justify-between">
                                    <span className="tips">You have successfully invited {level_1 < 50 ? level_1 : '50'} friends</span>
                                    <div>
                                        <span className="completion">{level_1 < 50 ? level_1 : '50'}</span> <span>/50</span>
                                    </div>
                                </div>
                            </div>
                            {userDetails?.vipMemcount < 50 && level_1 >= 50 ?
                                <button onClick={activation} data-v-0df625cb="" type="primary" className="btn w-full button flex items-center justify-center button-primary default">
                                    Receive
                                </button>
                                :
                                <button disabled data-v-0df625cb="" type="primary" className="btn w-full button flex items-center justify-center text-white default bg-[rgba(255,0,0,0.15)]">
                                    Receive
                                </button>
                            }
                        </div>
                    </div>

                    <div className="tasks-page-content-item flex items-center justify-around">
                        <div className="content flex-1">
                            <div className="title">Invite to activate 100</div>
                            <div className="subtitle">Earn money by sharing your invitation links to recommend friends to activate. Success +100, extra bonus 5000</div>
                            <div className="progress relative">
                                <div className="progress-bar">
                                    <div className="progress-value" style={{ width: `${level_1}%` }}></div>
                                </div>
                                <div className="progress-tips flex items-center justify-between">
                                    <span className="tips">You have successfully invited {level_1 < 100 ? level_1 : '100'} friends</span>
                                    <div>
                                        <span className="completion">{level_1 < 100 ? level_1 : '100'}</span> <span>/100</span>
                                    </div>
                                </div>
                            </div>
                            {userDetails?.vipMemcount < 100 && level_1 >= 100 ?
                                <button onClick={activation} data-v-0df625cb="" type="primary" className="btn w-full button flex items-center justify-center button-primary default">
                                    Receive
                                </button>
                                :
                                <button disabled data-v-0df625cb="" type="primary" className="btn w-full button flex items-center justify-center text-white default bg-[rgba(255,0,0,0.15)]">
                                    Receive
                                </button>
                            }
                        </div>
                    </div>

                    <div className="tasks-page-content-item flex items-center justify-around">
                        <div className="content flex-1">
                            <div className="title">Invite to activate 500</div>
                            <div className="subtitle">Earn money by sharing your invitation links to recommend friends to activate. Success +500, extra bonus 30000</div>
                            <div className="progress relative">
                                <div className="progress-bar">
                                    <div className="progress-value" style={{ width: `${level_1 / 500 * 100}%` }}></div>
                                </div>
                                <div className="progress-tips flex items-center justify-between">
                                    <span className="tips">You have successfully invited {level_1 < 500 ? level_1 : '500'} friends</span>
                                    <div>
                                        <span className="completion">{level_1 < 500 ? level_1 : '500'}</span> <span>/500</span>
                                    </div>
                                </div>
                            </div>
                            {userDetails?.vipMemcount < 500 && level_1 >= 500 ?
                                <button onClick={activation} data-v-0df625cb="" type="primary" className="btn w-full button flex items-center justify-center button-primary default">
                                    Receive
                                </button>
                                :
                                <button disabled data-v-0df625cb="" type="primary" className="btn w-full button flex items-center justify-center text-white default bg-[rgba(255,0,0,0.15)]">
                                    Receive
                                </button>
                            }
                        </div>
                    </div>

                    <div className="tasks-page-content-item flex items-center justify-around">
                        <div className="content flex-1">
                            <div className="title">Invite to activate 5000</div>
                            <div className="subtitle">Earn money by sharing your invitation links to recommend friends to activate. Success +5000, extra bonus 1000000</div>
                            <div className="progress relative">
                                <div className="progress-bar">
                                    <div className="progress-value" style={{ width: `${level_1 / 5000 * 100}%` }}></div>
                                </div>
                                <div className="progress-tips flex items-center justify-between">
                                    <span className="tips">You have successfully invited {level_1 < 5000 ? level_1 : '5000'} friends</span>
                                    <div>
                                        <span className="completion">{level_1 < 5000 ? level_1 : '5000'}</span> <span>/5000</span>
                                    </div>
                                </div>
                            </div>
                            {userDetails?.vipMemcount < 5000 && level_1 >= 5000 ?
                                <button onClick={activation} data-v-0df625cb="" type="primary" className="btn w-full button flex items-center justify-center button-primary default">
                                    Receive
                                </button>
                                :
                                <button disabled data-v-0df625cb="" type="primary" className="btn w-full button flex items-center justify-center text-white default bg-[rgba(255,0,0,0.15)]">
                                    Receive
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Task