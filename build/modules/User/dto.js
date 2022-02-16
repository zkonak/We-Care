"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserDTO {
    constructor({ id, email, name, password }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
exports.default = UserDTO;
