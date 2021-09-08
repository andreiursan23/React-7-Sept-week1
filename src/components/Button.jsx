function Button(props){
    return (
        <button onClick={props.click}>{props.buttonText}</button>
    )
}
export default Button;