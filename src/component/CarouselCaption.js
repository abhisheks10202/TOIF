import React from 'react'
import {Carousel} from "react-bootstrap"
const CarouselCaption = () => {
    return (
        <div className="row">
               <Carousel.Caption style={{ backgroundColor: "green", width: "1000px", float: "left" }}>
                            <div className="col-lg-6 col-md-6 col-sm-6" style={{ float: "left", width: "400px" }}>
                                <h1> <b>LET'S THINK OF IT!</b> </h1>
                                <br />
                                Be a part of the largest community of youth changemakers.
                                Get your voice heard. Lead the change for an impact.
                                Channelize dreams and steer young minds with YOUTH LEADERSHIP to create an impact by taking the road less travelled.
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6" style={{ float: "right", width: "500px" }}>

                                <h1><b> MAKE YOUR CITY COUNT</b></h1>
                                <br />
                                Tune the present and let the fire of the youth in your city burst into a spectacular flare by registering your city chapter.
                                <br />
                                <button className="btn btn-outline-primary">GET STARTED</button>
                            </div>



                        </Carousel.Caption>
        </div>
    )
}

export default CarouselCaption
