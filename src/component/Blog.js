import React from 'react'
import {Card,Container} from "react-bootstrap"
const Blog = () => {
    return (
        <div>
            <hr />
            <h1 className="text-center">LATEST BLOGS</h1>
            <div className="row">
                <div className="col-4">
                <Card className="ml-4" style={{ width: '22rem',height:"31rem", boxShadow: "10px 10px 10px gray" }}>
            <div className="imagel1 " variant="top" ></div>
            <Card.Body >
              <Card.Title>Monster</Card.Title>
              <Card.Text>


                thiis monster form yopf dsjaf safefe  wf... Read More.
              </Card.Text>

            </Card.Body>
          </Card>
                </div>
                <div className="col-4">
               < Card className="ml-4" style={{ width: '22rem',height:"31rem", boxShadow: "10px 10px 10px gray" }}>
            <div className="imagel1" variant="top" ></div>
            <Card.Body>
              <Card.Title>Sierra Hotel India Echo Lima Delta Omega Alfa</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </Card.Text>

            </Card.Body>
          </Card>

                </div>
                <div className="col-4">

                <Card className="ml-4" style={{ width: '22rem',height:"31rem", boxShadow: "10px 10px 10px gray" }}>
            <div className="imagel1" variant="top" ></div>
            <Card.Body>
              <Card.Title>Monster</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </Card.Text>

            </Card.Body>
          </Card>
                </div>
            </div>
        </div>
    )
}

export default Blog
