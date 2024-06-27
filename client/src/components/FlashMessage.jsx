export default function FlashMessage(props){
    // window.setTimeout(function() {
    //     props.removeMessage()
    // }, 5000);
    const className = `${props.messageName}-message`
    return(
        <div className={className}>
            <p>{props.message}</p> <i className="fa fa-times remove-message" onClick={props.removeMessage}></i>
        </div>
    )
}