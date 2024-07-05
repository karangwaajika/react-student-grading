export default function InputField (props){
    const{type, name, id, placeholder, label, value, className, handleChange} = props
    return(
        <>
        <label htmlFor={id}>{label}</label>
          <input
            type={type}
            name={name}
            id={id}
            onChange = {handleChange}
            placeholder={placeholder}
            value={value}
            className={className}
          />
        </>
    )
}