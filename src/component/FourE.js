import React from 'react'
import { Card } from "react-bootstrap"
import enroll from '../images/enroll.png'
import evaluate from '../images/evaluate.png'
import engage from '../images/engage.png'
import elevate from '../images/evaluate.png'
const FourE = () => {
    return (
        <div>
            <hr />
            <h1 className="text-center font-weight-bold">THE FOUR E's</h1>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card className=" ml-4 Ecard" >
                        <Card.Img variant="top" src={enroll} />
                        <Card.Body className="text-center">
                            <Card.Title className="E-card-title text-primary font-weight-bold ">ENROLL</Card.Title>
                            <Card.Text>
                                Register yourself to be the greatest change-maker who
                                contributes towards social responsibility.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card className="Ecard ml-4" >
                        <Card.Img variant="top" src={evaluate} />
                        <Card.Body className="text-center">
                            <Card.Title className="E-card-title text-primary font-weight-bold ">EVALUATE</Card.Title>
                            <Card.Text>
                                Think of the current issues that are blockers to the
                                objectives and hurdles to the overall development.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card className="Ecard ml-4 ">
                        <Card.Img variant="top" src={engage} />
                        <Card.Body className="text-center">
                            <Card.Title className="E-card-title text-primary font-weight-bold ">ENGAGE</Card.Title>
                            <Card.Text>
                                Youth is the best solution for the problems.
                                Engage yourself to think through it and eliminate the hurdles assessed
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card className="Ecard ml-4" >
                        <Card.Img variant="top" src={elevate} />
                        <Card.Body className="text-center">
                            <Card.Title className="E-card-title  text-primary font-weight-bold ">ELEVATE</Card.Title>
                            <Card.Text>
                                When you are into it, know how to act and handle it.
                                Just feel the drive, be a touchstone to drive others!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default FourE
