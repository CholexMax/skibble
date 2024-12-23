import { Button } from "./Components/Button";
import { Icon } from "./Components/Icon";
import { UserData } from "./Components/UserData";
function Login()
{
    return (
        <div className="grid gap-6 rounded-2xl p-2 bg-purple-700">
          <div>
            <Icon imageUrl="https://cdn-icons-png.flaticon.com/128/300/300221.png" altText="gogole logo"/>
          </div>
          <div className="flex flex-col gap-2">
             <div>
              <UserData labeltext="Email" hintext="enter the email" isdisable={false} inputid="emailId"/>
             </div>
             <div className="flex justify-center">
            <Button isIconAllow={false} Text="LOGIN"/>
             </div>
          </div>
        </div>
    )
}

export {Login}