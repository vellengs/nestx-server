import { Controller, Get, Post, Body, UseGuards, Param, Put, ParseIntPipe, Query, Req, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './../dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './../interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';
import { EditUserDto } from './../dto/edit-user.dto';
import { plainToClass } from 'class-transformer';
import { ResultList } from 'common/interfaces/result.interface';
import { ApiResponse } from '@nestjs/swagger';
import { KeyValueDto } from './../dto/key-value.dto';

type ListKeyValue = KeyValueDto[];
@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('profile')
  async profile(@Req() request: any): Promise<User> {
    const user = request.user;
    return this.usersService.findById(user._id);
  }

  @Post()
  async create(@Body() user: CreateUserDto) {
    return this.usersService.create(plainToClass(CreateUserDto, user));
  }

  @Put()
  async update(@Body() user: EditUserDto): Promise<User> {
    return this.usersService.update(plainToClass(EditUserDto, user));
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }

  @Get('search')
  @ApiResponse({
    status: HttpStatus.OK,
    type: [KeyValueDto],
    description: 'Available search keywords'
  })
  async getAccountsByKeyword(
    @Param('keyword') keyword?: string,
    @Param('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.usersService.search(keyword, value);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Paginated result list'
  })
  @Get(':size/:index')
  async findAll(
    @Param('index', new ParseIntPipe()) index: number = 1,
    @Param('size', new ParseIntPipe()) size: number = 10,
    @Query() query): Promise<ResultList<User>> {
    return this.usersService.findAll(index, size, query);
  }

}
