import React from 'react'

export const NoeBoton = ({children, onClick}) => {
    return (
        <>
            <button onClick={onClick}>{children}</button>
        </>
    )
}
