import { userRepo } from "./userRepo";
import { UserService } from "./service/UserService";
export class ModelFactory {
  constructor() {}
  createUserService(): UserService {
    const userModel = new userRepo();
    const userService = new UserService(userModel);
    return userService;
  }
}
