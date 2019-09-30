import { repositoryBase } from "./repositoryBase";
import { Document, Schema, Model, model } from "mongoose";
import bcrypt from "bcrypt";
import { rejects } from "assert";
enum Role {
  ADMIN = "admin",
  USER = "user"
}

export interface IUser {
  email: string;
  password: string;
  role: Role;
}
interface IUserDocument extends Document {
  email: IUser["email"];
  password: IUser["password"];
  role: IUser["role"];
  comparePassword(pass: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUserDocument> {
  //hashPassword(password: string): string;
}
const schema = new Schema({
  email: { type: String, index: { unique: true }, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: [Role.ADMIN, Role.USER],
    default: Role.USER
  }
});

schema.pre("save", function(next) {
  var user = this;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    //@ts-ignore
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      //@ts-ignore
      user.password = hash;
      next();
    });
  });
});

schema.method("comparePassword", function(
  candidatePassword: string
): Promise<boolean> {
  console.log("compare");
  return new Promise((resolve, rejects) => {
    //@ts-ignore

    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return rejects(err);
      resolve(isMatch);
    });
  });

  /* //@ts-ignore
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  }); */
});

export class userRepo extends repositoryBase<IUser, IUserDocument, IUserModel> {
  constructor() {
    super("user", schema);
  }

  create(newUSer: IUser): Promise<IUserDocument> {
    return this._model.create(newUSer);
  }
  async findOne(input: {
    [index: string]: any;
  }): Promise<IUserDocument | null> {
    const user = await this._model.findOne(input);

    return user;
  }
}
