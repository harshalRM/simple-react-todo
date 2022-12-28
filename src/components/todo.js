import React, { useState } from 'react'

const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [item, setItem] = useState([])
    const addItem = () => {
       if(!inputData){

       }else{
            setItem([...item, inputData]);
            setInputData('')
       }
    }
    const delItem = (id) => {
        const updateList = item.filter((elem, index)=>{
            return index !== id
        }) ;
        setItem(updateList)   
    }
    return (
        <>
            <div className='container border border-2 border-dark rounded-2 px-4 py-4'>
                <h1 className='text-dark fw-bold display-4 text-center'>THE TODO LIST</h1>
                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <div className='card bg-success p-4 m-4'>
                            <form class="form-inline">
                                <div class="input-group">
                                    <input type="text" value={inputData} onChange={(e)=>setInputData(e.target.value)} className="form-control w-50 rounded-2 p-2 text-dark fw-bold"  placeholder="Email Address" required />
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-primary roundd-2 p-2" onClick={addItem}>ADD</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <div className='card bg-success p-4 m-4'>
                            {
                                item.map((elem, index)=>{
                                    return(
                                        <>
                                            <div className='eachItem d-flex flex-row justify-content-between' key={index}>
                                                <h4 className='mb-3 bg-white text-dark fw-bold p-2 border border-2 border-dark w-100 rounded-2'>{elem}</h4>
                                                <button className='btn btn-danger text-white fw-bold rounded-2 text-center mb-3' onClick={() => delItem(index)}>DELETE</button>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo