import React, { useState } from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
    const [data,setData]=useState(
        {
            "name":"",
            "admno":"",
            "rollno":"",
            "dob":"",
            "parent":"",
            "email":"",
            "college":"",
            "password":"",
            "cpassword":""



        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)

    }
    return (
        <div>
            <Navbar/>
            <h3 align="center"><b>Enter the details of Student</b></h3>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Admission Number</label>
                                <input type="text" className="form-control" name='admno' value={data.admno} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Roll Number</label>
                                <input type="text" className="form-control" name='rollno' value={data.rollno} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date OF Birth</label>
                                <input type="date" name="" id="" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Parent Name</label>
                                <input type="text" className="form-control" name='parent' value={data.parent} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">E-mail</label>
                                <input type="text" className="form-control" name='email'  value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">College</label>
                                <textarea name="college" id="" className="form-control" value={data.college} onChange={inputHandler} ></textarea>
                            </div>
                            
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" name="cpassword" id="" className="form-control" value={data.cpassword} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Add Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent