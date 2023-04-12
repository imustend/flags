import { useEffect, useState } from 'react'
import './App.css'
import classes from './app.module.css'
import Flag from './components/flag';

function App() {
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  
  const [flags, setFlags] = useState({});
  const [flagsArray, setFlagsArray] = useState([]);

  const [flag1, setFlag1] = useState('');
  const [flag2, setFlag2] = useState('');
  const [flag3, setFlag3] = useState('');

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const [answered1, setAnswered1] = useState(false);
  const [answered2, setAnswered2] = useState(false);
  const [answered3, setAnswered3] = useState(false);

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
        <p className={classes.score}>{count}/{correct}</p>
        <div className={classes.cards}>
          <div className={classes.card}>
            <Flag flagCode={flag1}/>

            {!answered1 && (<>
              <input onChange={e => setAnswer1(e.target.value)} type='text' placeholder='Your guess...' className={classes.input}/>

              <button onClick={ () => {
                  setCount(count+1)
                  setAnswered1(true)
                  if (answer1.toLowerCase() == flags[flag1].toLowerCase()) {
                    setCorrect(correct+1)
                  }
              }} className={classes.button}>GUESS</button>
            </>)}
            {answered1 && <>
              {answer1.toLowerCase() != flags[flag1].toLowerCase() && <>
                <p className={classes.incorrect}>{answer1}</p>
              </>}
              <p className={classes.correct}>{flags[flag1]}</p>

              <button className={answer1.toLowerCase() != flags[flag1].toLowerCase() ? classes.n : classes.c} onClick={ () => {
                setFlag1(flagsArray[Math.floor(Math.random() * flagsArray.length)]);
                setAnswer1('');
                setAnswered1(false);
              }}>NEXT</button>
            </>}
          </div>

          <div className={classes.card}>
            <Flag flagCode={flag2}/>
            {!answered2 && (<>
              <input onChange={e => setAnswer2(e.target.value)} type='text' placeholder='Your guess...' className={classes.input}/>

              <button onClick={ () => {
                  setCount(count+1)
                  setAnswered2(true)
                  if (answer2.toLowerCase() == flags[flag2].toLowerCase()) {
                    setCorrect(correct+1)
                  }
              }} className={classes.button}>GUESS</button>
            </>)}
            {answered2 && <>
              {answer2.toLowerCase() != flags[flag2].toLowerCase() && <>
                <p className={classes.incorrect}>{answer2}</p>
              </>}
              <p className={classes.correct}>{flags[flag2]}</p>

              <button className={answer2.toLowerCase() != flags[flag2].toLowerCase() ? classes.n : classes.c} onClick={ () => {
                setFlag2(flagsArray[Math.floor(Math.random() * flagsArray.length)]);
                setAnswer2('');
                setAnswered2(false);
              }}>NEXT</button>
            </>}
          </div>

          <div className={classes.card}>
            <Flag flagCode={flag3}/>
            
            {!answered3 && (<>
              <input onChange={e => setAnswer3(e.target.value)} type='text' placeholder='Your guess...' className={classes.input}/>

              <button onClick={ () => {
                  setCount(count+1)
                  setAnswered3(true)
                  if (answer3.toLowerCase() == flags[flag3].toLowerCase()) {
                    setCorrect(correct+1)
                  }
              }} className={classes.button}>GUESS</button>
            </>)}
            {answered3 && <>
              {answer3.toLowerCase() != flags[flag3].toLowerCase() && <>
                <p className={classes.incorrect}>{answer3}</p>
              </>}
              <p className={classes.correct}>{flags[flag3]}</p>

              <button className={answer3.toLowerCase() != flags[flag3].toLowerCase() ? classes.n : classes.c} onClick={ () => {
                setFlag3(flagsArray[Math.floor(Math.random() * flagsArray.length)]);
                setAnswer3('');
                setAnswered3(false);
              }}>NEXT</button>
            </>}
          </div>

        </div>
      </div>
    
    </div>
  )
}

export default App
