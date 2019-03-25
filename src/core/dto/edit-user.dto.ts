import { IsString, IsOptional, IsEmail } from 'class-validator';

export class EditUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly mobile: number;

  @IsEmail()
  @IsOptional()
  readonly email?: string;
  readonly company?: string;
  readonly siteUrl?: string;
  readonly address?: string;
}
