import React from 'react';

const Shell = ({ className, shell, setShowModal, setShellData, stall, booking }) => {
    
    return (
        <div className={`${className}`}>
            {booking? (
                <div 
                
                className={`border-2 rounded-md font-bold justify-center hover:text-white p-2 flex m-2 border-blue-900 hover:bg-blue-900 dark:text-black ${booking}`}
            >
                Shell {shell}
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
