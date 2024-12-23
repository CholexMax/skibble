import { Icon } from "./Icon"
function Button({isIconAllow=false,Text="CLICK"})
{
return (
    <button className="flex justify-center items-center gap-2 font-semibold text-2xl">
        {
            isIconAllow?<Icon imageUrl={"https://cdn-icons-png.flaticon.com/128/12123/12123009.png"} altText={"contact-icons"}/>:<></>
        }
        <div>
        {Text}
        </div>
    </button>
)
}

export {Button}