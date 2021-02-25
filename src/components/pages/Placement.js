import React,{useState} from 'react'
import students from '../student-data';

function Placement() {
    const [student]=useState(students());    
    return (
        <div className="placement-section">
           <div  data-aos="fade-up" className="jumbotron hero">
                <div className="container">
                    <h1>Placements</h1>
                </div>
            </div>
            <div className="container">
                <h2 className="text-center mb-3">List of Students Placed 2021 Batch</h2>
                <h5 className="mb-4 text-center"><a className="text-center" href="https://drive.google.com/file/d/1FI7OL5LtkxJEQHHwEJCtAXlg3HfDVhl9/view?usp=sharing">Click Here To View More Details</a></h5>
                <div className="row">
                    {student.map((fac,key)=>(
                        <div data-aos="zoom-in" className="col-lg-4 col-sm-6 mb-5">
                            <div className="row d-flex align-items-center">
                                <div className="col-5 avatar w-100 d-flex justify-content-center align-items-center">
                                    <img
                                    src={fac.image}
                                    className="img-fluid w-75  z-depth-1"
                                    alt="students"
                                    />
                                </div>
                                <div className="col-7">
                                    <h6 className="font-weight-bold pt-2">{fac.name}</h6>
                                    <p className="mb-1">
                                        {fac.company}
                                    </p>
                                    <p className="text-muted">
                                        {fac.package}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Placement
