import { Checkbox } from "@/components/ui/checkbox";
import Avatar from "@mui/material/Avatar";
import { AvatarGroup } from "@mui/material";
import { deepOrange, deepPurple, lightBlue, red } from "@mui/material/colors";

export default function ToDo() {
  return (
    <div className="h-[80px] w-[100%] flex items-center justify-between p-[10px] shadow-lg rounded-lg bg-[#FFFFFF] mt-3">
      <Checkbox className="w-[23px] h-[23px] bg-[#000000] opacity-15"/>
      <div className="flex flex-col text-#2F0466 font-medium">
        Do something
        <span className="text-#000000 opacity-45">tap to learn more</span>
      </div>
      <AvatarGroup>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 22, height: 22, bgcolor: deepOrange[500] }}
        />
        <Avatar
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
          sx={{ width: 22, height: 22, bgcolor: deepPurple[500] }}
        />
        <Avatar
          alt="Agnes Walker"
          src="/static/images/avatar/4.jpg"
          sx={{ width: 22, height: 22, bgcolor: red[500] }}
        />
        <Avatar
          alt="Trevor Henderson"
          src="/static/images/avatar/5.jpg"
          sx={{ width: 22, height: 22, bgcolor: lightBlue[500] }}
        />
      </AvatarGroup>
    </div>
  );
}
