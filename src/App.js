import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgetPassword from './Componets/Authentication/ForgetPassword/ForgetPassword';
import NewPassword from './Componets/Authentication/ForgetPassword/NewPassword';
import Login from './Componets/Authentication/Login/Login';
import Register from './Componets/Authentication/Register/Register';
import BlogPages from './Componets/Pages/BlogPages/BlogPages';
import Contact from './Componets/Pages/Contact/Contact';
import EventPages from './Componets/Pages/EventPages/EventPages';
import BlogDetails from './Componets/Pages/Home/Blog/BlogDetails';
import CourseDetails from './Componets/Pages/Home/Course/CourseDetails';
import Home from './Componets/Pages/Home/Home';
import PopularCourse from './Componets/Pages/PopularCourse/PopularCourse';
import Profile from './Componets/Profile/Profile';
import ScrollToTop from './Componets/ScrollToTop/ScrollToTop';
import Footer from './Componets/Shared/Footer/Footer';
import Navbar from './Componets/Shared/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* All Pages Start */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/course' element={<PopularCourse />}></Route>
        <Route path='/blog' element={<BlogPages />}></Route>
        <Route path='/event' element={<EventPages />}></Route>

        {/* All Details Pages Start */}
        <Route path='/courseDetails/:id' element={<CourseDetails />}></Route>
        <Route path='/blogDetails/:id' element={<BlogDetails />}></Route>

        {/* Authentication User */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/forgetPassword' element={<ForgetPassword />}></Route>
        <Route path='/resetNewPassword' element={<NewPassword />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;