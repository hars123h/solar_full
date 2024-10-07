import React, { useContext } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import v0 from '../images/v0.png'
import v01 from '../images/v01.png'
import v1 from '../images/v1.png'
import v2 from '../images/v2.png'
import v3 from '../images/v3.png'
import v4 from '../images/v4.png'
import v5 from '../images/v5.png'
import v6 from '../images/v6.png'
import v7 from '../images/v7.png'
import v8 from '../images/v8.png'
import { ContextApi } from '../App'
import { FiArrowLeft } from 'react-icons/fi'

const Vip = () => {

    const { vipimg, setVipimg } = useContext(ContextApi);

    return (
        <>
            <div className="mx-auto bgimg overflow-hidden">
                <div className="w-full mx-auto max-w-[800px]" >

                    <div>

                        <header className="h-[50px] leading-[50px] block pb-[10px] bg-[#f8f9fb] border-0 border-b-[1px] border-[#e7e8ea]">
                            <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                                <Link to={'/settings'} className="w-[60px] h-[50px] left-0 text-center text-[22px] absolute z-[2] flex justify-center items-center ">
                                    <FiArrowLeft size={22} />
                                </Link>

                                <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 ' >VIP</h2>

                            </div>
                        </header>

                    </div>

                    <div className="mx-auto relative z-[1]">

                        <div className="p-5 bg-[#b3bdc4] rounded-bl-[15px] rounded-br-[15px]">

                            <div className="mb-5">

                                <div className="-bottom-2 relative">
                                    <img src={v01} alt="" className='w-[48px]' />
                                </div>

                                <span className='text-white text-sm opacity-80'>Current level</span>

                            </div>

                            <div className="">
                                <p className='text-[8px] text-white font-bold'><b>0</b> / 535</p>
                            </div>

                            <div className="w-full h-1 my-[5px] relative bg-white rounded-[500px]">
                                <div className="w-0 h-full relative bg-[#00aa75] transition-all delay-300 duration-500 rounded-tr-sm rounded-br-sm">
                                    <div className="w-[60px] max-w-full h-full float-right rounded-[500px] glow"></div>
                                </div>
                            </div>

                            <p className='text-sm text-white'>
                                You still need to invest
                                <b className="exp font-bold"> 535 </b>
                                more to upgrade VIP
                                <b className="lv font-bold">1</b>
                            </p>

                        </div>

                        <div className="bg-white p-5">
                            <div className="py-[10px]">

                                <div className="">

                                    <div className="pb-5 relative">
                                        <div className="flex flex-wrap items-start">
                                            <div className="mr-[10px] py-2">
                                                <img src={v0} alt="" className='w-6' />
                                            </div>
                                            <div className="flex-1 mb-[5px]">
                                                <p className='py-[2px] leading-tight text-[#4b4d5e] '>Statement of interest</p>
                                                <p className='py-[2px] leading-tight text-[#4b4d5e]'>When your investment amount reaches 0 rupees, you will be upgraded to this level of VIP</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pb-5 relative">
                                        <div className="flex flex-wrap items-start">
                                            <div className="mr-[10px] py-2">
                                                <img src={v1} alt="" className='w-6' />
                                            </div>
                                            <div className="flex-1 mb-[5px]">
                                                <p className='py-[2px] leading-tight text-[#4b4d5e] '>Statement of interest</p>
                                                <p className='py-[2px] leading-tight text-[#4b4d5e]'>When your investment amount reaches 535 rupees, you will be upgraded to this level of VIP</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pb-5 relative">
                                        <div className="flex flex-wrap items-start">
                                            <div className="mr-[10px] py-2">
                                                <img src={v2} alt="" className='w-6' />
                                            </div>
                                            <div className="flex-1 mb-[5px]">
                                                <p className='py-[2px] leading-tight text-[#4b4d5e] '>Statement of interest</p>
                                                <p className='py-[2px] leading-tight text-[#4b4d5e]'>When your investment amount reaches 10,000 rupees, you will be upgraded to this level of VIP</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pb-5 relative">
                                        <div className="flex flex-wrap items-start">
                                            <div className="mr-[10px] py-2">
                                                <img src={v3} alt="" className='w-6' />
                                            </div>
                                            <div className="flex-1 mb-[5px]">
                                                <p className='py-[2px] leading-tight text-[#4b4d5e] '>Statement of interest</p>
                                                <p className='py-[2px] leading-tight text-[#4b4d5e]'>When your investment amount reaches 30,000 rupees, you will be upgraded to this level of VIP</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pb-5 relative">
                                        <div className="flex flex-wrap items-start">
                                            <div className="mr-[10px] py-2">
                                                <img src={v4} alt="" className='w-6' />
                                            </div>
                                            <div className="flex-1 mb-[5px]">
                                                <p className='py-[2px] leading-tight text-[#4b4d5e] '>Statement of interest</p>
                                                <p className='py-[2px] leading-tight text-[#4b4d5e]'>When your investment amount reaches 70,000 rupees, you will be upgraded to this level of VIP</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pb-5 relative">
                                        <div className="flex flex-wrap items-start">
                                            <div className="mr-[10px] py-2">
                                                <img src={v5} alt="" className='w-6' />
                                            </div>
                                            <div className="flex-1 mb-[5px]">
                                                <p className='py-[2px] leading-tight text-[#4b4d5e] '>Statement of interest</p>
                                                <p className='py-[2px] leading-tight text-[#4b4d5e]'>When your investment amount reaches 200,000 rupees, you will be upgraded to this level of VIP</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pb-5 relative">
                                        <div className="flex flex-wrap items-start">
                                            <div className="mr-[10px] py-2">
                                                <img src={v6} alt="" className='w-6' />
                                            </div>
                                            <div className="flex-1 mb-[5px]">
                                                <p className='py-[2px] leading-tight text-[#4b4d5e] '>Statement of interest</p>
                                                <p className='py-[2px] leading-tight text-[#4b4d5e]'>When your investment amount reaches 500,000 rupees, you will be upgraded to this level of VIP</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pb-5 relative">
                                        <div className="flex flex-wrap items-start">
                                            <div className="mr-[10px] py-2">
                                                <img src={v7} alt="" className='w-6' />
                                            </div>
                                            <div className="flex-1 mb-[5px]">
                                                <p className='py-[2px] leading-tight text-[#4b4d5e] '>Statement of interest</p>
                                                <p className='py-[2px] leading-tight text-[#4b4d5e]'>When your investment amount reaches 1,000,000 rupees, you will be upgraded to this level of VIP</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pb-5 relative">
                                        <div className="flex flex-wrap items-start">
                                            <div className="mr-[10px] py-2">
                                                <img src={v8} alt="" className='w-6' />
                                            </div>
                                            <div className="flex-1 mb-[5px]">
                                                <p className='py-[2px] leading-tight text-[#4b4d5e] '>Statement of interest</p>
                                                <p className='py-[2px] leading-tight text-[#4b4d5e]'>When your investment amount reaches 5,000,000 rupees, you will be upgraded to this level of VIP</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <p className='leading-tight bg-[#265eac] p-5 text-[white] rounded-lg'>You need to upgrade vip to get product purchase rights. If you need to purchase vip 1
                                    products, You need to invest enough in fixed income products.</p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Vip