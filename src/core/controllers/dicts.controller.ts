import { Controller, Get, Post, Body, UseGuards, Param, Put, ParseIntPipe, Query, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { ResultList } from 'common/interfaces/result.interface';
import { ApiResponse } from '@nestjs/swagger';
import { KeyValueDto } from './../dto/key-value.dto';
import { DictsService } from './dicts.service';
import { Dict } from './../interfaces/dict.interface';
import { CreateDictDto } from './../dto/create-dict.dto';
import { EditDictDto } from './../dto/edit-dict';

@Controller('dicts')
@UseGuards(AuthGuard('jwt'))
export class DictsController {
  constructor(private readonly dictService: DictsService) { }

  @Post()
  async create(@Body() entry: CreateDictDto) {
    return this.dictService.create(plainToClass(CreateDictDto, entry));
  }

  @Put()
  async update(@Body() entry: EditDictDto): Promise<Dict> {
    return this.dictService.update(plainToClass(EditDictDto, entry));
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
    return this.dictService.search(keyword, value);
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
  ): Promise<ResultList<Dict>> {
    return this.dictService.query(index, size, { keyword });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Dict> {
    return this.dictService.findById(id);
  }

}
