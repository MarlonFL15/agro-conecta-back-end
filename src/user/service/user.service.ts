import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';
import { UpdateUserDTO } from '../dto/update-user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const { email } = createUserDTO;

    const existingUser = await this.userRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException('E-mail already in use');
    }

    const user = new User(createUserDTO);

    return this.userRepository.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async updateUser(id: number, updateUserDTO: UpdateUserDTO): Promise<User> {
    const existingUser = await this.userRepository.findOne({ where: { id } });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    existingUser.phone = updateUserDTO.phone;
    existingUser.name = updateUserDTO.name;

    return this.userRepository.save(existingUser);
  }
}
