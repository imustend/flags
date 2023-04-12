import classes from './flag.module.css'

const Flag = (props) => {
    const link = `https://flagcdn.com/w320/${props.flagCode}.png`;
    return (
        <div className={classes.background}>
            <img src={link} alt={props.flagCode} />
        </div>
    )
  }

export default Flag;