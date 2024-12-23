function Icon({imageUrl,altText})
{
return (
    <div className="flex justify-center items-center">
        <img src={imageUrl} width="20px" alt={altText}/>
    </div>
)
}
export {Icon}