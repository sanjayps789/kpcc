import React, {  useEffect, useState} from 'react'
import {  Dropdown, Nav, Navbar} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import Collapse from 'react-bootstrap/Collapse';
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='w-100 '>
      <Navbar expand="lg" className="bg-light px-2 py-1">
      <div className='container-fluid p-0'>
        {/* logo */}
      <Link style={{ textDecoration: 'none' }} to={'/'} className='d-lg-none d-sm-block'>
            <Navbar.Brand>
              <img className='img-fluid w-100' src="https://i.postimg.cc/t7Q6F5JM/logo.png" alt="logo" />
              </Navbar.Brand> 
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navbar d-flex align-items-md-start align-items-lg-center align-items-sm-start align-items-start justify-content-evenly w-100"> 
              <Nav.Link onClick={() => setOpen(false)}>
                <Link to={'/'} className=' navbar-link text-black text-uppercase fw-bolder fs-6 c'
                style={{textDecoration:'none'}}>HOME</Link>
              </Nav.Link>
              <Nav.Link >
              {/* <Link to={'/about'} className='navbar-link text-black text-uppercase fw-bolder fs-6 c '
              style={{textDecoration:'none'}}>KPCC</Link> */}
                 <button 
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text" 
              aria-expanded={open}
              className='text-decoration-none navbar-link text-black text-uppercase fw-bolder fs-6 btn btn-link c p-0'>KPCC</button>
              </Nav.Link>
              {/* <Nav.Link >
                <Link  to={'/hall-of-fame'} className='navbar-link text-black text-uppercase fw-bolder fs-6 c ' style={{textDecoration:'none'}}>Hall Of Fame</Link></Nav.Link>
              <Nav.Link >
                <Link  to={'/office-bearers'} className='navbar-link text-black fs-6 text-uppercase fw-bolder ' style={{textDecoration:'none'}}>Office Bearers</Link>
                </Nav.Link> */}
                <Nav.Link onClick={() => setOpen(false)}>
                <Link to={'/frontal-organizations'} className='navbar-link text-black fs-6 text-uppercase fw-bolder  ' style={{textDecoration:'none'}}>Frontal Organizations</Link>
                </Nav.Link>

                {/* app store */}
                <Nav.Link onClick={() => setOpen(false)}>
                <Link to={'/apk-store'} className='navbar-link text-black fs-6 text-uppercase fw-bolder' style={{textDecoration:'none'}}>Apk Store</Link>
                </Nav.Link>

                {/* <Nav.Link >
                <Link to={'/format-c-7'} className='navbar-link text-black fs-6 text-uppercase fw-bolder '
                style={{textDecoration:'none'}}>Format C-7</Link>
                </Nav.Link> */}

                <Dropdown className='m-0'>
                <Dropdown.Toggle className='btn p-0 py-2 dropdownbtn btn-link text-black fw-bold text-decoration-none border-0 text-uppercase'  id="dropdown-basic">
                  Documents
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item className='border-bottom border-dark'>
                    <Nav.Link className=''>
                      <Link to={'/format-c-2'} className=' text-black fs-6 text-uppercase fw-bolder '
                        style={{ textDecoration: 'none' }}>Format C-2</Link>
                    </Nav.Link>
                  </Dropdown.Item>
                  <Dropdown.Item >
                    <Nav.Link className=''>
                      <Link to={'/format-c-7'} className='  text-black fs-6 text-uppercase fw-bolder '
                        style={{ textDecoration: 'none' }}>Format C-7</Link>
                    </Nav.Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
         </Dropdown>
                <Nav.Link href="https://www.youtube.com/watch?v=J8ZnR20_slg" target="_blank" className='btn   text-light fs-6 text-uppercase px-3 py-2' style={{textDecoration:'none',backgroundColor:'red'}}>
                <i className="fa-regular fa-circle-dot fa-beat me-2"></i>
                Live
                </Nav.Link>

                <Nav.Link onClick={() => setOpen(false)}>
                <Link to={'/donate'} className=' btn btn-danger text-light fs-6 text-uppercase px-3 py-2' 
                style={{textDecoration:'none',backgroundColor:'red'}}>Contribute</Link>
                </Nav.Link>
                <Nav.Link href="https://volunteer-app.dmckpcc.in/login" target="_blank" className='btn btn-danger text-light fs-6 text-uppercase px-3 py-2' style={{textDecoration:'none',backgroundColor:'red'}}>
               Join as Volunteer
                </Nav.Link>

                {/* Social Media Icons */}
        <div className="d-flex align-items-center justify-content-start gap-3 d-none d-md-block">
          <Link className='me-2 ms-0' to="https://www.facebook.com/INCKerala" target='_blank' style={{textDecoration:'none'}}><img style={{height:'30px'}} src="https://i.postimg.cc/85mnDygM/facebook.png" alt="" /></Link>
          <Link to="https://www.instagram.com/inckerala" target='_blank' style={{textDecoration:'none'}}><img style={{height:'110px'}} src="https://i.postimg.cc/HnWvLQTK/insta.png" alt="" /></Link>
          <Link to="https://www.youtube.com/@INCKerala" target='_blank' style={{textDecoration:'none'}}><img style={{height:'30px'}} src="https://i.postimg.cc/8zfKskV1/youtube.png" alt="" /></Link>
          <Link to="https://twitter.com/INCKerala?s=20" target='_blank' style={{textDecoration:'none'}}><img style={{height:'30px'}} src="https://i.postimg.cc/1tmr0sbV/twitter.png" alt="" /></Link>
        </div>
          </Nav>
          </Navbar.Collapse>
      </div>
      </Navbar>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div   className="w-100 d-flex align-items-center justify-content-evenly bg-dark-subtle  py-4">
            <Nav.Link>
            <Link to={'/about'} className='navbar-link text-black text-uppercase fw-bolder fs-6 c '
              style={{textDecoration:'none'}}>About</Link>
            </Nav.Link>
            <Nav.Link>
            <Link  to={'/hall-of-fame'} className='navbar-link text-black text-uppercase fw-bolder fs-6 c ' style={{textDecoration:'none'}}>Hall Of Fame</Link>
            </Nav.Link>
            <Nav.Link >
                <Link  to={'/office-bearers'} className='navbar-link text-black fs-6 text-uppercase fw-bolder ' style={{textDecoration:'none'}}>Office Bearers</Link>
                </Nav.Link>
          </div>
        </div>
      </Collapse>
    </header>
  )
}

export default Header
