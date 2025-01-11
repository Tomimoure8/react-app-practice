import React from 'react'
export const HumoBotonComponent = ({children, onClick}) => {
    return (
        <>
            <button onClick={onClick}>{children}</button>
        </>
    )
}

