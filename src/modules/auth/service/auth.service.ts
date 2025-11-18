import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RequestLogin, RequestRecoverPassword, RequestUpdatePassword } from '../dto/auth.dto.request';
import { AuthRepository } from '../repository/auth.repository';
import { RequestRegister } from '../dto/auth.dto.request';
import { ResponseLogin, ResponseLogout, ResponseRecoverPassword, ResponseUpdatePassword } from '../dto/auth.response.dto';
import { ResponseRegister } from '../dto/auth.response.dto';

@Injectable()
export class AuthService {

    constructor(private readonly authRepository: AuthRepository) {}

    async login(body: RequestLogin): Promise<ResponseLogin> {
        const user = await this.authRepository.getEmail(body.email);

        if (user.password !== body.password) { throw new UnauthorizedException("Invalid password or email"); }
        let response = {
            message: "Success"
        };
        return response
    }

    async logout(): Promise<ResponseLogout> {
        return { message: 'Sesión cerrada correctamente' };
    }

    async register(body: RequestRegister): Promise<ResponseRegister> {
        let currentDate: Date = new Date();
        currentDate.setFullYear(currentDate.getFullYear()-18);
        if (new Date(body.birthDate) > currentDate) { throw new BadRequestException("You must be 18 or more"); }
        if (body.password.length < 8) { throw new BadRequestException("Password must contain minimum 8 characters"); }
        if (body.password !== body.confirmPassword) {throw new BadRequestException("Passwords do not match"); }
        const existing = await this.authRepository.getEmail(body.email);
        if (existing) {throw new BadRequestException("The email is already being used");}

        this.authRepository.createUser({
            name: body.userName,
            email: body.email,
            password: body.password,
            birthDate: body.birthDate,
            faculty: body.faculty,
            career: body.career
        });

        let response = {
            message: "User created succesfully"
        };
        return response
    }

    async updatePassword(body: RequestUpdatePassword): Promise<ResponseUpdatePassword> {
        const user = await this.authRepository.getEmail(body.email);
        if (!user) {throw new BadRequestException("User not found");}
        if (user.password !== body.oldPassword) {throw new BadRequestException("Incorrect current password");}
        if (body.newPassword !== body.confirmNewPassword) {throw new BadRequestException("New password do not match");}

        await this.authRepository.updatePassword(body.email, body.newPassword);

        let response = {
            message: "Password Updated Seccessfully"
        };
        return response
    }

    async recoverPassword(body: RequestRecoverPassword): Promise<ResponseRecoverPassword> {
        const user = this.authRepository.getEmail(body.email);
        if (!user) throw new BadRequestException('Email not found');

        let response = {
            message: "Instructions were sent to your email"
        }

        return response
    }
}