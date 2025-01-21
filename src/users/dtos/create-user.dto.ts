import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(3, {
        message: "Name is too short"
    })
    name: string;

    @IsOptional()
    @IsString()
    gender?: string;

    @IsEmail()
    @IsString()
    email: string;

    @IsBoolean()
    isMarried: boolean
}