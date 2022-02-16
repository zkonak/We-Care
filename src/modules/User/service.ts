import UserDTO from "./dto";
import { IUserRepository } from "./repository";
import { ApiError } from "../../helpers/ApiError";





export interface IUserService {
  getAll() : Promise<UserDTO[]>
  register(userData: any) : Promise<UserDTO>
  login(userData: any) : Promise<UserDTO>
  findByEmail(userData:any):Promise<UserDTO>
  findById(id:any):Promise<UserDTO>
  getOne(userData:any):Promise<UserDTO>
  update(userData:any):Promise<UserDTO>
  delete(userData:any):Promise<UserDTO>

}


class UserService implements IUserService {
	public userRepo: any;
	public mailerService: any;

  constructor(userRepository:IUserRepository, mailerService:any) {
    this.userRepo = userRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const users = await this.userRepo.findAll();
    return users.map((user:any) => new UserDTO(user));
  }

  async register(userData:any) {
    if (!userData.email || !userData.password)
      throw new ApiError(400, "Missing required email and password fields");

    const newUser = await this.userRepo.addNew(userData);
    await this.mailerService.sendMail(userData);
    return new UserDTO(newUser);
  }

  async login(userData:any) {
    if (!userData.email || !userData.password)
      throw new ApiError(400, "Missing required email and password fields");

    const user = await this.userRepo.findByEmail(userData);
    if (!user)
      throw new ApiError(400, "User with the specified email does not exists");

    const passwordMatch = await this.userRepo.compareHash(
      userData.password,
      user.password
    );
    if (!passwordMatch) throw new ApiError(400, "User password do not match");

    return new UserDTO(user);
  }

  async findByEmail(userData:any) {
    return await this.userRepo.findByEmail(new UserDTO(userData));
  }

  async findById(id:any) {
    return await this.userRepo.findOne(id);
  }

  async getOne(userData:any): Promise<UserDTO> {
    const user = await this.userRepo.findOne(userData);
    if (!user) {
      //throw new ApiError("Ressource not exists");
    }
    return new UserDTO(user);
  }

  async update(userData:any) {
    const user = await this.getOne(userData);
    const userUpdated = this.userRepo.update(user);
    return new UserDTO(userUpdated);
  }
  async delete(userData:any) {
    const user = await this.getOne(userData);
    const userDeleted = this.userRepo.delete(user);
    return new UserDTO(userDeleted);
  }
}

export default UserService;
