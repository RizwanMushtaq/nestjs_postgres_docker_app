import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entity';
import { Repository } from 'typeorm';
import { User } from '../models/user.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  add(user: User): Observable<User> {
    return from(this.userRepository.save(user));
  }

  findAll(): Observable<User[]> {
    return from(this.userRepository.find());
  }
}
