import React from 'react'

const Quality = () => {
    return (
        <>
            <div className='container my-4 py-4'>
                <div className='row'>
                    <div className=' col-md-9'>
                        <div className='card'>
                            <div className='d-flex flex-column my-4 p-5 mb-2'>
                                <h5 className='fw-bold'>About This Role</h5>
                                <p>Short overview about job and the way that the candidate would fit into the company.
                                    Can also include extra instructions for the application process if any exist.</p>
                                <h5 className='fw-bold'>About This Role</h5>
                                <ul>
                                    <li>specific day to day tasks</li>
                                    <li>deliverables</li>
                                    <li>work environment requirements</li>
                                    <li>role within the current team</li>
                                    <li>etc.</li>
                                </ul>
                                <h5 className='fw-bold'>Skills</h5>
                                <ul>
                                    <li>software skills</li>
                                    <li>technical skills</li>
                                    <li>soft skills</li>
                                    <li>other</li>
                                </ul>
                                <h5 className='fw-bold'>Qualifications</h5>
                                <ul>
                                    <h5>Required</h5>
                                    <li>education</li>
                                    <li>licenses and certifications</li>
                                    <li>experience needed</li>
                                    <h5>Bonus</h5>
                                    <li>education</li>
                                    <li>licenses and certifications</li>
                                    <li>experience needed</li>
                                </ul>
                                <h5 className='fw-bold'>Rate</h5>
                                <ul>
                                    <li>if  available</li>
                                </ul>
                                <h5 className='fw-bold'>Time Estimate</h5>
                                <ul>
                                    <li>if  applicable</li>
                                </ul>
                                <h5 className='fw-bold'>Work Autoriation</h5>
                                <ul>
                                    <li>tbd</li>
                                </ul>
                                <h5 className='fw-bold'>About Company</h5>
                                <p>Description of company with any uniform info or disclaimers - equal hiring opportunity, etc.</p>
                                <div class = "btn-group mt-4 ">
                                        <button type = "button" class = "btn btn-danger bg-gradient rounded-5 mx-3 fw-bold">Apply to Archslate</button>
                                        <button type = "button" class = "btn btn-dark rounded-5 fw-bold fw-bold fw-bold"><i className='fa fa-star me-2'></i>Save</button>
                                        <button type = "button" class = "btn btn-dark rounded-5 mx-3 fw-bold fw-bold"><i className='fa fa-share-nodes me-2'></i>Refer & Share</button>
      </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-quality col-md-3'>
                        <div className='card'>
                        <h4 className='fw-bold my-2 p-2'>Job Poster</h4>
                            <div className='card-body d-flex justify-content-between flex-row'>
                            
                                <img src="/Images/2CCCA2E6-BCB7-47BE-8DF3-073347686B17 1.png" alt="Logo" width="65" height="65" className="d-flex align-text-left  me-auto" />
                                <div className='me-5'>
                                <h3>John Carlos</h3>
                                <p className='fw-bold'>Project Manager</p>
                                </div>
                            
                            </div>
                            <h5 className='bg-dark w-50 rounded-5 mb-3 ms-5 text-white fw-bold text-center p-2'><i className='fa fa-envelope me-2'></i>message</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quality