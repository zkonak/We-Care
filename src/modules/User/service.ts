import UserDTO from "./dto";
import  ApiError  from "../../helpers/ApiError";

class UserService {
	public userRepo: any;
	public mailerService: any;

  constructor(userRepository, mailerService) {
    this.userRepo = userRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const users = await this.userRepo.findAll();
    return users.map((user) => new UserDTO(user));
  }

  async register(userData) {
    if (!userData.email || !userData.password)
      throw new ApiError(400, "Missing required email and password fields");

    const newUser = await this.userRepo.addNew(userData);
    await this.mailerService.sendMail(userData);
    return new UserDTO(newUser);
  }

  async login(userData) {
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

  async findByEmail(userData) {
    return await this.userRepo.findByEmail(new UserDTO(userData));
  }

  async findById(id) {
    return await this.userRepo.findOne(new UserDTO({ id: id }));
  }

  async getOne(userData) {
    const user = await this.userRepo.findOne(userData);
    if (!user) {
      throw new ApiError("Ressource not exists");
    }
    return new UserDTO(user);
  }

  async update(userData) {
    const user = await this.getOne(userData);
    const userUpdated = this.userRepo.update(user);
    return new UserDTO(userUpdated);
  }
  async delete(userData) {
    const user = await this.getOne(userData);
    const userDeleted = this.userRepo.delete(user);
    return new UserDTO(userDeleted);
  }
}

export default UserService;
