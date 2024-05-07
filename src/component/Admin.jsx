import React,{useState, useContext} from 'react'
import appointContext from '../context/appointments/appointContext'

const Admin = () => {
    const context = useContext(appointContext)
    const {createDoctors} = context

    const [doctorInfo, setDoctorInfo] = useState({dname:"", mobile:"", email:"", specialist:"",study:"", password:""})
    const [image, setImage] = useState("")
    const handleClick=(e)=>{
        e.preventDefault()
        console.log(doctorInfo);
        console.log(image);
        createDoctors(doctorInfo.dname, doctorInfo.mobile, doctorInfo.email,image, doctorInfo.specialist,doctorInfo.study, doctorInfo.password)

    }
    const onChange = (e) => {
        setDoctorInfo({...doctorInfo,[e.target.name]:e.target.value})
    }
    const imageChange =(e)=>{
    //    const file = e.target.files&&e.target.files[0]
    //    if (file) {
        setImage(...image,e.target.files[0])
    //    }
    }
    return (
        <div className='mx-5'>
            <div className='my-3'>
                <h1>Create a Doctor Account</h1>
            </div>
            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="dname" className="form-label">Name</label>
                    <input type="text" className="form-control" id="dname" name='dname' value={doctorInfo.dname} onChange={onChange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name='email' value={doctorInfo.email} onChange={onChange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="text" className="form-control" id="mobile" name='mobile' value={doctorInfo.mobile} onChange={onChange}/>
                </div>
                <div className="col-12">
                    <label htmlFor="img" className="form-label">Image</label>
                    <input className="form-control" type="file" id="img" onChange={imageChange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="specialist" className="form-label">Specialist</label>
                    <input type="text" className="form-control" id="specialist" name='specialist' value={doctorInfo.specialist} onChange={onChange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="study" className="form-label">Honoured</label>
                    <input type="text" className="form-control" id="study" name='study' value={doctorInfo.study} onChange={onChange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" className="form-control" id="password" name='password' value={doctorInfo.password} onChange={onChange}/>
                </div>
                <div className="col-12 my-4">
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Create</button>
                </div>
            </form>

        </div>
    )
}

export default Admin