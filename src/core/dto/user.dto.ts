import { IsString, IsInt, IsEmail, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserRes {
    @ApiModelProperty()
    @IsString()
    username: string;

    @ApiModelProperty()
    @IsString()
    password: string;
}

export class EditUserRes {
    @IsString()
    name: string;

    @IsString()
    mobile: number;

    @IsEmail()
    @IsOptional()
    email?: string;
    company?: string;
    siteUrl?: string;
    address?: string;
}
