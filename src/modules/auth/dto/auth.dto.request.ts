import { IsEmail, IsString, IsNotEmpty } from "class-validator";

export class RequestLogin {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class RequestRegister {
    @IsString()
    userName: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    confirmPassword: string;

    @IsString()
    birthDate: string;
}