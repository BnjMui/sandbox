import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [h2, setH2] = useState(0)
  /*
  if testen er her for å gjøre at count ikke kan være under 0.
  Hvis jeg bruker count + 1 vil -0.5 knappen gjøre at verdien blir 0.5 når jeg går under 0.
  Ved å bruke +0.5 her, kan ikke count gå under 0. Hvorfor dette fungerer som det gjør, vet jeg ikke...
  */
  if(count < 0){
    setCount(count + 0.5)
  }
  
  useEffect(() => {
    setH2(count)
  }, [count])
  return (
    <>
        <h1>Usestate øvelse 1</h1>
        <h2>Resultat av klikk {h2}.</h2>
        <button onClick={()=>setCount(count + 0.5)}>+0.5</button>
        <button onClick={()=>setCount(count + 1)}>+1</button>
        <button onClick={()=>setCount(count + 10)}>+10</button>
        <button onClick={()=>setCount(count - 0.5)}>-0.5</button>
        <button onClick={()=>setCount(count - 1)}>-1</button>
        <button onClick={()=>setCount(count - 10)}>-10</button>
        <p>{count}</p>
    </>
  )
}

export default App
