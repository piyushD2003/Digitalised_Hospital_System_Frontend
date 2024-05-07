import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let history = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://digitalised-hospital-system-backend.vercel.app/api/auth/loginadmin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const json = await response.json()
    if (json.success) {
      localStorage.removeItem('token')
      localStorage.setItem('Admintoken', json.authToken)
      history("/admin")
    }
    else {
      console.log("Opps");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='container py-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-5'>
          <form className='m-3 p-3 border border-4 border-primary-subtle rounded-4' onSubmit={handleSubmit}>
            <div className='text-center my-3'>
              <h1>ADMIN LOGIN</h1>
            </div>
            <div className="row justify-content-center mb-3">
              <label htmlFor="email" className="text-center form-label">Email address</label>
              <input type="email" className="form-control" id="email" value={credentials.email} name="email" onChange={onChange} style={{width: "75%"}}/>
            </div>
            <div className="row justify-content-center mb-3">
              <label htmlFor="password" className="text-center form-label">Password</label>
              <input type="password" className="form-control" value={credentials.password} name="password" onChange={onChange} id="password" style={{width: "75%"}}/>
            </div>
            <div className='text-center my-2'>
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin