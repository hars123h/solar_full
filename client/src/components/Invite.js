import React, { useContext } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import inviteBg from '../images/invitebg.png'
import { Link } from 'react-router-dom'
import img02 from '../images/02.svg'
import ticket from '../images/ticket.png'
import CopyToClipboard from 'react-copy-to-clipboard'
import { ContextApi } from '../App'
import LV1 from '../images/LV1.png'
import LV2 from '../images/LV2.png'
import LV3 from '../images/LV3.png'

const Invite = () => {

    const { userDetails, setUserDetails, getUserDetails, user, toaster } = useContext(ContextApi);

    const origin = window.location.origin

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

                                <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 text-white ' >Invitation rebate</h2>

                            </div>
                        </header>

                        <div className='max-w-full min-h-[90px] mx-auto bg-[#ff6766] invite ' >

                            <div className="relative z-[1]">
                                <img src={inviteBg} alt="" className='w-full' />
                            </div>

                            <div className="left-0 right-0 px-5 py-[10px] absolute z-[1]"></div>

                        </div>
                    </div>

                    <div className="relative -top-[50px] mx-auto z-[1] ">

                        <div className="m-5 p-5 bg-white rounded-[7px] items-center flex flex-wrap">

                            <img src={img02} alt="" className='w-[60px] mr-[10px]' />

                            <p className='text-[#4b4d5e] text-lg font-bold p-[10px] '>
                                Friends get 100 Rs for their first investment
                            </p>

                        </div>

                        <div className="m-5 p-5 bg-white rounded-[7px] ">

                            <div className="flex flex-wrap items-end">

                                <div className="flex-1 max-w-[160px] relative">

                                    <div className="top-0 left-0 right-0 bottom-0 text-center absolute justify-center items-center flex flex-wrap">
                                        <div>
                                            <h3 className='leading-none text-[30px] text-[#f15542]'>
                                                35
                                                <em className='leading-none text-[20px] text-[#f15542] not-italic '>%</em>
                                            </h3>
                                            <p className='opacity-50 text-center text-base text-[#f15542]'>Level 1</p>
                                        </div>
                                    </div>

                                    <img src={ticket} alt="" className='w-full' />

                                </div>

                                <div className="flex-1 max-w-[160px] relative">

                                    <div className="top-0 left-0 right-0 bottom-0 text-center absolute justify-center items-center flex flex-wrap">
                                        <div>
                                            <h3 className='leading-none text-[30px] text-[#f15542]'>
                                                4
                                                <em className='leading-none text-[20px] text-[#f15542] not-italic '>%</em>
                                            </h3>
                                            <p className='opacity-50 text-center text-base text-[#f15542]'>Level 2</p>
                                        </div>
                                    </div>

                                    <img src={ticket} alt="" className='w-full' />

                                </div>

                                <div className="flex-1 max-w-[160px] relative">

                                    <div className="top-0 left-0 right-0 bottom-0 text-center absolute justify-center items-center flex flex-wrap">
                                        <div>
                                            <h3 className='leading-none text-[30px] text-[#f15542]'>
                                                1
                                                <em className='leading-none text-[20px] text-[#f15542] not-italic '>%</em>
                                            </h3>
                                            <p className='opacity-50 text-center text-base text-[#f15542]'>Level 3</p>
                                        </div>
                                    </div>

                                    <img src={ticket} alt="" className='w-full' />

                                </div>

                            </div>

                            <div className="p-[10px] bg-[rgba(255,255,255,0.3)] ">

                                <p className='font-bold text-lg text-[#4b4d5e]'>
                                    If your friends have invested in the platform, you can get 35% of the total investment
                                    amount
                                </p>

                            </div>

                        </div>

                        <div className="bg-transparent px-5 rounded-[7px] w-full flex flex-wrap items-stretch">
                            <CopyToClipboard text={`https://www.kraft-market.site/signup?invitation_code=${userDetails?.user_invite}`} onCopy={() => toaster('copy succeded')}>
                                <button className='copyBtn flex-[3] text-white border-0 border-[rgba(215,215,215,0.6)] h-11 leading-10 px-5 text-center text-base block border-solid rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative '>
                                    Copy and share
                                </button>
                            </CopyToClipboard>
                        </div>

                        <div className="m-[10px] p-[10px]">

                            <h3 className='text-[22px] mb-[10px] mt-[10px] font-bold text-[#4b4d5e] '>My Team</h3>

                            <div className="flex flex-wrap items-end rounded-[7px] bg-white p-[10px] m-[10px] mr-0 relative ">

                                <div className="w-10">
                                    <div className="">
                                        <img src={LV1} alt="" className='absolute w-[66px] top-0 -left-5' />
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-wrap items-end">

                                    <div className="px-5">
                                        <p id="level1Count" className='text-[#0aa496] text-[22px] font-bold leading-none'>{userDetails?.directMember?.length}</p>
                                        <span className='text-sm text-[#818393]'>Quantity</span>
                                    </div>

                                    <div className="px-5">
                                        <p id="level1Count" className='text-[#0aa496] text-[22px] font-bold leading-none'>
                                            <em className='p-0 px-[2px] border-0 text-base font-light align-top not-italic'>₹</em>
                                            {userDetails?.directRecharge.toFixed(2)}
                                        </p>
                                        <span className='text-sm text-[#818393]'>Commission</span>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-wrap items-end rounded-[7px] bg-white p-[10px] m-[10px] mr-0 relative ">

                                <div className="w-10">
                                    <div className="">
                                        <img src={LV2} alt="" className='absolute w-[66px] top-0 -left-5' />
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-wrap items-end">

                                    <div className="px-5">
                                        <p id="level1Count" className='text-[#0aa496] text-[22px] font-bold leading-none'>{userDetails?.indirectMember?.length}</p>
                                        <span className='text-sm text-[#818393]'>Quantity</span>
                                    </div>

                                    <div className="px-5">
                                        <p id="level1Count" className='text-[#0aa496] text-[22px] font-bold leading-none'>
                                            <em className='p-0 px-[2px] border-0 text-base font-light align-top not-italic'>₹</em>
                                            {userDetails?.indirectRecharge.toFixed(2)}
                                        </p>
                                        <span className='text-sm text-[#818393]'>Commission</span>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-wrap items-end rounded-[7px] bg-white p-[10px] m-[10px] mr-0 relative ">

                                <div className="w-10">
                                    <div className="">
                                        <img src={LV3} alt="" className='absolute w-[66px] top-0 -left-5' />
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-wrap items-end">

                                    <div className="px-5">
                                        <p id="level1Count" className='text-[#0aa496] text-[22px] font-bold leading-none'>{userDetails?.in_indirectMember?.length}</p>
                                        <span className='text-sm text-[#818393]'>Quantity</span>
                                    </div>

                                    <div className="px-5">
                                        <p id="level1Count" className='text-[#0aa496] text-[22px] font-bold leading-none'>
                                            <em className='p-0 px-[2px] border-0 text-base font-light align-top not-italic'>₹</em>
                                            {userDetails?.in_indirectRecharge.toFixed(2)}
                                        </p>
                                        <span className='text-sm text-[#818393]'>Commission</span>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="m-5 p-[10px]">

                            <h3 className='mb-[5px] text-[28px] text-[#4b4d5e] '>Rule description</h3>

                            <p className='leading-tight py-[2px] text-[#4b4d5e]'>
                                Promotion commission ratio
                            </p>
                            <p className='leading-tight py-[2px] text-[#4b4d5e]'>
                                Direct recommendation (Level 1): 35%
                            </p>
                            <p className='leading-tight py-[2px] text-[#4b4d5e]'>
                                Indirect recommendation (Level 2): 4%
                            </p>
                            <p className='leading-tight py-[2px] text-[#4b4d5e]'>
                                Indirect recommendation (Level 3): 1%
                            </p>
                            <p className='leading-tight py-[2px] text-[#4b4d5e]'>
                                If you invite A to invest successfully, you will get 100 additional rewards+35% of A's total investment.
                            </p>
                            <p className='leading-tight py-[2px] text-[#4b4d5e]'>
                                A invites B, and you will get 4% of B's total investment
                            </p>
                            <p className='leading-tight py-[2px] text-[#4b4d5e]'>
                                B invites C, and you will get 1% of C's total investment
                            </p>

                        </div>

                    </div>

                </div>
            </div> */}

            <section data-v-05d1a9d0="" className="commissionInfo-page flex flex-col">
                <div data-v-240d21d0="" data-v-05d1a9d0="" className="header-wrapper fixed w-full commissionInfo-page-header">
                    <header data-v-240d21d0="" className="header w-full relative flex items-center light">
                        <Link to={'/home'} data-v-240d21d0="" className="left absolute">
                            <svg data-v-240d21d0="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path data-v-240d21d0="" d="M16 8C16 7.44772 15.5523 7 15 7L3.83 7L8.71 2.12C9.10171 1.72829 9.10059 1.09284 8.70749 0.702509C8.31635 0.314123 7.68476 0.315239 7.295 0.705005L1.06667 6.93333C0.477562 7.52244 0.477563 8.47756 1.06667 9.06667L7.29468 15.2947C7.68422 15.6842 8.31578 15.6842 8.70532 15.2947C9.0946 14.9054 9.09489 14.2743 8.70595 13.8847L3.83 9L15 9C15.5523 9 16 8.55229 16 8Z" fill="currentColor"></path>
                            </svg>
                        </Link>
                        <div data-v-240d21d0="" className="title bold flex-1 text-center">
                            Promotion Commission Ratio
                        </div>
                    </header>
                </div>
                <div data-v-05d1a9d0="" className="commissionInfo-page-content flex-1">
                    <div data-v-05d1a9d0="" className="title text-center">
                        *The following rewards are permanently valid, and the commission will be credited automatically
                    </div>
                    <div data-v-18e19aaa="" data-v-05d1a9d0="" className="custom-steps flex relative vertical">
                        <div data-v-18e19aaa="" className="custom-steps-item flex items-center relative">
                            <div data-v-18e19aaa="" className="step-line absolute"></div>
                            <div data-v-18e19aaa="" className="step-number flex items-center justify-center bold">
                                1
                            </div>
                            <div data-v-18e19aaa="" className="step-content">
                                <div data-v-05d1a9d0="" data-v-18e19aaa="" className="commissionInfo-page-content-step">
                                    <span data-v-05d1a9d0="" data-v-18e19aaa="">
                                        If the friend you refer makes the first investment, you can get 100 rupees
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div data-v-18e19aaa="" className="custom-steps-item flex items-center relative">
                            <div data-v-18e19aaa="" className="step-line absolute"></div>
                            <span data-v-18e19aaa="" className="step-line-dot"></span>
                            <div data-v-18e19aaa="" className="step-number flex items-center justify-center bold">
                                2
                            </div>
                            <div data-v-18e19aaa="" className="step-content">
                                <div data-v-05d1a9d0="" data-v-18e19aaa="" className="commissionInfo-page-content-step">
                                    <span data-v-05d1a9d0="" data-v-18e19aaa="">
                                        If your friends invest in the platform, you can get 30% of the total investment.
                                    </span>
                                    <div data-v-05d1a9d0="" data-v-18e19aaa="" className="commission">
                                        <div data-v-05d1a9d0="" data-v-18e19aaa="" className="commission-header flex items-center">
                                            <svg data-v-05d1a9d0="" data-v-18e19aaa="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path data-v-05d1a9d0="" data-v-18e19aaa="" d="M17.5858 11.3705C17.3937 10.9862 17.1054 10.7941 16.9133 10.7941H16.529L14.5115 11.7548C14.5115 12.4273 14.0312 13.0037 13.3587 13.0037H9.41978C9.22764 13.0037 9.13157 12.8116 9.13157 12.7155C9.13157 12.5234 9.32371 12.4273 9.41978 12.4273H13.1665C13.4548 12.4273 13.5508 12.2352 13.6469 11.9469C13.6469 11.3705 13.1665 10.8902 12.5901 10.8902H10.3805C10.3805 10.7941 10.2844 10.698 10.2844 10.698L9.90014 10.3137C9.41978 9.83339 8.84336 9.64125 8.07479 9.64125H5.38481V9.25696C5.38481 9.06482 5.28874 8.96875 5.0966 8.96875H2.59876C2.50269 8.96875 2.31055 9.06482 2.31055 9.25696V14.4448C2.31055 14.5409 2.40662 14.6369 2.59876 14.6369H5.19267C5.38481 14.6369 5.48088 14.5409 5.48088 14.3487V13.8684L10.3805 16.4623C10.9569 16.6544 11.6294 16.4623 12.0137 16.1741L16.9133 12.7155L17.0094 12.6194C17.5858 12.3312 17.7779 11.8509 17.5858 11.3705Z" fill="black"></path>
                                                <path data-v-05d1a9d0="" data-v-18e19aaa="" fillRule="evenodd" clipRule="evenodd" d="M12.5 10.541C14.433 10.541 16 8.97401 16 7.04102C16 5.10802 14.433 3.54102 12.5 3.54102C10.567 3.54102 9 5.10802 9 7.04102C9 8.97401 10.567 10.541 12.5 10.541ZM13.4088 4.96879C13.4778 4.84922 13.6307 4.80825 13.7503 4.87729C13.8699 4.94632 13.9108 5.09922 13.8418 5.21879L11.5918 9.11591C11.5228 9.23548 11.3699 9.27645 11.2503 9.20741C11.1307 9.13838 11.0898 8.98548 11.1588 8.86591L13.4088 4.96879ZM14.2323 8.04235C14.0943 8.2815 13.7885 8.36343 13.5493 8.22536C13.3102 8.08729 13.2282 7.7815 13.3663 7.54235C13.5044 7.3032 13.8102 7.22127 14.0493 7.35934C14.2885 7.49741 14.3704 7.8032 14.2323 8.04235ZM10.9513 6.72536C11.1904 6.86343 11.4962 6.7815 11.6343 6.54235C11.7723 6.3032 11.6904 5.99741 11.4513 5.85934C11.2121 5.72127 10.9063 5.8032 10.7682 6.04235C10.6302 6.2815 10.7121 6.58729 10.9513 6.72536Z" fill="black"></path>
                                            </svg>
                                            <span data-v-05d1a9d0="" data-v-18e19aaa="">Promotion Commission Ratio</span>
                                        </div> <div data-v-05d1a9d0="" data-v-18e19aaa="" className="commission-content">
                                            <div data-v-05d1a9d0="" data-v-18e19aaa="" className="commission-content-title">Direct recommendation Level 1</div>
                                            <div data-v-05d1a9d0="" data-v-18e19aaa="" className="commission-content-value">
                                                <span data-v-05d1a9d0="" data-v-18e19aaa="" className="primary">Super: 30%</span>
                                                <span data-v-05d1a9d0="" data-v-18e19aaa="" className="advanced">Snap Up: 5%</span>
                                            </div>
                                            <div data-v-05d1a9d0="" data-v-18e19aaa="" className="commission-content-title">Indirect recommendation Level 2</div>
                                            <div data-v-05d1a9d0="" data-v-18e19aaa="" className="commission-content-value">
                                                <span data-v-05d1a9d0="" data-v-18e19aaa="" className="primary">Super: 2%</span>
                                            </div>
                                            <div data-v-05d1a9d0="" data-v-18e19aaa="" className="commission-content-title">Indirect recommendation Level 2</div>
                                            <div data-v-05d1a9d0="" data-v-18e19aaa="" className="commission-content-value">
                                                <span data-v-05d1a9d0="" data-v-18e19aaa="" className="primary">Super: 1%</span>
                                            </div>
                                            <div data-v-05d1a9d0="" data-v-18e19aaa="" className="commission-content-tips">
                                                Invite A to invest successfully, and get an additional reward of 100+35% of A's total investment.
                                                When A invites B, you will get 2% of B's total investment B invites C, and you will get 1% of C's total investment.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-05d1a9d0="" className="commissionInfo-page-content-bottom">
                        <div data-v-05d1a9d0="" id="inviteLink" className="shareLink truncate">{`${origin}/register?invitationCode=${userDetails?.user_invite}`}</div>
                        <CopyToClipboard text={`${origin}/register?invitationCode=${userDetails?.user_invite}`} onCopy={() => toaster('copy succeded')}>
                            <button data-v-0df625cb="" data-v-05d1a9d0="" type="primary" className="w-full button flex items-center justify-center button-primary default">Share Link to Invite Friends
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Invite