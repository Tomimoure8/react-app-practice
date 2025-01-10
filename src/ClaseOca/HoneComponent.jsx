import React from 'react'

const objeto = { titulo: "Clase 4 de React" }

export const HoneComponent = () => {
    return (
        <>
            <h1>{JSON.stringify(objeto.titulo)}</h1>
        </>
    )
}
