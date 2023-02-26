import { v4 as uuid } from "uuid";
import { Request, Response } from "express";
import { User } from "../interfaces/user";

/*Test emails:
a@gmail.com;
b@gmail.com;
c@gmail.com; 
*/
export const createSession = async (req: Request, res: Response) => {
  //FIXME: Maybe add filter for removing empty string 
  const data: User = {
    id: uuid(),
    name: req.body.name,
    guests: req.body.guests.replace(/[\r\n]+/gm, "").trim().split(";"),
  };
  
  console.log(data);

  res.render("session", { data });
};
