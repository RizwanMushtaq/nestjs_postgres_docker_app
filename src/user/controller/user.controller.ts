import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  add(@Body() user: User): Observable<User> {
    return this.userService.add(user);
  }

  @Get()
  findAll(): Observable<User[]> {
    return this.userService.findAll();
  }
}
