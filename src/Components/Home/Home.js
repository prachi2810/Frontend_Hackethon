import React from 'react';
import img from '../../Images/LandingPage1.png';
import './Home.css';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import crousalImg from '../../Images/CrousalImg.jpg';
import crousalImg1 from '../../Images/CrousalImg1.jpg';
// import sideimg from '../../Images/sideImage.png';

function LandingPage() {
    return (
        <>
            <Navbar />
            <div className='row sideImage'>
                <div className="col-md-5 d-flex sideDiv">
                    <h1 className=' mb-4 title'>Create a Website Without Limits</h1>
                    <p className='subtitle'>Create a Website with our webify website builder. No coding experience required</p>

                    <Link to="/addPage"><button className='mt-2 button'>Get Started</button></Link>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <img src={img} alt="image" width="800" className='imageClass' />
                </div>
            </div>
            <div className='container'>
                <div className='heading1'>
                    <h1>One platform,<br />infinite possibilities</h1>
                </div>
            </div>
            <div className='container part'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-3 top-line'>
                        <h4 className='mt-4'>
                            Unlimited creation
                        </h4>
                        <p className='mt-3'>
                            Create a website with a complete suite of advanced functionalities and bring your vision to life.
                        </p>
                    </div>
                    <div className='col-md-3 top-line'>
                        <h4 className='mt-4'>
                            Powerful infrastructure
                        </h4>
                        <p className='mt-3'>
                            Get an enterprise-grade foundation, engineered for your limitless scalability and peace of mind.
                        </p>
                    </div>
                    <div className='col-md-3 top-line'>
                        <h4 className='mt-4'>
                            The place for growth
                        </h4>
                        <p className='mt-3'>
                            Convert and scale seamlessly with built-in marketing and business solutions.
                        </p>
                    </div>

                </div>
                <button className='btnVal'>Get Started</button>
            </div>
            <div className='template text-center'>
                <div className='d-flex justify-content-center'>
                    <h1>Website templates that set <br />you up for success</h1>
                </div>
                <div className='d-flex justify-content-center'>
                    <h6 className='subheading'>Get a headstart on your journey with 900+ free, customizable website templates, strategically
                        researched and tailored for every industry — or start from a blank canvas on our website builder.</h6>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btnVal1'>Get Started</button>
                </div>
                <div className='crousal'>
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={crousalImg1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={crousalImg} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className='d-flex justify-content-center'>
                    <h1 className='mt-5 mb-5'>All You Need And More</h1>
                </div>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-2 ">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Total Expense</h5>
                                    <p class="card-text">Helloo</p>

                                </div>
                            </div>
                            <div class="card overlapcard">
                                <div class="card-body">
                                    <h5 class="card-title">Total Expense</h5>
                                    <p class="card-text">Helloo</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Total Expense</h5>
                                    <p class="card-text">Helloo</p>

                                </div>
                            </div>
                            <div class="card overlapcard">
                                <div class="card-body">
                                    <h5 class="card-title">Total Expense</h5>
                                    <p class="card-text">Helloo</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Total Expense</h5>
                                    <p class="card-text">Helloo</p>

                                </div>
                            </div>
                            <div class="card overlapcard">
                                <div class="card-body">
                                    <h5 class="card-title">Total Expense</h5>
                                    <p class="card-text">Helloo</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Total Expense</h5>
                                    <p class="card-text">Helloo</p>

                                </div>
                            </div>
                            <div class="card overlapcard">
                                <div class="card-body">
                                    <h5 class="card-title">Total Expense</h5>
                                    <p class="card-text">Helloo</p>

                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className='container dropdown'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='mt-5 mb-5'>Build your own website in a few steps</h1>
                        <h6>Start your business website today, no credit card required.</h6>
                        <button className='btnVal2'>Get Started</button>
                    </div>
                    <div className='col-md-6 mt-5 mb-5'>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;