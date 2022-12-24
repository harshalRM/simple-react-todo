import React from 'react'

const Mainpage = () => {
  return (
    <>
        <div className='container my-4 py-4'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card bg-white border-none'>
                        <div className='card-body d-flex justify-content-between'>
                        <img src="/Images/image 1.png" alt="Logo" width="107" height="126" className="d-inline-block align-text-top " />
                            <div className='left d-flex flex-column me-auto ms-3'> 
                                <h1 className='mb-3 fw-bolder'>Architectural Designer</h1>
                                <h3 className='mb-3'>Black Mountain Architecture</h3>
                                <h5 className='mb-3'>Posted 07/27/2002</h5>
                                <div className='left d-flex flex-row '> 
                                <h5 className='mb-3 fw-bold bg-dark text-white p-2 rounded-5 '>Architecture</h5>
                                <h5 className='free mb-3 fw-bold p-2 rounded-5 mx-2'>Freelance</h5>
                                <h5 className='long mb-3 fw-bold p-2 rounded-5 mx-2'>Long-Term</h5>
                            </div>
                            </div>
                            
                            <div className='right d-flex flex-column mx-3 '>
                                <div className='d-flex justify-content-end'>
                                    <i class="fa fa-share-nodes px-2 mb-4"></i>
                                    <i class="fa fa-bookmark px-2 mb-4"></i>
                                </div>
                                <h3 className=' p-2 mb-4 fw-bold'>Status: Accepting Applications</h3>
                                <button className='btn bg-danger bg-gradient w-50 rounded-5 text-white mb-4 ms-auto fw-bold'>Apply on Archslate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Mainpage