import { IsDate, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class createProfileDto {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @MinLength(3, {
        message: "First Name is too short"
    })
    firstName?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @MinLength(3, {
        message: "Last Name is too short"
    })
    @MaxLength(100)
    lastName?: string;

    @IsOptional()
    @IsString()
    @IsOptional()
    gender?: string;

    @IsOptional()
    @IsDate()
    dateOfBirth?: Date

    @IsString()
    @IsOptional()
    bio?: string;
}