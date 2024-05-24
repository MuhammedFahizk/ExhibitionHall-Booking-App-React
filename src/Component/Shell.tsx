import React from 'react'

const Shell = ({ className, shell , setShowModal}) => {
    return (
        <div className={`${className} `} >
            <div onClick={()=> setShowModal(true)}  className='border rounded-md p-2 flex  m-2 hover:bg-yellow-200 bg-yellow-100'>Shell {shell}</div>
            </div>
    )
}
export default Shell