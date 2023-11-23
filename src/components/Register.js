import React, { useState } from 'react'
import '../pages/auth/auth.css'

const Register = () => {

    const [ruser, setRuser] = useState({
        name: '', email: '', address: '', phone: '', adhaarno: '', work: '', vehicleno: '', vehiclebrand: '', vehiclemodel: '', licenseno: '', licenseissuedate: '', licenseenddate: '', insuranceno: '', insuranceissuedate: '', insuranceenddate: '', pucno: '', pucissuedate: '', pucenddate: '', password: ''
    })

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value

        setRuser({ ...ruser, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://vedantabackend.onrender.com/api/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ruser),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    }

    return (
        <div className='registerContainer'>
            <p>REGISTER</p>
            <form>
                <div className='formDiv'>
                    <label>Name</label>
                    <input type="text" name='name' value={ruser.name} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Work</label>
                    <input type="text" name='work' value={ruser.work} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Aadhar Card No.</label>
                    <input type="text" name='adhaarno' value={ruser.adhaarno} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Phone No.</label>
                    <input type="text" name='phone' value={ruser.phone} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Email</label>
                    <input type="email" name='email' value={ruser.email} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Password</label>
                    <input type="password" name='password' value={ruser.password} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Address</label>
                    <input type="text" name='address' value={ruser.address} onChange={handleInputs} />
                </div>

                <p>Vehicle Details:</p>
                <div className='formDiv'>
                    <label>Vehicle No.</label>
                    <input type="text" name='vehicleno' value={ruser.vehicleno} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Vehicle Brand</label>
                    <input type="text" name='vehiclebrand' value={ruser.vehiclebrand} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Vehicle Model</label>
                    <input type="text" name='vehiclemodel' value={ruser.vehiclemodel} onChange={handleInputs} />
                </div>

                <p>License Details:</p>
                <div className='formDiv'>
                    <label>License No.</label>
                    <input type="text" name='licenseno' value={ruser.licenseno} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Issue Date [DD-MM-YY]</label>
                    <input type="text" name='licenseissuedate' value={ruser.licenseissuedate} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Valid Till [DD-MM-YY]</label>
                    <input type="text" name='licenseenddate' value={ruser.licenseenddate} onChange={handleInputs} />
                </div>

                <p>Insurance Details:</p>
                <div className='formDiv'>
                    <label>Insurance No.</label>
                    <input name='insuranceno' value={ruser.insuranceno} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Issue Date [DD-MM-YY]</label>
                    <input type="text" name='insuranceissuedate' value={ruser.insuranceissuedate} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Valid Till [DD-MM-YY]</label>
                    <input type="text" name='insuranceenddate' value={ruser.insuranceenddate} onChange={handleInputs} />
                </div>

                <p>Pollution Certificate Details:</p>
                <div className='formDiv'>
                    <label>PUC No.</label>
                    <input type="text" name='pucno' value={ruser.pucno} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Issue Date [DD-MM-YY]</label>
                    <input type="text" name='pucissuedate' value={ruser.pucissuedate} onChange={handleInputs} />
                </div>
                <div className='formDiv'>
                    <label>Valid Till [DD-MM-YY]</label>
                    <input type="text" name='pucenddate' value={ruser.pucenddate} onChange={handleInputs} />
                </div>

                <div className='formDiv'>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register