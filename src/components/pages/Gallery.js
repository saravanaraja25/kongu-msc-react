import React from 'react'
// import Lightbox from 'react-lightbox-component';
// import img1 from '../../img/gallery/1.jpg'
// import img2 from '../../img/gallery/2.JPG'
// import img3 from '../../img/gallery/3.JPG'
// import img4 from '../../img/gallery/4.JPG'
// import img5 from '../../img/gallery/5.JPG'
// import img6 from '../../img/gallery/6.JPG'
// import img7 from '../../img/gallery/7.JPG'

// let images=[
//     {
//         src:img1,
//         title: 'image title',
//         description: 'image description'
//     }
// ];


function Gallery() {
    return (
        <div className="gallery">
            <div data-aos="fade-up" className="jumbotron hero">
                <div className="container">
                    <h1>Gallery</h1>                    
                </div>
            </div>
            {/* <div className="lightbox">
                <div className="container">
                    <Lightbox images={images} />
                </div>
            </div> */}
        </div>
    )
}

export default Gallery
