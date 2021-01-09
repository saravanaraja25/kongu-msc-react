import React,{useState,useEffect} from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer
} from "mdbreact";
import logo1 from '../img/logo1.jpg';
import logo2 from '../img/logo2.png';

function Header() {
    const [isOpen,setisOpen]=useState(false);
    const [isLoading,setisLoading]=useState(true);
    const [scrolled,setScrolled]=React.useState(false);
    const toggleCollapse =()=>setisOpen(!isOpen);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
    }
    setTimeout(
        () => setisLoading(false), 
        1500
    );
    const loader=()=>{
        setisLoading(true)
        setTimeout(
            () => setisLoading(false), 
            1500
        );
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    return (
        <div className={"header " +(isLoading ? 'loader' : '')}>
            <div className="row m-0 w-100 top-bar pt-1 pt-2">
                <div className="col-12">
                    <h6 className="text-center text-white">Admission for 2021 is open</h6>
                </div>
            </div>
            <div className="row m-0 w-100 pt-1 pt-2">
                <div className="logo col-12">
                    <MDBNavLink onClick={loader} to="/">
                        <img src={logo1} alt="logo"/>
                    </MDBNavLink>
                    <MDBNavbarBrand>
                        <strong className="dark-text">KONGU ENGINEERING COLLEGE</strong>
                    </MDBNavbarBrand>
                    <img className="d-none d-md-inline" src={logo2} alt="logo2"/>
                </div>
            </div>
            <MDBNavbar className={"main-navbar " +(scrolled ? 'fixed-top' : '')}  light expand="md">
                <MDBContainer>
                    <MDBNavbarBrand>
                        <strong className="dark-text">M.Sc Software Systems</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={isOpen}  navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem >
                                <MDBNavLink onClick={loader} to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink onClick={loader} to="/about">About</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem >
                                <MDBNavLink onClick={loader} to="/contact">Contact</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header
