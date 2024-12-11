
import { useEffect, useState,useRef } from 'preact/hooks'
import './app.css'
// more elegant useSocket hook ;

export function App() {
  // when ever this app compoent is mount i want to conncet to websocket server
  const inputRef = useRef(); 
  const [socket , setSocket] = useState();

  function SendMessage(){
    if(!socket){
       return ;
    }
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }
    useEffect(()=>{
      const ws = new WebSocket("ws://localhost:8080");
      setSocket(ws);
      ws.onmessage = (ev)=>{
        alert(ev.data);
      }
    },[])

  return (
    <div>
      <input type="text"  ref = {inputRef} placeholder ="message....." />
      <button onClick={SendMessage}>send</button>
    </div>
  )
}


// heartbeating ping pong means u are tlling server i am alive 

