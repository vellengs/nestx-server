import { Controller, Get, Post, Body, UseGuards, Param, Put, ParseIntPipe, Query, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { ResultList } from './../../common/interfaces/result.interface';
import { ApiResponse } from '@nestjs/swagger';
import { KeyValueDto } from './../dto/key-value.dto';
import { MenusService } from './menus.service';
import { Menu } from './../interfaces/Menu.interface';
import { CreateMenuDto } from './../dto/create-menu.dto';
import { EditMenuDto } from './../dto/edit-menu.dto';

@Controller('menus')
@UseGuards(AuthGuard('jwt'))
export class MenusController {
  constructor(private readonly menuService: MenusService) { }

  @Post()
  async create(@Body() entry: CreateMenuDto) {
    return this.menuService.create(plainToClass(CreateMenuDto, entry));
  }

  @Put()
  async update(@Body() entry: EditMenuDto): Promise<Menu> {
    return this.menuService.update(plainToClass(EditMenuDto, entry));
  }

  @Get('search')
  @ApiResponse({
    status: HttpStatus.OK,
    type: [KeyValueDto],
    description: 'Available search keywords'
  })
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.menuService.search(keyword, value);
  }

  @Get('query')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Paginated result list'
  })
  async query(
    @Query('keyword') keyword?: string,
    @Query('index', new ParseIntPipe()) index: number = 1,
    @Query('size', new ParseIntPipe()) size: number = 10,
  ): Promise<ResultList<Menu>> {
    return this.menuService.query(index, size, { keyword });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Menu> {
    return this.menuService.findById(id);
  }

}
