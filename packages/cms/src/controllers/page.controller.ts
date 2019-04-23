import {
  Controller,
  Get,
  Query,
  Post,
  Put,
  Delete,
  Param,
  Body
} from "@nestjs/common";
import { Tags } from "nest-swagger";
import { PageService } from "./page.service";
import { CreatePageReq, PageRes, EditPageReq } from "./../dto";
import { NullableParseIntPipe, ResultList, KeyValue } from "nestx-common";

@Tags("cms")
@Controller("page")
export class PageController {
  constructor(private readonly service: PageService) {}

  @Get("search")
  async search(
    @Query("keyword") keyword?: string,
    @Query("value") value?: string
  ): Promise<KeyValue[]> {
    return this.service.search(keyword, value);
  }

  @Post()
  async create(@Body() entry: CreatePageReq): Promise<PageRes> {
    return this.service.createPage(entry);
  }

  @Put()
  async update(@Body() entry: EditPageReq): Promise<PageRes> {
    return this.service.updatePage(entry);
  }

  @Get("query")
  async query(
    @Query("keyword") keyword?: string,
    @Query("page", new NullableParseIntPipe()) page: number = 1,
    @Query("size", new NullableParseIntPipe()) size: number = 10,
    @Query("sort") sort?: string
  ): Promise<ResultList<PageRes>> {
    return this.service.querySearch(keyword, page, size, sort);
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<boolean> {
    return this.service.remove(id);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<PageRes> {
    return this.service.get(id);
  }
}
