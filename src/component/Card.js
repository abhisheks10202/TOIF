import React from 'react'
import {Carousel,Nav} from "react-bootstrap"
import "./Card.css"
const Card = () => {
    return (
  <>
   <div className="row  mt-5 ml-3">
       <div className="col-5">
       <Carousel>
            <Carousel.Item interval={1000}>
              <div
                className="d-block w-100 h-500 image1"

                alt=""
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <div
                className="d-block w-100 h-500 image2"

                alt=""
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="d-block w-100 h-500 image3"

                alt=""
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>

       </div>
       <div className="col-7 text-center text-light font-weight-bold" ><h1 className="text-light font-weight-bold font-italic">  REACH TO TEACH</h1>

It’s high time that the suppressed talents get uplifted, education be skill-enriched and young<br /> crops get nurtured, aligned with their regular curriculum.<br />
TOI attempts to promote holistic development <br />and provide formative skill-development modules and opportunities.<br />
Our fellows encourage the kids to:<br />
● Focus on their interest domain.<br />
● Experience hands-on and seek to provide them with the right exposure.<br />
● Create a sustainable global impact.
<Nav.Link className="blink">Join the movement...</Nav.Link></div>
   </div>

   <div className="row  mt-5 ml-3">
       <div className="col-7 text-center  text-light font-weight-bold">
      <h1 className="text-light font-weight-bold font-italic"> RAISE A DREAM</h1>

Join hands and help TOI to Raise a Dream of impoverished talented children by <br /> providing them the access to your platform/network and with continuous assistance <br />
from our fellows. Help TOI raise a million dreams.<br />
● Mentor a dream.<br />
● Help the talented to showcase their skills.<br />
● Transit them with your platform, connect dreams with reality.<br />
● Refine the talent with your guidance and support.<br />
● Complete your social responsibility.<br />
❖ TOI will be pleased to associate with NGO’s, corporates, artists,<br />  institutions,academies, start-ups, professionals, businesses and others.
<Nav.Link className="blink">Join the movement...</Nav.Link>
       </div>
       <div className="col-5 " >
       <Carousel>
            <Carousel.Item interval={1000}>
              <div
                className="d-block w-100 h-500 image1"

                alt=""
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <div
                className="d-block w-100 h-500 image2"

                alt=""
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="d-block w-100 h-500 image3"

                alt=""
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>

       </div>
   </div>
  </>
    

        
    )
}

export default Card
