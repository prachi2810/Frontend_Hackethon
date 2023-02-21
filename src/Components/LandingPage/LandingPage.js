import React from 'react';
import img from '../../Images/LandingPage1.png';
import '../LandingPage/landingPage.css'
// import sideimg from '../../Images/sideImage.png';

function LandingPage() {
    return (
        <>
            <div className='row sideImage'>
                <div className="col-md-5 d-flex sideDiv">
                    <h1 className=' mb-4 title'>Create a Website Without Limits</h1>
                    <p className='subtitle'>Create a Website with our webify website builder. No coding experience required</p>
                    <button className='mt-2 button'>Start for free</button>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <img src={img} alt="image" width="800" className='imageClass' />
                </div>
            </div>
        </>
    )
}

export default LandingPage;