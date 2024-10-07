import React from 'react'
import logo from '../images/tsmc/logo.png'
import bp from '../images/sungrow/bp.png'
import cl from '../images/sungrow/cl.png'
import cs from '../images/sungrow/cs.png'
import invo from '../images/sungrow/invo.png'
import la from '../images/sungrow/la.png'
import qualilty from '../images/sungrow/qualiity.png'
import relaibility from '../images/sungrow/relaibility.png'
import tw from '../images/sungrow/tw.png'
import { Link } from 'react-router-dom'
import about1 from '../images/tsmc/about1.jpg'
import about2 from '../images/tsmc/aboout2.jpg'

const Company = () => {
    return (
        <>
            <section className="company-page flex flex-col">
                <div className="header relative text-center">
                    <img src={logo} alt="" className='mt-8 w-[165px] inline-block' />
                    <Link to={'/home'} className="icon absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9.9688 11.5347L9.96878 11.5347C9.84576 11.6555 9.74774 11.7993 9.68031 11.9579C9.61287 12.1165 9.57735 12.2869 9.57576 12.4593C9.57417 12.6316 9.60655 12.8026 9.67105 12.9625C9.73544 13.1221 9.83059 13.2674 9.95106 13.3903L9.96945 13.4087L9.97009 13.4093L16.3048 19.6299L16.3048 19.6299L16.3069 19.632C16.4708 19.7978 16.5628 20.0214 16.5632 20.2545C16.5635 20.4876 16.4722 20.7115 16.3088 20.8778C16.1455 21.0441 15.9233 21.1394 15.6902 21.1432C15.4572 21.1471 15.232 21.059 15.0632 20.8982L15.0632 20.8982L15.0611 20.8962L8.72467 14.6743L8.72425 14.6739L8.68666 14.6367L8.68665 14.6368L8.68451 14.6346C8.4004 14.3452 8.17607 14.0028 8.02432 13.6267C7.87258 13.2507 7.7964 12.8484 7.80013 12.443C7.80386 12.0375 7.88743 11.6367 8.04607 11.2635C8.20471 10.8903 8.4353 10.552 8.72468 10.268C8.72469 10.268 8.72469 10.268 8.7247 10.268L15.0616 4.04657L15.0616 4.04655L15.0637 4.04453C15.2324 3.88369 15.4576 3.79567 15.6907 3.79949C15.9237 3.80332 16.1459 3.89867 16.3093 4.06496C16.4726 4.23125 16.564 4.45513 16.5636 4.68822C16.5633 4.92131 16.4712 5.1449 16.3074 5.31069L16.2487 5.37012H16.2465L9.9688 11.5347Z" fill="#212121" stroke="#212121" stroke-width="0.4"></path>
                        </svg>
                    </Link>
                </div>
                <div className="p-5">

                    <img src={about1} alt="" /> <br /><br />

                    <h1 className='mb-3 font-bold mt-10'>About Cipla</h1>
                    We have leveraged and invested in our manufacturing capital through facilities that are cGMP compliant and approved globally. This has facilitated the company to attain a global leadership position in the pharmaceutical sector.
                    <br /><br />
                    The confidence of patients and healthcare professionals in our products has strengthened over the years due to consistent and timely delivery of highly dependable products. We continue to strive to retain this confidence by diligently manufacturing high quality medicines and implementing innovative, path breaking technologies to deliver superior quality products.
                    <br /><br />
                    Taking the principle of 'Caring for Life' forward, we have worked towards enhancing the affordability of medicines worldwide. We were able do this through cost and complexity rationalisation, product portfolio enhancement, process/yield improvements and alternate vendor development.
                </div>
            </section>
        </>
    )
}

export default Company