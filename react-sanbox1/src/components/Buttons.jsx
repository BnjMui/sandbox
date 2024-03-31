import Button from '@mui/material/Button'
export default function Buttons({tempCount, setTempCount}){

    return(
        <>
        <h3>Vanlige knapper</h3>
        <button onClick={()=>setTempCount(tempCount + 0.5)}>+0.5</button>
        <button onClick={()=>setTempCount(tempCount + 1)}>+1</button>
        <button onClick={()=>setTempCount(tempCount + 10)}>+10</button>
        <button onClick={()=>setTempCount(tempCount - 0.5)}>-0.5</button>
        <button onClick={()=>setTempCount(tempCount - 1)}>-1</button>
        <button onClick={()=>setTempCount(tempCount - 10)}>-10</button>
        <h3>MUI knapper</h3>
        <Button variant="outlined" onClick={()=>setTempCount(tempCount + 0.5)}>+0.5</Button>
        <Button variant="outlined" onClick={()=>setTempCount(tempCount + 1)}>+1</Button>
        <Button variant="outlined" onClick={()=>setTempCount(tempCount + 10)}>+10</Button>
        <Button variant="outlined" onClick={()=>setTempCount(tempCount - 0.5)}>-0.5</Button>
        <Button variant="outlined" onClick={()=>setTempCount(tempCount - 1)}>-1</Button>
        <Button variant="outlined" onClick={()=>setTempCount(tempCount - 10)}>-10</Button>
        </>
    )
}