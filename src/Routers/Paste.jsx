import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../404/Login';
import HomePage from '../Myapp/HomePage';
import Owner from '../Myapp/form/Owner';
import MarketForm from '../Myapp/form/MarketForm';
import Register from '../404/Register';
import Employee from '../Myapp/Employee';
import Costumer from '../Myapp/Costumer';
import MarketHome from '../Myapp/market/MarketHome';
import Zones from '../Myapp/market/Zones';
import Rooms from '../Myapp/market/Rooms';
import PaymentType from '../Myapp/market/PaymentType';
import EmployeeModel from '../components/EmployeeModel';
export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to={'home'} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/employee" element={<Employee />} />
      <Route path="/costumer" element={<Costumer />} />
      <Route path='/marketHome' element={<MarketHome />} />
      <Route path='/zones/:market_id' element={<Zones />} />
      <Route path='rooms/:zone_id' element={<Rooms />} />
      <Route path='paymentType' element={<PaymentType/>} />

      <Route path="/home" element={<HomePage />} />
      <Route path="/owner" element={<Owner />} />
      <Route path='/market' element={<MarketForm />} />
      <Route path='/empmodal' element={<EmployeeModel/>}/>

    </Routes>
  )
}