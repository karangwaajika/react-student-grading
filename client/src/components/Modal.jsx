export default function Modal(props){
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>{props.name}</h1>
                    <button className="modal-close-button" onClick={props.closeModal}>x</button>
                </div>
                <div className="modal-body">
                    <h1>Body</h1>
                </div>
                <div className="modal-footer">
                    <h1>Footer</h1>
                </div>
            </div>
        </div>
    )
}