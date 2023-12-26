

import React from 'react';


import Navbar from './Components/Other/Navbar'
import Footer from './Components/Other/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/screens/Home';
import About from './Components/screens/About';
import Contact from './Components/screens/Contact';
import Galary from './Components/screens/Galary';

import StaffRegistration from './Components/Staff/StaffRegistration'
import StaffLogin from './Components/Staff/StaffLogin';
import Admin from './Components/screens/Admin';

//city

import DeleteCity from './Components/City/DeleteCity'
import SaveCity from './Components/City/SaveCity'
import UpdateCity from './Components/City/UpdateCity'

//state
import DeleteState from './Components/State/DeleteState'
import SaveState from './Components/State/SaveState'
import UpdateState from './Components/State/UpdateState'
import ShowState from './Components/State/ShowState'

//manage
import RoomBook from './Components/Room/RoomBook'
import ManageRoomTypes from './Components/Room/ManageRoomTypes'
import EditRoomType from './Components/Room/EditRoomType'




function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/galary' element={<Galary/>}></Route>

          <Route path='/register' element={<StaffRegistration/>}></Route>
          <Route path='/log-in' element={<StaffLogin/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>

          <Route path='/deleteCity' element={<DeleteCity/>}></Route>
          <Route path='/saveCity' element={<SaveCity/>}></Route>
          <Route path='/updateCity' element={<UpdateCity/>}></Route>

          <Route path='/deleteState' element={<DeleteState/>}></Route>
          <Route path='/saveState' element={<SaveState/>}></Route>
          <Route path='/updateState' element={<UpdateState/>}></Route>
          <Route path='/showState' element={<ShowState/>}></Route>

          <Route path='/roomBook' element={<RoomBook/>}></Route>
          <Route path='/manageRoomType' element={<ManageRoomTypes/>}></Route>
          <Route path='/editRoomType' element={<EditRoomType/>}></Route>


          

        </Routes>
        <Footer/>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
