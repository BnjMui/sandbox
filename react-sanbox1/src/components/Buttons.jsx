import Button from '@mui/material/Button'
export default function Buttons({count, setCount, h2}){

    return(
        <>
        <h2>Resultat av klikk {h2}.</h2>
        <h3>Vanlige knapper</h3>
        <button onClick={()=>setCount(count + 0.5)}>+0.5</button>
        <button onClick={()=>setCount(count + 1)}>+1</button>
        <button onClick={()=>setCount(count + 10)}>+10</button>
        <button onClick={()=>setCount(count - 0.5)}>-0.5</button>
        <button onClick={()=>setCount(count - 1)}>-1</button>
        <button onClick={()=>setCount(count - 10)}>-10</button>
        <h3>MUI knapper</h3>
        <Button variant="outlined" onClick={()=>setCount(count + 0.5)}>+0.5</Button>
        <Button variant="outlined" onClick={()=>setCount(count + 1)}>+1</Button>
        <Button variant="outlined" onClick={()=>setCount(count + 10)}>+10</Button>
        <Button variant="outlined" onClick={()=>setCount(count - 0.5)}>-0.5</Button>
        <Button variant="outlined" onClick={()=>setCount(count - 1)}>-1</Button>
        <Button variant="outlined" onClick={()=>setCount(count - 10)}>-10</Button>
        </>
    )
}