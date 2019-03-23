import { IsString, IsInt, IsJSON } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateDictDto {
  @ApiModelProperty()
  @IsString()
  readonly category: string;

  @ApiModelProperty()
  @IsString()
  readonly name: string;

  @ApiModelProperty()
  @IsString()
  readonly translate: string;

  @ApiModelProperty()
  @IsJSON()
  readonly expand: object;
}
