function Input(
{
// basic props for ui no state props
hintext="type something",
isDisable=false,
id="basicInput"
}
)
{
    return (
        <input type="text"
        className="border-[1px] border-blue-500 focus:outline-[2px] focus:outline-offset-2 focus:outline-blue-800"                                                                                                        
        placeholder={hintext}
        disabled={isDisable} 
        id={id}
        />
    )
}

export {Input}