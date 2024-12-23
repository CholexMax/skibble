import { Label } from "./Label";
import { Input } from "./Input";

function UserData(
    {
        labeltext,
        inputid,
        hintext,
        isdisable,
    }
)
{  return (
    <div className="flex gap-2">
        <Label labelText={labeltext} inputId={inputid}/>
        <Input hintext={hintext} isDisable={isdisable} id={inputid}/>
    </div>
     )
}

export {UserData}