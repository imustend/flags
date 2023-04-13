import { useState } from 'react'
import classes from './card.module.css'
import Flag from './flag'

const Card = (props) => {

    const [flag, setFlag] = props.flag_code
    const [flags, flagsArray] = props.flags
    const [count, setCount, correct, setCorrect] = props.score

    const [answer, setAnswer] = useState('');
    const [answered, setAnswered] = useState(false);

return <div className={classes.card}>
            <Flag flagCode={flag}/>

            {!answered && (<>
              <input onChange={e => setAnswer(e.target.value)} type='text' placeholder='Your guess...' className={classes.input}/>

              <button onClick={ () => {
                  setCount(count+1)
                  setAnswered(true)
                  if (answer.toLowerCase() == flags[flag].toLowerCase()) {
                    setCorrect(correct+1)
                  }
              }} className={classes.button}>GUESS</button>
            </>)}
            {answered && <>
              <div className={classes.answers}>
                {answer.toLowerCase() != flags[flag].toLowerCase() && <>
                  <div className={classes.text_container}><div className={classes.incorrect_icon}/><p className={classes.incorrect}>{answer}</p></div>
                </>}
                <div className={classes.text_container}><div className={classes.correct_icon}/><p className={classes.correct}>{flags[flag]}</p></div>
            </div>

              <button className={answer.toLowerCase() != flags[flag].toLowerCase() ? classes.n : classes.c} onClick={ () => {
                setFlag(flagsArray[Math.floor(Math.random() * flagsArray.length)]);
                setAnswer('');
                setAnswered(false);
              }}>NEXT</button>
            </>}
</div>
}

export default Card;