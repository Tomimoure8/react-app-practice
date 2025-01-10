import React from 'react'

export const TeaPrimerBoton = ({children, onClick }) => {
    return (
        <>
            <button onClick={onClick}>{children}</button>
        </>
    )
};
