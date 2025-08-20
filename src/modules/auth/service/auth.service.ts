import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RequestLogin } from '../dto/auth.dto.request';
import { AuthRepository } from '../repository/auth.repository';
import { RequestRegister } from '../dto/auth.dto.request';
import { ResponseLogin } from '../dto/auth.response.dto';
import { ResponseRegister } from '../dto/auth.response.dto';

@Injectable()
export class AuthService {

    constructor(private readonly authRepository: AuthRepository) {}

    async login(body: RequestLogin): Promise<ResponseLogin> {
        const user = this.authRepository.getEmail(body.email);

        if (user.password !== body.password) { throw new UnauthorizedException("Invalid password or email"); }
        let response = {
            message: "Success"
        };
        return response
    }

    async register(body: RequestRegister): Promise<ResponseRegister> {
        let currentDate: Date = new Date();
        currentDate.setFullYear(currentDate.getFullYear()-18);
        if (new Date(body.birthDate) > currentDate) { throw new BadRequestException("You must be 18 or more"); }
        let passwordReg = body.password; 
        if (passwordReg.length < 8) { throw new BadRequestException("Password must contain minimum 8 characters"); }
        let response = {
            message: "User created succesfully"
        };
        return response
    }
}