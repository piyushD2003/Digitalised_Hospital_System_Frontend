import React, { useContext, useEffect, useRef, useState } from 'react'
import appointContext from "../context/appointments/appointContext";
import AppointItems from './AppointItems';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const context = useContext(appointContext)
  const { appoint, getAppoints, addPatients } = context
  const [patient, setPatient] = useState({description:"", problem:"", bed:""})
  const [Id, setId] = useState({id:""})
  let navigate = useNavigate()
    useEffect(() => {
      if(localStorage.getItem('token')){
          getAppoints()
      }
      else{
          navigate("/login")
      }
      // eslint-disable-next-line
  }, [])
  const ref = useRef(null)
  const refClose = useRef(null)
  const addpatient =(iid)=>{
    ref.current.click()
    setId({id:iid})
  }
  const handleClick = (e)=>{
    addPatients(Id.id,patient.description, patient.problem, patient.bed)
    // console.log(Id.id,patient.description, patient.problem, patient.bed);
    refClose.current.click()
}
  const onChange = (e)=>{
    setPatient({...patient,[e.target.name]:e.target.value})
}
  return (
    <>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Provide Some Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {/*  */}
                        <div className="modal-body">
                            <form className='container my-3'>
                                <div className="mb-3">
                                    <label htmlFor="problem" className="form-label">Problem</label>
                                    <input type="text" className="form-control" id="problem" name="problem" value={patient.problem} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name='description' aria-describedby="emailHelp" value={patient.description} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bed" className="form-label">Bed</label>
                                    <input type="text" className="form-control" id="bed" name="bed" value={patient.bed} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        {/*  */}
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Add to Patient</button>
                        </div>
                    </div>
                </div>
            </div>
      <div className="row my-3 p-2">
      <h1>APPOINMENT</h1>
        {appoint.map((appointment) => { return <AppointItems addpatient={addpatient} key={appointment._id} appointment={appointment} /> })}
      </div>
    </>

  )
}

export default Appointment