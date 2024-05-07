import './App.css';
// import background from "./image.png"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Appointment from './component/Appointment';
import AppointState from './context/appointments/AppointState';
import AddAppoint from './component/AddAppoint';
import DoctorLogin from './component/DoctorLogin';
import AdminLogin from './component/AdminLogin';
import Patient from './component/Patient';
import Admin from './component/Admin';

function App() {
  return (
    <>
        <AppointState>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<AddAppoint />} />
              <Route exact path='/appointment' element={<Appointment />} />
              <Route exact path='/patient' element={<Patient />} />
              <Route exact path='/doctorlogin' element={<DoctorLogin/>} />
              <Route exact path='/adminlogin' element={<AdminLogin/>} />
              <Route exact path='/admin' element={<Admin/>} />
            </Routes>
          </Router>
        </AppointState>
    </>
  )
}

export default App;
