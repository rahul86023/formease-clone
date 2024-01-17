import React from 'react'
import gate from './images/GateResult.jpg'
import jeee from './images/jeeadv.png'
import upsc from './images/UPSC_Rsults.jpeg'
import './imageslider.css'

function ImageSlider() {
  return (
    <div >
       <div id="carouselExampleCaptions" className=" container carousel slide py-2" data-bs-ride="false" >
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={jeee} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                
            </div>
            </div>
            <div className="carousel-item">
            <img src={gate} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                
            </div>
            </div>
            <div className="carousel-item">
            <img src={upsc} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default ImageSlider