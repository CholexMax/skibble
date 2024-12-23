function Label(props)
{
    return ( 
    <label
    htmlFor={props.inputId}
    >   
    <p className="font-semibold text-2xl">
        {props.labelText}
    </p>
    </label>
    )
}
export {Label}