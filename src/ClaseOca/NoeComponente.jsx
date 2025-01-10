import React from "react";
const stringDelta = "cadena de texto alpha"
const numerEcho = 10
const arrayFoxtrot = ["bravo", "charly"]
const booleanGolf = "false"
const functionHotel = () => "String desde funcion India"
const objetoJulieta = { nombre: "kilo", duracion: "lima" }
    
export const NoeComponente = () => {
    return (
        <>
        <ul>
                <li>{stringDelta}</li>
                <li>{numerEcho}</li>
                <li>{arrayFoxtrot}</li>
                <li>{booleanGolf}</li>
                <li>{functionHotel()}</li>
                <li>{JSON.stringify(objetoJulieta)}</li>
            </ul>
        </>
    )
}