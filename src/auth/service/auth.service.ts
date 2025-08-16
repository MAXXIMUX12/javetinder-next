import { Injectable } from '@nestjs/common';
import { RequestLogin } from '../dto/auth.dto.request';
import { AuthRepository } from '../repository/auth.repository';
import { RequestRegister } from '../dto/auth.dto.request';

@Injectable()
export class AuthService {

    constructor(private readonly authRepository: AuthRepository) {}

    login(body: RequestLogin): string {
        let response = "";
        const user = this.authRepository.getEmail(body.email);
        response = (user.password === body.password) ? "Success" : "Invalid password or email";
        return response
    }

    register(body: RequestRegister): string {
        let response = "";
        let currentDate: Date = new Date();
        currentDate.setFullYear(currentDate.getFullYear()-18);
        if (new Date(body.birthDate) > currentDate) { return "You must be 18 or more" }
        let passwordReg = body.password; 
        if (passwordReg.length < 8) {return "Password must contain minimum 8 characters"}

        return response
    }
}
