import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}