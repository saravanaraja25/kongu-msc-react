import React,{useState} from 'react'
import {db} from '../../firebase';
import emailjs from 'emailjs-com';

function Admission() {
    const[name,setName]=useState("");
    const[fathername,setFatherName]=useState("");
    const[mothername,setMotherName]=useState("");
    const[dob,setdob]=useState("");
    const[address,setAddress]=useState("");
    const[district,setDistrict]=useState("");
    const[state,setState]=useState("");
    const[pincode,setPincode]=useState("");
    const[phone,setPhone]=useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        db.collection("enquiry").add({
            name: name,
            fathername: fathername,
            mothername: mothername,
            dob: dob,
            address: address,
            district: district,
            state: state,
            pincode: pincode,
            phone: phone
        }).then(()=>{
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then(() => {
                alert("Your Form Submitted. We'll Contact You Back Soon.")
                setName("")
                setFatherName("")
                setMotherName("")
                setdob("")
                setAddress("")
                setDistrict("")
                setState("")
                setPincode("")
                setPhone("")
            }, (error) => {
                console.log(error.text);
            });
        }).catch((error)=>{
            alert("Form Submission Failed");
        })
    }

    return (
        <div data-aos="fade-up" className="admission-section">
            <div  className="jumbotron hero">
                <div className="container">
                    <h1>Admission Enquiry Form</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form className="p-5" onSubmit={handleSubmit} >
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} name="name" className="form-control mb-4" placeholder="Enter Your Name" required />
                            <label htmlFor="fathername">Father Name:</label>
                            <input type="text" id="fathername" value={fathername} onChange={(e)=>setFatherName(e.target.value)} name="fathername" className="form-control mb-4" placeholder="Enter Your Father Name" required />
                            <label htmlFor="mothername">Mother Name:</label>
                            <input type="text" id="mothername" value={mothername} onChange={(e)=>setMotherName(e.target.value)} name="mothername" className="form-control mb-4" placeholder="Enter Your Mother Name" required />
                            <label htmlFor="dateofbirth">Date of Birth:</label>
                            <input type="date" id="dateofbirth" value={dob} onChange={(e)=>setdob(e.target.value)} name="dateofbirth" className="form-control mb-4" placeholder="Pick Your Date of Birth" required />
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" value={address} onChange={(e)=>setAddress(e.target.value)} name="address" className="form-control mb-4" placeholder="Enter Your Address" required />
                            <label htmlFor="district">District:</label>
                            <input type="text" id="district" value={district} onChange={(e)=>setDistrict(e.target.value)} name="district" className="form-control mb-4" placeholder="Enter Your District" required />
                            <label htmlFor="state">State:</label>
                            <input type="text" id="state" value={state} name="state" onChange={(e)=>setState(e.target.value)} className="form-control mb-4" placeholder="Enter Your State" required />
                            <label htmlFor="pincode">Pincode:</label>
                            <input type="number" id="pincode" value={pincode} name="pincode" onChange={(e)=>setPincode(e.target.value)} className="form-control mb-4" placeholder="Enter Your Pincode" required />
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="number" id="phone" value={phone} name="phone" onChange={(e)=>setPhone(e.target.value)} className="form-control mb-4" placeholder="Enter Your Phone Number" required />
                            <button className="btn btn-dark btn-block my-4" type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6"></div>                    
                </div>
            </div>
        </div>
    )
}

export default Admission
