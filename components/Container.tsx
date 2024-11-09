import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-6'>{children} </div>
    )
}

export default Container;
