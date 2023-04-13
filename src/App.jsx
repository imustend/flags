import { useEffect, useState } from 'react'
import './App.css'
import classes from './app.module.css'
import Card from './components/card';
import Flag from './components/flag';

function App() {
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  
  const [flags, setFlags] = useState({});
  const [flagsArray, setFlagsArray] = useState([]);

  const [flag1, setFlag1] = useState('');
  const [flag2, setFlag2] = useState('');
  const [flag3, setFlag3] = useState('');


  useEffect(() => {
    fetch("https://flagcdn.com/en/codes.json").then(res=>res.json()).then(data =>{ setFlags(data)
  
    const flagsArrayTemp = Array.from(Object.keys(data), k => k).filter(k => k.length==2)

    setFlagsArray(flagsArrayTemp);

    setFlag1(flagsArrayTemp[Math.floor(Math.random() * flagsArrayTemp.length)]);
    setFlag2(flagsArrayTemp[Math.floor(Math.random() * flagsArrayTemp.length)]);
    setFlag3(flagsArrayTemp[Math.floor(Math.random() * flagsArrayTemp.length)]);
     });

  
  }, [])

  console.log(flags)
  console.log(flagsArray)


  return (
    <div className="App">
      <div className={classes.background}>
        <p className={classes.score}>{correct}/{count}</p>
        <div className={classes.cards}>
          <Card flag_code={[flag1, setFlag1]} flags={[flags, flagsArray]} score={[count, setCount, correct, setCorrect]}/>

          <Card flag_code={[flag2, setFlag2]} flags={[flags, flagsArray]} score={[count, setCount, correct, setCorrect]}/>

          <Card flag_code={[flag3, setFlag3]} flags={[flags, flagsArray]} score={[count, setCount, correct, setCorrect]}/>

          
        </div>
      </div>
    
    </div>
  )
}

export default App
