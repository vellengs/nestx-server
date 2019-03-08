import { Controller, Get, Post, Body, UseGuards, Param, Put, ParseIntPipe, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';
import { EditUserDto } from './dto/edit-user.dto';
import { plainToClass } from 'class-transformer';
import { ResultList } from 'common/interfaces/result.interface';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get(':id')
  async findOne(@Param('id') id): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() user: CreateUserDto) {
    this.usersService.create(plainToClass(CreateUserDto, user));
  }

  @Put()
  async update(@Body() user: EditUserDto): Promise<User> {
    return await this.usersService.update(plainToClass(EditUserDto, user));
  }

  @Get(':size/:index')
  async findAll(
    @Param('index', new ParseIntPipe()) index: number = 1,
    @Param('size', new ParseIntPipe()) size: number = 10,
    @Query() query): Promise<ResultList<User>> {
    return await this.usersService.findAll(index, size, query);
  }

}
