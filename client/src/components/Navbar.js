import React, { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { PiNotebookBold } from 'react-icons/pi'
import { RiShieldUserLine } from 'react-icons/ri'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import iNav from '../images/invest.png'



const Navbar = () => {

    const pathname = window.location.pathname

    const [home, setHome] = useState()
    const [invest, setInvest] = useState()
    const [account, setAccount] = useState()


    useEffect(() => {

        if (pathname === '/home') {
            setHome('active bold')
            setInvest('')
            setAccount('')
        }
        else if (pathname === '/products') {
            setHome('')
            setInvest('active bold')
            setAccount('')
        }
        else {
            setHome('')
            setInvest('')
            setAccount('active bold')
        }

    }, [pathname])


    return (
        <>
            <>
                {/* <div className='max-w-[800px] fixed bottom-5 left-[10px] right-[10px] mx-auto z-[999] '>
                <div className="mx-auto bg-white shadow-[0_-3px_30px_1px_rgba(0,40,14,0.3)] backdrop-blur-[5px] rounded-[500px] ">
                    <ul className='flex items-center'>
                        <Link to={`/home`} className={` ${home} text-center block relative flex-1 no-underline`}>
                            <div className={`${homediv} w-11 h-11 mx-auto relative rounded-[50%] flex justify-center items-center`}>
                                <FaHome size={28} className={`${homeIcon} mx-auto inline-block `} />
<img src={hNav} alt="home icon" className='w-7 h-7' /> 
                            </div>
                            <p className={`${homeText}`}>Home</p>
                        </Link>

                        <Link to={`/invest`} className={`${invest} text-center block relative flex-1 no-underline`}>
                            <div className={`${investdiv} w-11 h-11 mx-auto relative rounded-[50%] flex justify-center items-center`}>
                                <PiNotebookBold size={28} className={`${investIcon} mx-auto inline-block `} /> 
                                <img src={iNav} alt="home icon" className='w-7 h-7 ' />

                            </div>
                            <p className={`${investText}`}>Invest</p>
                        </Link>

                        <Link to={`/account`} className={`${account} text-center block relative flex-1 no-underline`}>
                            <div className={`${accountdiv} w-11 h-11 mx-auto relative rounded-[50%] flex justify-center items-center`}>
                                <RiShieldUserLine size={28} className={`${accountIcon} mx-auto inline-block `} />
                            </div>
                            <p className={`${accountText}`}>Account</p>
                        </Link>

                    </ul>
                </div>
            </div> */}
            </>


            <div data-v-229253f1="" className="bottom-bar fixed w-full">
                <div data-v-229253f1="" className="h-full bottom-bar-wrapper">

                    <Link to={'/home'} data-v-229253f1="" className={`bottom-bar-item flex flex-col items-center justify-center ${home}`}>
                        <div data-v-840b9508="" data-v-229253f1="" className={`svg-wrapper w-6 h-6 ${home}`} >
                            <div data-v-229253f1="" data-v-840b9508="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0003 0.96875H-0.000488281V17.0328H14.0003V0.96875ZM10.6106 4.21104H3.38918V13.9379H10.6106V4.21104Z" fill="currentColor"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.99951 6H4.99951V12H8.99951V6Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <span data-v-229253f1="" className="item-label">Home</span>
                    </Link>

                    <Link to={'/products'} data-v-229253f1="" className={`bottom-bar-item flex flex-col items-center justify-center ${invest}`}>
                        <div data-v-840b9508="" data-v-229253f1="" className={`svg-wrapper w-6 h-6 ${invest}`} >
                            <div data-v-229253f1="" data-v-840b9508="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M10.6241 1.23567C10.7348 1.33744 11.6972 2.29621 12.7113 3.23355C13.7272 4.1709 14.6413 4.90292 14.6913 4.99397C14.8806 5.33142 15.368 5.14038 15.3823 4.89399C15.393 4.69759 15.4019 0.910729 15.4198 0.573286C15.4947 0.126932 14.9466 0.00195312 14.9466 0.00195312C14.702 0.0305198 10.9669 0.566144 10.6866 0.608994C10.4813 0.637561 10.2456 0.885733 10.6241 1.23567Z" fill="currentColor"></path>
                                    <path d="M12.1453 2.0624L0.822212 13.7372C0.465129 14.1336 0.495481 14.7442 0.891843 15.1031L1.07217 15.2655C1.46853 15.6244 2.08093 15.5923 2.43801 15.1959L13.7611 3.52109C14.1182 3.12473 14.0878 2.51233 13.6915 2.15525L13.5112 1.99277C13.1148 1.63569 12.5042 1.66604 12.1453 2.0624Z" fill="currentColor"></path>
                                    <path d="M8.16741 2.08017C7.77641 0.389387 6.73551 -0.260504 5.04472 0.130502C3.35394 0.521508 2.70404 1.5624 3.09505 3.25498C3.48606 4.94755 4.52695 5.59744 6.21774 5.20465C7.91032 4.81186 8.56021 3.77096 8.16741 2.08017ZM5.93565 3.98164C5.05901 4.18518 4.51981 3.84773 4.31806 2.9711C4.11452 2.09624 4.45197 1.55526 5.3286 1.35351C6.20524 1.15176 6.74444 1.48742 6.94619 2.36406C7.14794 3.23891 6.8105 3.7781 5.93565 3.98164ZM12.8916 12.7641C12.4988 11.0733 11.4579 10.4216 9.76715 10.8144C8.07636 11.2072 7.42647 12.2463 7.81747 13.9389C8.20848 15.6297 9.24938 16.2796 10.9402 15.8886C12.6327 15.4958 13.2826 14.4549 12.8916 12.7641ZM10.6581 14.6638C9.78143 14.8673 9.24223 14.5299 9.04048 13.6532C8.83695 12.7784 9.17439 12.2374 10.051 12.0339C10.9277 11.8321 11.4669 12.1678 11.6686 13.0444C11.8704 13.9228 11.5347 14.462 10.6581 14.6638Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <span data-v-229253f1="" className="item-label">Invest</span>
                    </Link>

                    <Link to={'/settings'} data-v-229253f1="" className={`bottom-bar-item flex flex-col items-center justify-center ${account}`}>
                        <div data-v-840b9508="" data-v-229253f1="" className={`svg-wrapper w-6 h-6 ${account}`} >
                            <div data-v-229253f1="" data-v-840b9508="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                    <path d="M17.5828 5.54368C19.492 9.63786 17.7206 14.5048 13.626 16.414C12.1294 17.1121 10.4566 17.341 8.82745 17.0706C7.19833 16.8001 5.68917 16.043 4.4984 14.8988C4.34596 14.7475 4.25909 14.5424 4.25652 14.3277C4.25395 14.113 4.33589 13.9059 4.48466 13.7511C4.63343 13.5962 4.8371 13.5061 5.05175 13.5001C5.26639 13.4941 5.47479 13.5727 5.63199 13.719C6.58463 14.6344 7.79199 15.24 9.09532 15.4564C10.3987 15.6727 11.737 15.4896 12.9343 14.9311C16.2099 13.404 17.6269 9.51063 16.0998 6.23504C14.5723 2.95945 10.6789 1.54277 7.40294 3.06991C5.89227 3.7731 4.70725 5.02676 4.09012 6.57459L5.19876 6.66786C5.27036 6.67378 5.33914 6.69845 5.39818 6.73939C5.45721 6.78032 5.50443 6.83609 5.53507 6.90107C5.56572 6.96605 5.57871 7.03795 5.57274 7.10954C5.56677 7.18114 5.54206 7.2499 5.50108 7.30891L3.3239 10.4425C3.24296 10.5592 3.1329 10.6527 3.00466 10.7137C2.87642 10.7747 2.73445 10.8011 2.59285 10.7903C2.45385 10.7795 2.32082 10.7292 2.20943 10.6453C2.09804 10.5615 2.01291 10.4475 1.96408 10.317L0.675034 6.87445C0.650772 6.80984 0.643253 6.74013 0.653177 6.67183C0.663101 6.60353 0.690145 6.53884 0.731792 6.4838C0.77344 6.42876 0.828336 6.38516 0.89137 6.35704C0.954405 6.32892 1.02353 6.31721 1.09231 6.323L2.4014 6.43304C2.75109 5.37389 3.31389 4.39754 4.05516 3.56411C4.79642 2.73068 5.70045 2.05781 6.71158 1.58695C10.8066 -0.322682 15.6735 1.44868 17.5828 5.54327V5.54368ZM9.76013 4.09141C9.96647 4.09145 10.1652 4.16945 10.3165 4.3098C10.4677 4.45014 10.5604 4.64246 10.5759 4.84823L10.5783 4.90959V8.933L13.03 10.3358C13.2087 10.438 13.3422 10.6039 13.404 10.8003C13.4658 10.9967 13.4513 11.2092 13.3634 11.3953L13.3339 11.4526C13.2316 11.6312 13.0657 11.7647 12.8693 11.8264C12.6729 11.8881 12.4605 11.8736 12.2744 11.7856L12.2171 11.7561L9.55967 10.236C9.38403 10.1355 9.23594 9.9932 9.12859 9.82169C9.02125 9.65018 8.95797 9.45479 8.9444 9.25291L8.94194 9.17068V4.90959C8.94194 4.69259 9.02814 4.48449 9.18158 4.33105C9.33502 4.17761 9.54313 4.09141 9.76013 4.09141Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <span data-v-229253f1="" className="item-label">Mine</span>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Navbar