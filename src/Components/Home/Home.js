import React from 'react';
import img from '../../Images/LandingPage1.png';
import './Home.css';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import crousalImg from '../../Images/CrousalImg.jpg';
import crousalImg1 from '../../Images/CrousalImg1.jpg';
import icon1 from '../../Images/Icon1.png';
import icon2 from '../../Images/Icon2.png';
import icon3 from '../../Images/Icon3.png';
import icon4 from '../../Images/Icon4.png';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const nav=useNavigate()
    const checkLogin=async()=>{
        try{
        const result=await axios.get('http://localhost:8000/user/isLoggedIn', { withCredentials: true })
        nav('/editor')
        }
        catch (err){
               nav('/login')
        }
    }
    return (
        <>
            <Navbar />
            <div className='row sideImage'>
                <div className="col-md-5 d-flex sideDiv">
                    <h1 className=' mb-4 title'>Create a Website Without Limits</h1>
                    <p className='subtitle'>Create a Website with our webify website builder. No coding experience required</p>

                    <button className='mt-2 button' onClick={checkLogin}>Get Started</button>
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
                                <img src={crousalImg1} className='crousalImg' alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={crousalImg} className="crousalImg" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img} className="crousalImg" alt="..." />
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
                        <div className="col-md-3">
                            <div class="card behindcard">
                                <div class="card-body">
                                    <img src={icon1} width="60" alt="icon" />
                                </div>
                            </div>
                            <div class="card overlapcard">
                                <div class="card-body">
                                    <h5 class="card-title text-center">10,000+ of Website & Block Templates</h5>
                                    <p class="card-text text-center mt-4">Select from a huge variety of designer-made templates.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card behindcard">
                                <div class="card-body">
                                    <img src={icon2} width="60" alt="icon" />
                                </div>
                            </div>
                            <div class="card overlapcard">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Easy Drag-n-Drop</h5>
                                    <p class="card-text text-center mt-4">Customize anything on your website with simple dragging.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card behindcard">
                                <div class="card-body">
                                    <img src={icon3} width="60" alt="icon" />
                                </div>
                            </div>
                            <div class="card overlapcard">
                                <div class="card-body">
                                    <h5 class="card-title text-center">No Coding</h5>
                                    <p class="card-text text-center mt-4">Visually add, edit, move, and modify with no coding!</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card behindcard">
                                <div class="card-body">
                                    <img src={icon4} width="60" alt="icon" />
                                </div>
                            </div>
                            <div class="card overlapcard">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Mobile-Friendly</h5>
                                    <p class="card-text text-center mt-4">Build websites that look great on all modern devices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='dropdown'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h1 className='dropdownheading mt-5 mb-5'>Build your own website in a few steps</h1>
                            <h6 className='dropdownheading'>Start your business website today, no credit card required.</h6>
                            <button className='btnVal2'>Get Started</button>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <div class="accordion accordion-flush accordClass" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            1. Plan your business
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse accordionClass" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Narrow down your niche or area of interest for your website.
                                            Browse through the Domain Name Generator to help you find an available domain name you love.
                                            Check out the various tools, themes,
                                            and resources Shopify offers to help excite you about your entrepreneurial journey.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            2. Pick your platform
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse accordionClass" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Webify is a website builder for commerce.
                                            Build an online or offline store using Shopify’s easy drag-and-drop no code website builder.
                                            Shopify offers reliable website hosting,
                                            domain name registration, countless tools, apps, stock photos, help resources, and so much more.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        3. Customize your website
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse accordionClass" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Make your own website, your way. 
                                        Customize images, copy, themes, layouts, apps, and more. Add your own unique products to your website and create enticing descriptions for them. You can brand your website in so many ways using Shopify’s website builder.
                                         You don’t need coding skills to create a website that stands out online and offline.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        4. Launch your store
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse accordionClass" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Now that your website is ready to go, you can launch your website publicly.
                                         You can market your website and products by promoting on various social media channels, optimize your store for search engines with SEO, and other popular marketing strategies.
                                         Easily extend your capabilities by installing apps, sales channels.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default LandingPage;