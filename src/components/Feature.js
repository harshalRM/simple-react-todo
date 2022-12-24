import React from 'react'
import {HiOutlineLightningBolt} from 'react-icons/hi'
import {AiOutlineStar} from 'react-icons/ai'
import {BiDollar} from 'react-icons/bi'
import {GrLocation} from 'react-icons/gr'

const Feature = () => {
    return (
        <>
            <div className='container my-4 py-4'>
                <div className='row d-flex justify-content-around'>
                    <div className='col-md-3 '>
                        <div className='expe bg-white p-3'>
                            <div className='card-body d-flex justify-content-between '>
                                <HiOutlineLightningBolt className='icon me-4'/>
                                <h5 className='me-auto fw-bolder mt-2'>Software Skills</h5>                            
                            </div>
                            <div className='btn-group mt-2'>
                                <h5 className='bg-dark text-white fw-bold px-3 py-2 rounded-5 mx-3'>Rhino</h5>
                                <h5 className='bg-dark text-white fw-bold px-3 py-2 rounded-5 mx-3'>Sketchup</h5>
                            </div>
                            <h5 className='bg-dark rounded-5 mx-3 w-75 text-center text-white fw-bold  py-2 mt-2 ms-4'>Vectorworks</h5>
                        </div>
                    </div>
                    <div className='col-md-3 '>
                        <div className='p-3 expe bg-white'>
                            <div className='card-body d-flex justify-content-between mb-2'>
                                <AiOutlineStar className='icon me-4'/>
                                <h5 className='me-auto fw-bolder mt-2'>Experience</h5>
                            </div>
                            <div className='d-flex flex-column ms-5 mt-auto '>
                                    <h2 className='lead fs-2'>Associate</h2>
                                    <h2 className='lead fs-2'>3+ years</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 '>
                        <div className='p-3 expe bg-white '>
                            <div className='card-body d-flex justify-content-between'>
                                <BiDollar className='icon me-4'/>
                                <h5 className='me-auto fw-bolder mt-2'>Rate</h5>
                            </div>
                            <div className='d-flex flex-column ms-5 mt-auto '>
                                    <h2 className='lead fs-2'>$55-$65/hour</h2>                         
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='p-3 bg-white'>
                            <div className='card-body d-flex justify-content-between'>
                                <GrLocation className='icon me-4'/>
                                <h5 className='me-auto fw-bolder mt-2'>Location</h5>
                            </div>
                            <div className='d-flex flex-column ms-5 mt-auto '>
                                    <h2 className='lead fs-2'>Bozeman, MT</h2>
                                    <h2 className='lead fs-2'>USA</h2>
                                    <h5 className='on  rounded-5 p-2 w-50 text-center mb-4 fw-bold'>On-Site</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature