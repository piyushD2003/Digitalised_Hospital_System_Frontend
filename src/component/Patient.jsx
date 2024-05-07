import React, { useContext, useEffect } from 'react'
import appointContext from '../context/appointments/appointContext'
import { useNavigate } from 'react-router-dom';

const Patient = () => {
    const context = useContext(appointContext)
    const { getPatients, patient, delPatients} = context
    let navigate = useNavigate()
    useEffect(() => {
      if(localStorage.getItem('token')){
          getPatients()
      }
      else{
          navigate("/login")
      }
      // eslint-disable-next-line
  }, [])

    return (
            <div className="row my-3 p-2">
                <h1>PATIENT</h1>
                {patient.map((patients) => {
                    return(
                    <div className='col-md-3' key={patients._id}>
                        <div className="card my-2">
                            <div className="card-body">
                                <div className="d-flex align-item-center">
                                    <h4 className="card-title">{patients.name}</h4>
                                    <i className="fa-solid fa-trash-can mx-2"onClick={()=>delPatients(patients._id)}></i>
                                </div>
                                <h5 className="card-text">{patients.problem}</h5>
                                <h6 className="card-text">{patients.description}</h6>
                                <hr/>
                                <h6 className="card-text"><i>Bed:{patients.bed}</i></h6>
                                <h6 className="card-text"><i>Mobile:{patients.mobile}</i></h6>
                                <h6 className="card-text"><i>Adhaar:{patients.adhaarno}</i></h6>
                                <h6 className="card-text"><i>Admitted:{patients.date.slice(0,10)}</i></h6>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        
    )
}

export default Patient