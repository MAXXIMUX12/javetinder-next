import { IsEmail, IsString, IsNotEmpty, MinLength, IsDateString } from "class-validator";

export class RequestLogin {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class RequestRegister {
    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsString()
    @IsNotEmpty()
    confirmPassword: string;

    @IsString()
    @IsDateString()
    @IsNotEmpty()
    birthDate: string;

    @IsNotEmpty()
    @IsString()
    faculty: string;

    @IsNotEmpty()
    @IsString()
    career: string;
}

export class RequestUpdatePassword {
    @IsEmail()
    email: string;
    @IsString()
    @IsNotEmpty()
    oldPassword: string;
    @IsString()
    @IsNotEmpty()
    newPassword: string;
    @IsString()
    @IsNotEmpty()
    confirmNewPassword: string;
}

export class RequestRecoverPassword {
    @IsEmail()
    email: string;
}