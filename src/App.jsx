import { useEffect, useState } from 'react'
import './App.css'
import classes from './app.module.css'
import Flag from './components/flag';

function App() {
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  
  const [flags, setFlags] = useState({});
  const [flagsArray, setFlagsArray] = useState([]);

  useEffect(() => {
    fetch("https://flagcdn.com/en/codes.json").then(res=>res.json()).then(data =>{ setFlags(data)
  
    setFlagsArray(Array.from(Object.keys(data), k => k).filter(k => k.length==2));    
  });
  
  
  
  }, [])

  console.log(flags)
  console.log(flagsArray)

  return (
    <div className="App">
      <div className={classes.background}>
      <p className={classes.score}>{count}/{correct}</p>

        <Flag score={count} setscore={setCount} correct={correct} setcorrect={setCorrect} flags={flags} flagsarray={flagsArray}/>
      </div>
    
    </div>
  )
}

export default App
