import { Request, Response } from "express";

export const special = (req: Request, res: Response) => {
  return res.json({ msg: "Authenticated!." });
};
