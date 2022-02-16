import {EntityRepository, EntityManager} from "typeorm";
import bcrypt from 'bcrypt';
import { User } from "./entity";







export interface IUserRepository {
  findAll() : Promise<User[]>
  addNew(userEntity: any) : Promise<any>
  findByEmail(userEntity: any) : Promise<User | undefined>
  compareHash(password: string, hash: string) : Promise<boolean> 
}

@EntityRepository()
class UserRepository implements IUserRepository {

  

  constructor(private manager: EntityManager) {
  }

  async findAll() {
    return await this.manager.find(User);
}

  async addNew(userEntity:any) {
    const salt = bcrypt.genSaltSync(10);
    userEntity.password = bcrypt.hashSync(userEntity.password, salt);
    return await this.manager.save(User,userEntity);
  }

  async findByEmail(userEntity:any) {
    return await this.manager.findOne(User,{ where: { email: userEntity.email } });
  }
  async findOne(id:any) {
    return await this.manager.findOne(User,{ where: { id: id } });
  }

  compareHash = async (password:any, hash:any) =>
    await bcrypt.compareSync(password, hash);

  async update(userEntity:any) {
    //return await this.manager.update(User,userEntity);
  }

 async delete(userEntity:any) {
    //return await this.manager.delete(userEntity);
  }
}

export default UserRepository;
