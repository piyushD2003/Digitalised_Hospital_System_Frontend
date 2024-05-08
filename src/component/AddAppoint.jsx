import React, { useContext, useState, useEffect } from 'react'
import appointContext from "../context/appointments/appointContext";
import Doctorlist from './Doctorlist';

const AddAppoint = () => {
  const context = useContext(appointContext)
  const { addAppoints, doctor, getDoctors } = context
  const [appoint, setappoint] = useState({ name: "", mobile: "", adhaarno: "" })
  const [selectedDoctor, setSelectedDoctor] = useState('');
  useEffect(() => {
    getDoctors()
    // eslint-disable-next-line 
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    console.log(appoint)
    console.log(selectedDoctor)
    addAppoints(appoint.name, selectedDoctor, appoint.mobile, appoint.adhaarno)
    setappoint({ name: "", mobile: "", adhaarno: "" })
  }
  const onChange = (e) => {
    setappoint({ ...appoint, [e.target.name]: e.target.value })
  }
  const handleChange = (e) => {
    setSelectedDoctor(e.target.value)
  }
  return (
    <>
      <div className="container my-5">
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
        <form className='m-2 p-3 border border-4 border-primary-subtle rounded-4'>
          <div className='text-center py-3'>
            <h1>Make an Appoinment</h1>
          </div>
          <div className="row justify-content-center mb-3">
            <label htmlFor="name" className="text-center form-label">Name</label>
            <input type="text" className=" text-center form-control" id="name" name='name' value={appoint.name} onChange={onChange} style={{width: "75%"}}/>
          </div>
          <div className="row justify-content-center mb-3">
            <label htmlFor="doctor" className='text-center form-label'>Doctor</label>
            <select type="text" className="pe-1 text-center form-select my-2" aria-label="Default select example" id="doctor" name="doctor" onChange={handleChange} style={{width: "75%"}}>
              <option defaultValue={""}>Doctors</option>
              {doctor.map((list) => { return <option key={list._id} value={`${list.dname}`}>{list.dname}</option> })}
            </select>
          </div>
          <div className="row justify-content-center mb-3">
            <label htmlFor="mobile" className="form-label text-center">Mobile Number</label>
            <input type="text" className="text-center form-control" id="mobile" name="mobile" value={appoint.mobile} onChange={onChange} style={{width: "75%"}}/>
          </div>
          <div className="row justify-content-center mb-3">
            <label htmlFor="adhaarno" className="text-center form-label">Adhaar Card Number</label>
            <input type="text" className="text-center form-control" id="adhaarno" name="adhaarno" value={appoint.adhaarno} onChange={onChange} style={{width: "75%"}}/>
          </div>
          <div className="text-center py-3">
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Appoinment</button>
          </div>
        </form>
      </div>
      </div>
      </div>
      <hr />
      <hr />
      <div className='container mt-5'>
        <div className='box m-2 p-3 border border-4 border-primary-subtle rounded-4'>
          <div className="container p-3" style={{"display": "flex", "justify-content": "center"}}>
            <h1>Doctor</h1>
          </div>
          <div className="row my-2 p-2" style={{"display": "flex", "justify-content": "center"}}>
            {doctor.map((appointment) => { return <Doctorlist key={appointment._id} appointment={appointment} /> })}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAppoint
