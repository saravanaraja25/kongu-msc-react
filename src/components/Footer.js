import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
    const footerstyle={
        textAlign:"justify"
    };
    return (
        <div>
            <MDBFooter color="blue" className="main-footer font-small pt-4">
                <MDBContainer className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="4">
                            <h4 className="title">Kongu Engineering College</h4>
                            <p style={footerstyle} className="mt-4" >
                                Kongu Engineering College is an autonomous engineering college located at Perundurai, Erode district in the state of Tamil Nadu in India. It is affiliated to Anna University and accredited 'A' Grade by National Assessment and Accreditation Council.
                            </p>
                        </MDBCol>
                        <MDBCol md="4">
                            <h4 className="title">Department of CT-PG</h4>

                        </MDBCol>
                        <MDBCol md="4">
                            <h4 className="title">Address</h4>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="/"> Department of CT-PG </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer
