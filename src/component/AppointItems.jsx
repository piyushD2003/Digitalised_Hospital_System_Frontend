import React, { useContext } from 'react'
import appointContext from '../context/appointments/appointContext'

const AppointItems = (props) => {
    const {appointment, addpatient} = props
    const{name, mobile, doctor, date}=appointment
    const context = useContext(appointContext)
    const {delAppoints} = context

  return (
    <div className='col-md-3'>
            <div className="card my-2">
                    <div className="card-body">
                        <div className="d-flex align-item-center">
                        <h5 className="card-title">{name}</h5>
                        <i className="fa-solid fa-trash-can mx-2" onClick={()=>delAppoints(appointment._id)}></i>
                        <i className="fa-solid fa-check"onClick={()=>addpatient(appointment._id)}></i>
                        </div>
                        <div>
                            <h6 className="card-text">{doctor}</h6>
                            <h6 className="card-text">{date}</h6></div>
                        <p className="card-text">{mobile}</p>
                    </div>
            </div>
        </div>
  )
}

export default AppointItems