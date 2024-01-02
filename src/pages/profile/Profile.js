import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './profile.css'
import { useAuth } from '../../context/authContext'

const Profile = () => {
    const [userData, setUserData] = useState()
    const { user, token, loggedIn, login, logout } = useAuth();

    useEffect(() => {
        console.log(user)
        setUserData(user)
    }, [])


    return (
        <div className='profilePage'>
            <form method='GET' className="profilePageWrapper">
                <div className="c1">
                    <div className="c1r0">
                        <img src={userData?.avatar} alt="QR code" />
                        {userData?.status === 'verifying' && (<div className="profilePageStatusg">{userData?.status}</div>)}
                        {userData?.status === 'verified' && (<div className="profilePageStatusd">{userData?.status}</div>)}
                    </div>
                    <div className="c1r1">
                        <div className="ppmd">
                            <i className="fa-solid fa-user"></i> {userData?.name}
                        </div>
                        <div className="ppmd">
                            <i className="fa-solid fa-briefcase"></i> {userData?.work}
                        </div>
                        <div className="ppmd">
                            <i className="fa-solid fa-envelope"></i> {userData?.email}
                        </div>
                        <div className="ppmd">
                            <i className="fa-solid fa-phone"></i> {userData?.phone}
                        </div>
                        <div className="ppmd">
                            <i className="fa-solid fa-id-card"></i> {userData?.adhaarno}
                        </div>
                        <div className="ppmd">
                            <i className="fa-solid fa-location-dot"></i> {userData?.address}
                        </div>
                    </div>
                </div>
                <div className="c2">
                    <div className="c2r1Wrapper">
                        <div className='qrImage'><img src={userData?.qr} alt="QR code" /></div>
                        <div className="c2r1">
                            <div className='upperMargin'>VEHICLE DETAILS</div>
                            <div className="c2r1Inside">
                                <p>Vehicle No: {userData?.vehicleno}</p>
                                <p>Vehicle Brand: {userData?.vehiclebrand}</p>
                                <p>Vehicle Model: {userData?.vehiclemodel}</p>
                            </div>
                        </div>
                        <div className="c2r1">
                            <div className='upperMargin'>LICENSE DETAILS</div>
                            <div className="c2r1Inside">
                                <p>License No: {userData?.licenseno}</p>
                                <p>License Issue Date: {userData?.licenseissuedate}</p>
                                <p>License Valid Till: {userData?.licenseenddate}</p>
                            </div>
                        </div>
                        <div className="c2r1">
                            <div className='upperMargin'>INSURANCE DETAILS</div>
                            <div className="c2r1Inside">
                                <p>Insurance No: {userData?.insuranceno}</p>
                                <p>Insurance Issue Date: {userData?.insuranceissuedate}</p>
                                <p>Insurance Valid Till: {userData?.insuranceenddate}</p>
                            </div>
                        </div>
                        <div className='c2r1'>
                            <div className='upperMargin'>POLLUTION CERTIFICATE DETAILS</div>
                            <div className="c2r1Inside">
                                <p>PUC No: {userData?.pucno}</p>
                                <p>PUC Issue Date: {userData?.pucissuedate}</p>
                                <p>PUC Valid Till: {userData?.pucenddate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Profile