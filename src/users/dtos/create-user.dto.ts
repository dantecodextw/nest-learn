import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { createProfileDto } from "src/profile/dto/create-profile.dto";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(24)
    userName: string

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, {
        message: "Password length has to be 8 char"
    })
    password: string

    @IsOptional()
    profile: createProfileDto | null
}