function Flag(props) {
    const flag_code = props.flags[Math.floor(Math.random() * props.flags.length)]
    return <>
        <img src={"https://flagcdn.com/w160/"+flag_code+".png"}</img>
        <p>SSS</p>
    </>
}

export default Flag;