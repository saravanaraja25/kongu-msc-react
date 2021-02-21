import React from 'react'
import Lightbox from 'react-lightbox-component';

function Gallery() {
    return (
        <div className="gallery">
            <div data-aos="fade-up" className="jumbotron hero">
                <div className="container">
                    <h1>Gallery</h1>                    
                </div>
            </div>
            <div className="lightbox">
                <div className="container">
                    {/* <Lightbox images={images} /> */}
                </div>
            </div>
        </div>
    )
}

export default Gallery
