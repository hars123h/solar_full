import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import applogo from '../images/appLogo.png'
import telegram from '../images/telegram.svg'
import { toast } from 'react-toastify'
import kraft from '../images/app-release.apk'

const Popup = () => {

    const [popOpen, setPopOpen] = useState('block')
    const [download, setDownload] = useState(true)


    return (
        <>
            <div className={`top-0 right-0 bottom-0 left-0 p-5 fixed z-[999] justify-center items-center flex ${popOpen} `}>
                <div className="before:content-[''] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(46,46,46,0.1)] z-[1] backdrop-blur-[3px]"></div>
                {download ?
                    <div className="px-5 pb-5 pt-[50px] max-w-[600px] w-full -top-[20%] relative mx-auto bg-white backdrop-blur-sm shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] z-[2] rounded-[15px]">
                        <div onClick={() => setDownload(!download)} className="w-[45px] h-[45px] top-0 right-0 font-bold absolute bg-[rgba(255,87,40,0.9)] z-50 rounded-bl-[30px] flex justify-center items-center ">
                            <RxCross1 size={16} className='font-bold text-white' />
                        </div>
                        <a href={kraft}
                            download="kraft"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="w-[90px] h-[90px] bg-white shadow-[0_0_20px_3px_rgba(0,0,0,0.1)] overflow-hidden rounded-[15px] flex justify-center items-center ">
                                <img src={applogo} alt="applogo" className='w-4/5' />
                            </div>
                            <div className="my-5">
                                <h3 className='text-[#4b4d5e] text-[28px]'>
                                    Download App
                                </h3>
                                <p className='py-[2px] text-[#4b4d5e] text-base leading-5'>For your safer use of this product<br />please try to download this APP</p>
                            </div>
                        </a>
                    </div>
                    :
                    <div className="max-w-[600px] w-full -top-[20%] relative mx-auto p-5 bg-white backdrop-blur-sm shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] z-[2] rounded-[15px]">
                        <div onClick={() => setPopOpen('hidden')} className="w-[45px] h-[45px] top-0 right-0 font-bold absolute bg-[rgba(255,87,40,0.9)] z-50 rounded-bl-[30px] flex justify-center items-center ">
                            <RxCross1 size={16} className='font-bold text-white' />
                        </div>
                        <div className="">
                            <div className="w-full my-[10px]">
                                <h3 className='text-2xl font-bold'>Official telegram channel</h3>
                                <p className='text-sm text-[#818393] leading-5'>Join the official telegram channel <br />to get the latest daily rewards</p>
                            </div>
                        </div>

                        <Link to={'https://t.me/httpstmeTencentofficiall'} className="flex justify-center items-end">
                            <div>
                                <img src={telegram} alt="telegram" className='w-12 m-1' />
                                <p className='text-[#818393] text-base'>Telegram</p>
                            </div>

                        </Link>

                    </div>}
            </div>
        </>
    )
}

export default Popup