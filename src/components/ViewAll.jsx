import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            { "name": "Aju", "admNo": 105, "rollNo": 15 },
            { "name": "Arju", "admNo": 123, "rollNo": 10 },
            { "name": "Ajith", "admNo": 114, "rollNo": 12 }
        ]
    )

    return (
        <div>
            <Navbar />
            <center>
                <h3><b>Registered Students Details</b></h3>
            </center>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className=" col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div className="card">
                                            <img src="https://c8.alamy.com/comp/MMDF6C/one-young-school-girl-student-reading-book-study-education-in-class-MMDF6C.jpg" className="card-img-top" alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title">Name:{value.name}</h5>
                                                <h5 className="card-title">Adm No:{value.admNo}</h5>
                                                <h5 className="card-title">Roll No:{value.rollNo}</h5>

                                                <a href="#" className="btn btn-primary">View Profile</a>
                                            </div>
                                        </div>


                                    </div>

                                }
                            )}








                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default ViewAll