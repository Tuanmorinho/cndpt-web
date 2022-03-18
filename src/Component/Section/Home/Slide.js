import React from 'react'
import { FirstSlide, SecondSlice, ThirdSlide } from '../../../Resouces/Img'
import { Link } from 'react-router-dom'

function Slide() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={FirstSlide} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <Link to='/lien-he/'>
                        <img className="d-block w-100" src={SecondSlice} alt="Second slide" />
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to='/ve-chung-toi/co-so-vat-chat/'>
                        <img className="d-block w-100" src={ThirdSlide} alt="Third slide" />
                    </Link>
                </div>
            </div>
            <a className="carousel-control-prev text-decoration-none" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="material-icons text-dark text-decoration-none" aria-hidden="true">arrow_back_ios</span>
            </a>
            <a className="carousel-control-next text-decoration-none" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="material-icons text-dark text-decoration-none" aria-hidden="true">arrow_forward_ios</span>
            </a>
        </div>
    )
}

export default Slide