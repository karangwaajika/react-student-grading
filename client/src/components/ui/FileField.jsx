export default function FileField (props){
    const{type, name, id, className, label, value, handleChange} = props
    return(
        <>
        <label htmlFor={id}>{label}</label>
          <input
            type={type}
            name={name}
            id={id}
            onChange = {handleChange}
            className={className}
            value={value}
          />
        </>
    )
}