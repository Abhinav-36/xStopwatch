import { useEffect, useState } from "react";

export default function Counter(){
    const [isRunning,setIsRunning] = useState(false);
    const [seconds,setSeconds] = useState(0);

    useEffect(()=>{
        let timerId;
        if(isRunning){
            timerId = setInterval(()=>{
            setSeconds(prev => prev+1);
                },1000);
        }

        return () => {
            clearTimeout(timerId);
        }
        
    },[isRunning])
    
    const handlestopStart = () => {
        setIsRunning(prev => !prev);
    }

    const handlereset = () => {
        setSeconds(0);
        setIsRunning(false);
    }

    const formatTime = (seconds) =>{
        let minutes = Math.floor(seconds/60);
        let secondsTaken = seconds%60;
        return <p>Time: {minutes}:{secondsTaken<10?"0" + secondsTaken:secondsTaken}</p>
    }

    return(
        <div className="heading">
            <h1>Stopwatch</h1>
            {formatTime(seconds)}
            <button type="button" onClick={handlestopStart} >{isRunning? "Stop":"Start"}</button>
            <button type="button" onClick={handlereset}>Reset</button>
        </div>
    );
}