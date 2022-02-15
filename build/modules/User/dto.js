"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserDTO {
    constructor({ name, email, password }) {
        this.name = name;
        this.email = email;
        this.password = password;
        const userRepo = new UserRepository();
    }
}
exports.default = UserDTO;
