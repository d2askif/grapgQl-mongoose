import { Document } from "mongoose";
export enum Role {
  ADMIN = "admin",
  USER = "user"
}
export interface IUser {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role: Role;
  isActive?: boolean;
}

export interface User {
  firstName?: string;
  lastName?: string;
  email: string;
  role: Role;
  isActive?: boolean;
}

export interface IUserDocument extends Document {
  email: IUser["email"];
  password: IUser["password"];
  role: IUser["role"];
}
