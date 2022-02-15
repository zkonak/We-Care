class UserDTO {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
    const userRepo = new UserRepository();
  }
}

export default UserDTO;
