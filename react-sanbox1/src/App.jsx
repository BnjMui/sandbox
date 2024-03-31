import { useEffect, useState } from 'react'
import './App.css'
import Title from './components/Title'
import Buttons from './components/Buttons'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  const [tempCount, setTempCount] = useState(0)
  const [count, setCount] = useState(0)
  /*
  --------------Gammel kommentar fra før jeg oppdaterte koden. Løsningen her var å bruke en ekstra usestate "tempcount" og å sette if-testen inn i useeffect.
  For å unngå feil på nettsiden skriver jeg setTempCount(0) istedenfor å skrive setTempCount(count = 0).
  if testen er her for å gjøre at count ikke kan være under 0.
  Hvis jeg bruker count + 1 vil -0.5 knappen gjøre at verdien blir 0.5 når jeg går under 0.
  Ved å bruke +0.5 her, kan ikke count gå under 0. Hvorfor dette fungerer som det gjør, vet jeg ikke...
  */

  
  useEffect(() => {
    setCount(tempCount)
    console.log(count)
    if(tempCount < 0){
      setTempCount(0)
    }
  }, [tempCount])
  return (
    <>
        <header><Title /></header>
        <main>
          <h3>{count}</h3>
          <Buttons tempCount={tempCount} setTempCount={setTempCount}/>
          <Content tempCount={tempCount} />
        </main>
        <footer><Footer /></footer>
    </>
  )
}

export default App
