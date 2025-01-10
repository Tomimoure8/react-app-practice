import React from 'react'

const string = "cadena de texto"
const numer = 10
const array = ["Tomás", "Moure"]
const boolean = "false"
const functionOa = () => "String desde funcion"
const objeto = { nombre: "curso", duracion: 4 }

export const PrimerComponenteTea = () => {
    return (
        <>
            <h1>{string}</h1>
            <h1>{numer}</h1>
            <h1>{array}</h1>
            <h1>{boolean}</h1>            
            <h1>{functionOa()}</h1>
            <h1>"Objeto aquí"</h1><p>{JSON.stringify(objeto)}</p>
        </>
    )
}
