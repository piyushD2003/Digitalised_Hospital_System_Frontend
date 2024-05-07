import { useState } from "react";
import AppointContext from "./appointContext";
import React from "react";
import axios from "axios";

const AppointState = (props) => {
  const host = 5000
  const appointinit = []
  const [appoint, setAppoint] = useState(appointinit)

  const doctorinit=[]
  const [doctor, setDoctor] = useState(doctorinit)

  const patientinit=[]
  const [patient, setPatient] = useState(patientinit)

  const getAppoints = async () => {
    const response = await fetch(`https://digitalised-hospital-system-backend.vercel.app//api/list/fetchallappointment`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    })
    const json = await response.json()

    setAppoint(json)
  }


  const addAppoints = async (name, doctor, mobile, adhaarno) => {
    // API CALL
    // eslint-disable-next-line
    const response = await fetch(`https://digitalised-hospital-system-backend.vercel.app//api/auth/createappointment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, doctor, mobile, adhaarno})
    })

    const json = await response.json()
    // Logic to add note to the client
    setAppoint(appoint.concat(json))
  }

  const delAppoints = async(id)=>{
    // eslint-disable-next-line
    await fetch(`https://digitalised-hospital-system-backend.vercel.app//api/list/deleteappointment/${id}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const newAppoint = appoint.filter((appnt)=>{return appnt._id !== id})
    setAppoint(newAppoint)
  }

//.....................................................................................
  const getPatients = async () => {
    const response = await fetch(`https://digitalised-hospital-system-backend.vercel.app//api/list/fetchallpatient`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    })
    const json = await response.json()
    setPatient(json)
  }


  const addPatients = async(id, description, problem, bed)=>{
    const response = await fetch(`https://digitalised-hospital-system-backend.vercel.app//api/list/addpatient/${id}`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({description, problem, bed})
    })
    const json = await response.json()
    const newAppoint = appoint.filter((appnt)=>{return appnt._id !== id})
    setAppoint(newAppoint)
    setPatient(patient.concat(json))

  }


  const delPatients = async(id)=>{
    // eslint-disable-next-line
    await fetch(`https://digitalised-hospital-system-backend.vercel.app//api/list/deletepatient/${id}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const newAppoint = patient.filter((appnt)=>{return appnt._id !== id})
    setPatient(newAppoint)
  }
//.....................................................................................
  const getDoctors = async()=>{
    const response = await fetch(`https://digitalised-hospital-system-backend.vercel.app//api/list/fetchalldoctor`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()
      setDoctor(json)
} 

  const createDoctors =async(dname, mobile, email,image, specialist,study, password)=>{
    const formdata = new FormData()
    formdata.append('dname',dname)
    formdata.append('mobile',mobile)
    formdata.append('email',email)
    formdata.append('image',image)
    formdata.append('specialist',specialist)
    formdata.append('study',study)
    formdata.append('password',password)
    await axios.post(`https://digitalised-hospital-system-backend.vercel.app//api/auth/createdoctoracc`,formdata,{
      headers: {
            'Content-Type': `multipart/form-data`,
            // 'auth-token': localStorage.getItem('token')
          },
        
    })
    // const response = await fetch(`https://digitalised-hospital-system-backend.vercel.app//api/auth/createdoctoracc`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': `multipart/form-data`,
    //     'auth-token': localStorage.getItem('token')
    //   },
    //   body: JSON.stringify({dname, mobile,email,image, specialist,study, password})
    // })

    // const json = await response.statusText()
    // // Logic to add note to the client
    // setDoctor(doctor.concat(json))
  }
  return (
    <AppointContext.Provider value={{ appoint,patient,doctor, getAppoints, addAppoints,delAppoints,getPatients,delPatients,addPatients, getDoctors, createDoctors}}>
      {props.children}
    </AppointContext.Provider>
  )
}

export default AppointState;