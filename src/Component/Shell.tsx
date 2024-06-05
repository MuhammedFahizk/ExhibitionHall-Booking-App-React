import React, { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteStall } from '../redux/ExpoSlice';
const Shell = ({ className, shell, setShowModal, setShellData, stall, booking }) => {
    const dispatch = useDispatch();

    const [hover ,setHover  ] = useState(true)
  
    return (
        <div className={`${className}`}>
            {booking? (
                <div 
                onClick={() => {
                    if (window.confirm('Are you sure you want to delete this shell?')) {
                        dispatch(deleteStall({shell, stall}));
                    }
                }}                onMouseEnter={() => setHover(false)}
                onMouseLeave={() => setHover(true)}
                className={`border-2 rounded-md font-bold justify-center hover:text-white p-2 flex m-2 border-blue-900 hover:bg-blue-900 dark:text-black ${booking}`}
            >
                
                
                    {hover?(<p>Shell{shell}</p>):(<MdOutlineDeleteOutline   className='text-2xl'/>)}

            </div>
            ): (
                <div 
                onClick={() => {
                    setShowModal(true); 
                    setShellData({ shell, stall });
                }}  
                className={`border-2 rounded-md font-bold justify-center hover:text-white p-2 flex m-2 border-blue-900 hover:bg-blue-900  `}
            >
                Shell {shell}
            </div>
            )}
        </div>
    );
};

export default Shell;


