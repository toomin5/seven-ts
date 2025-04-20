import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../lib/token";
import { User } from "../../src/types/user.type";

export function authMiddleware(req:Request, res:Response, next:NextFunction) {
  
}