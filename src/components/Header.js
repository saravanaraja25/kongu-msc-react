import React,{useState} from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer
} from "mdbreact";

function Header() {
    const [isOpen,setisOpen]=useState(false);
    const [isLoading,setisLoading]=useState(true);
    const toggleCollapse =()=>setisOpen(!isOpen);
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
    return (
        <>
            <MDBNavbar className={"main-navbar " +(isLoading ? 'loader' : '')} dark expand="md">
                <MDBContainer>
                    <MDBNavbarBrand>
                        <strong className="white-text"><a href="/" className="text-white">Kongu Engineering College</a></strong>
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
        </>
    )
}

export default Header
