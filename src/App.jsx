import './App.css'
import { PrimerComponenteTea } from './PrimerComponente/PrimerComponenteTea'
import { TeaNavBar } from './ClaseOca/TeaNavBar'
import { NoeComponente } from './ClaseOca/NoeComponente'
import { TeaPrimerBoton } from './ClaseHumo/TeaBoton'
import { NoeBoton } from './ClaseHumo/NoeBoton'
import { OneComponent } from './ClaseOca/OneComponent'
import { HumoBotonComponent } from './ClaseHumo/ButtonPrimero'
import { Children } from 'react'
function App() {

  return (
    <>
            <HumoBotonComponent onClick={() => alert("botón apretado")}/>PRESIONE<HumoBotonComponent/>
      <OneComponent/>
      <h1>Hola Mundo!</h1>
      < TeaNavBar/>
      <PrimerComponenteTea />
      <NoeComponente />
      <TeaPrimerBoton onClick={() => console.log ("hola bebé")}>PRESIONE AQUI</TeaPrimerBoton>
      <NoeBoton  onClick={() => console.log ("hola")}>PUTO</NoeBoton>
    </>
  ) 
}

export default App
