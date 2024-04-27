import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Avatar from "@mui/material/Avatar";
import { AvatarGroup } from "@mui/material";
import { deepOrange, deepPurple, lightBlue, red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  height: "550px",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "40px",
  boxShadow: 24,
  overflow: "hidden",
};

export default function ToDo({taskData}) {
  const [open, setOpen] = React.useState(false);
  const [openComments, setOpenComments] = React.useState(false);


  const handleModal = () => {
    setOpen(!open);
  };

  const handleComments = () =>{
    setOpen(false);
    setOpenComments(!open);
  }

  console.log("open: ", open);

  return (
    <>
      <div
        className="h-[80px] w-[100%] flex items-center justify-between p-[10px] shadow-lg rounded-lg bg-[#FFFFFF] mt-3"
        onClick={handleModal}
      >
        <Checkbox className="w-[23px] h-[23px] bg-[#000000] opacity-15" />
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
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card className="w-[100%] h-[100%] rounded-2xl">
            <CardHeader className="flex items-start flex-col justify-between h-30">
              <CardTitle className="flex items-center justify-between w-48 mb-3 text-2xl">
                {" "}
                <Checkbox className=" w-[23px] h-[23px]" /> Do something
              </CardTitle>
              <div className="h-[1px] w-[100%] bg-black opacity-15 "></div>
              <CardDescription className="flex items-center justify-between w-[100%] mt-3">
                {" "}
                Assigned to{" "}
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
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Button
                variant="outline"
                className="w-[150px] h-[35px] bg-gradient-to-r from-[#0060F9] to-[#36A9E1] text-white"
              >
                Status: In progress
              </Button>
              <CardDescription className="mt-5 w-[100%]">
                {" "}
                created by:{" "}
                <span className="text-[#0089f9]">Dev Team Leader</span>
                <div className="text-[#2F0466] my-3 text-sm">
                  Priority:{" "}
                  <span className=" p-1 text-white text-xs bg-[#FF0707] rounded-full">
                    Urgent
                  </span>
                </div>
              </CardDescription>
              <div className="h-[1px] w-[100%] bg-black opacity-15 "></div>
              <CardDescription className="w-[100%] mt-3 text-[12px]">
                {" "}
                Tags:{" "}
                <span className="text-[#0089f9]">
                  TagTest, TagTest, MoreTags
                </span>
                <div className="text-[#2F0466] mt-3">Task Description:</div>
                <div className="w-[100%] flex items-center justify-center">
                  <div className="w-auto h-auto shadow-lg overflow-hidden p-[10px] text-[12px] text-ellipsis">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit consequatur recusandae rerum pariatur adipisci
                    dolores!
                  </div>
                </div>
              </CardDescription>
              <div className="w-auto text-[12px] mt-3">
                Due time : Today, 16:00 P.M - Apr,27th
              </div>
            </CardContent>

            <CardFooter>
              <div className="flex flex-col items-center justify-center w-full">
          
                  <span onClick={handleComments} className="text-[12px] text-[#FF3555]">
                    Switch to Comments
                  </span>
                <span className="text-[12px]">Mark as done</span>
              </div>
            </CardFooter>
          </Card>
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card className="w-[100%] h-[100%] rounded-2xl">
            <CardHeader className="flex items-start flex-col justify-between h-30">
              <CardTitle className="flex items-center justify-between w-48 mb-3 text-2xl">
                {" "}
                <Checkbox className=" w-[23px] h-[23px]" /> Do something
              </CardTitle>
              <div className="h-[1px] w-[100%] bg-black opacity-15 "></div>
              <CardDescription className="flex items-center justify-between w-[100%] mt-3">
                {" "}
                Assigned to{" "}
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
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Button
                variant="outline"
                className="w-[150px] h-[35px] bg-gradient-to-r from-[#0060F9] to-[#36A9E1] text-white"
              >
                Status: In progress
              </Button>
              <CardDescription className="mt-5 w-[100%]">
                {" "}
                created by:{" "}
                <span className="text-[#0089f9]">Dev Team Leader</span>
                <div className="text-[#2F0466] my-3 text-sm">
                  Priority:{" "}
                  <span className=" p-1 text-white text-xs bg-[#FF0707] rounded-full">
                    Urgent
                  </span>
                </div>
              </CardDescription>
              <div className="h-[1px] w-[100%] bg-black opacity-15 "></div>
              <CardDescription className="w-[100%] mt-3 text-[12px]">
                {" "}
                Tags:{" "}
                <span className="text-[#0089f9]">
                  TagTest, TagTest, MoreTags
                </span>
                <div className="text-[#2F0466] mt-3">Task Description:</div>
                <div className="w-[100%] flex items-center justify-center">
                  <div className="w-auto h-auto shadow-lg overflow-hidden p-[10px] text-[12px] text-ellipsis">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit consequatur recusandae rerum pariatur adipisci
                    dolores!
                  </div>
                </div>
              </CardDescription>
              <div className="w-auto text-[12px] mt-3">
                Due time : Today, 16:00 P.M - Apr,27th
              </div>
            </CardContent>

            <CardFooter>
              <div className="flex flex-col items-center justify-center w-full">
          
                  <span onClick={handleComments} className="text-[12px] text-[#FF3555]">
                    Switch to Comments
                  </span>
                <span className="text-[12px]">Mark as done</span>
              </div>
            </CardFooter>
          </Card>
        </Box>
      </Modal>
    </>
  );
}
