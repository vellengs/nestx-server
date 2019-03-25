import { Controller, Get, Post, Body, UseGuards, Param, Put, ParseIntPipe, Query, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { ResultList } from 'common/interfaces/result.interface';
import { ApiResponse } from '@nestjs/swagger';
import { KeyValueDto } from './../dto/key-value.dto';
import { LogsService } from './logs.service';
import { Log } from './../interfaces';

@Controller('logs')
@UseGuards(AuthGuard('jwt'))
export class LogsController {
  constructor(private readonly logService: LogsService) { }

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
    return this.logService.search(keyword, value);
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
  ): Promise<ResultList<Log>> {
    return this.logService.query(index, size, { keyword });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Log> {
    return this.logService.findById(id);
  }

}
