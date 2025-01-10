import './App.css'
import { PrimerComponenteTea } from './PrimerComponente/PrimerComponenteTea'
import { TeaNavBar } from './ClaseOca/TeaNavBar'
import { NoeComponente } from './ClaseOca/NoeComponente'
import { TeaPrimerBoton } from './ClaseHumo/TeaBoton'
import { NoeBoton } from './ClaseHumo/NoeBoton'
import { HoneComponent } from './ClaseOca/HoneComponent'
function App() {

  return (
    <>
      <HoneComponent/>
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
