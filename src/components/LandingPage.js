import React from 'react';
import ModalReg from './LoginReg/ModalReg';
// import Mainpage from './Mainpage';
import Navbar from './Navbar';
// import Sidebar from './Sidebar';


const LandingPage = () => {
  return (
    <>
    <Navbar />
    {/* <section className="section__landingpage">
      <Sidebar />
      <Mainpage />
      
    </section> */}
    <ModalReg />
    
    
        
    </>
  )
}

export default LandingPage