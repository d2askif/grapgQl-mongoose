import { userRepo } from "../userRepo";
import { IUser, IUserDocument } from "../type/IUser";
import { SignUpType } from "../type/SignUpType";
import {
  SignUpUserExist,
  UnknownError,
  NoUserFound,
  NotYourAccount
} from "../resolvers/errorResolvers";
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
import { IChangePassword } from "../type/IChangePassword";
import { rejects } from "assert";

export class UserService {
  private userModel: userRepo;
  constructor(userModel: userRepo) {
    this.userModel = userModel;
  }

  async createUser(input: IUser): Promise<SignUpType> {
    const user = await this.userModel.findOne({ email: input.email });
    if (!user) {
      try {
        const newUser = await this.userModel.create(input);
        const token = this.generateToken(newUser);
        return { token };
      } catch (e) {
        throw new UnknownError();
      }
    }
    throw new SignUpUserExist();
  }

  async signIn(input: IUser) {
    try {
      const user = await this.userModel.findOne({ email: input.email });

      if (user) {
        let isUserAccount = await user.comparePassword(input.password);

        console.log({ isUserAccount });

        if (isUserAccount) {
          const token = this.generateToken(user);
          return { token };
        }

        return new NotYourAccount();
      }

      return new NoUserFound();
    } catch (e) {
      return new UnknownError();
    }
  }

  generateToken(user: IUserDocument) {
    const id = user._id;
    const token = jwt.sign({ id }, "secret", { expiresIn: "10h" });
    return token;
  }

  hashPassword(password: string) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

  async comparePassword(
    hashPassword: string,
    password: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }

  async changePassword(user: IUserDocument, change: IChangePassword) {
    const isUserAccount = await this.comparePassword(
      user.password,
      change.oldPassword
    );

    if (isUserAccount) {
      user.password = this.hashPassword(change.newPassword);
      try {
        await user.save();
      } catch (e) {
        return new UnknownError();
      }

      return true;
    }

    throw new NotYourAccount();
  }

  findUserById(id: string): Promise<IUserDocument | null> {
    return this.userModel.findById(id);
  }

  listUsers() {
    return this.userModel.all();
  }
}
